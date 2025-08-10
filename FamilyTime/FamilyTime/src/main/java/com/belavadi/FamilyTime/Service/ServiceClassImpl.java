package com.belavadi.FamilyTime.Service;
import java.text.DecimalFormat;
import java.time.Duration;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.method.annotation.HttpHeadersReturnValueHandler;
import java.util.Map;
import com.belavadi.FamilyTime.DTO.DescriptionDto;
import com.belavadi.FamilyTime.DTO.OtpDTO;
import com.belavadi.FamilyTime.DTO.SignInDTO;
import com.belavadi.FamilyTime.DTO.SignUpDTO;
import com.belavadi.FamilyTime.Entity.UserEntity;
import com.belavadi.FamilyTime.Repository.RepositoryInterface;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class ServiceClassImpl implements ServiceInterface{

    @Autowired
    private RepositoryInterface repoInterface;

    @Autowired
    private JavaMailSender sender;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Value("${ollama.api.base-url}")
    private String[] ollamaBaseUrls;

    private final RestTemplate restTemplate = new RestTemplate();


    @Override
    public UserEntity signUp(SignUpDTO dto) {
        UserEntity entity = new UserEntity();

        if(dto != null){
            entity.setName(dto.getName());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setPassword(encoder.encode(dto.getPassword()));
            return repoInterface.save(entity);
        }   
        
        return null;
    }


    public boolean accountExistsOrNot(String email){
        if(repoInterface.findByEmail(email)!=null){
            return true;
        }
        return false;
    }

    @Override
    public boolean signIn(SignInDTO dto) {
        
        UserEntity entityUserPassword =repoInterface.findByEmail(dto.getEmail());
        if(encoder.matches(dto.getPassword(), entityUserPassword.getPassword())){
            return true;
        }
        return false;
    }

    @Override
    public String getOtp(String email) {
        UserEntity entity = repoInterface.findByEmail(email);
        if(entity != null){
            String otp = new DecimalFormat("000000").format(new Random().nextInt(999999));
            SimpleMailMessage mailOtp = new SimpleMailMessage();
            mailOtp.setTo(email);
            mailOtp.setSubject("You OTP for Reset password");
            mailOtp.setText("Otp is: "+otp);
            sender.send(mailOtp);
            entity.setOtp(otp);
            entity.setLocalTime(LocalTime.now());
            repoInterface.save(entity);
            return otp;
        }
        return "Email does not exists";
    }


    @Override
    public boolean checkOtp(OtpDTO dto) {
        if(dto == null){
            return false;
        }

        UserEntity entity = repoInterface.findByEmail(dto.getEmail());

        if(entity != null){
            String entityOtp = entity.getOtp();
            LocalTime entityTime = entity.getLocalTime();

            boolean correctOtp = dto.getOtp().equals(entityOtp);

            boolean withInTime = entityTime!=null && Duration.between(entityTime, LocalTime.now()).toSeconds()<=180;

            // System.out.println("Verifying OTP for email: " + dto.getEmail());
            // System.out.println("Stored OTP: " + entity.getOtp());
            // System.out.println("Submitted OTP: " + dto.getOtp());
            // System.out.println("Time issued: " + entityTime + ", Current time: " + LocalTime.now());
            // System.out.println("Valid within 3 minutes? " + withInTime);

            if(correctOtp && withInTime){
                entity.setOtp(null);
                entity.setLocalTime(null);
                repoInterface.save(entity);
                return true;
            }else if(!correctOtp){
                return false;
            }
        }
        return false;
    }


    @Override
    public boolean setPassword(SignUpDTO dto) {
        if(dto.getPassword()==null && dto.getConfirmPasswrod()==null){
            return false;
        }
        return true;
    }


    @Override
    public String generateStory(DescriptionDto dto) {

        String endPoint = ollamaBaseUrls[0] +"/api/generate";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        String prompt = "You are a smart, creative story writer"+
        "Write a positive story on "+ dto.getFirstInput()+ dto.getSecondInput() + " for the occassion of "+dto.getOccasion()+" from details given below. "+
        "The story should contain 10 chapters, and each chapter is just a paragraph. "+
        "Overall, it should have a simple storyline related to the occasion given above. "+
        "Details: "+dto.getDescription();
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "llama3:latest");
        requestBody.put("prompt", prompt);
        requestBody.put("stream", false);
        System.out.println("request body is: " + requestBody);
        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
        try{
            ResponseEntity<String> response = restTemplate.exchange(
                    endPoint,
                    HttpMethod.POST,
                    request,
                    String.class
            );
            System.out.println(response.getBody());
            return response.getBody();
        }catch(HttpClientErrorException e){
            System.out.println("API request filed "+e.getMessage());
            throw new RuntimeException("Failed to get Story: "+e.getMessage());
        }    

        

    }
 

    
    
}