package com.belavadi.FamilyTime.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.belavadi.FamilyTime.DTO.DescriptionDto;
import com.belavadi.FamilyTime.DTO.SetPassword;
import com.belavadi.FamilyTime.DTO.SignInDTO;
import com.belavadi.FamilyTime.DTO.SignUpDTO;
import com.belavadi.FamilyTime.Service.ServiceInterface;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/auth")
@Controller
public class ControllerClass {

    @Autowired
    private ServiceInterface serviceInterface;

    @Autowired
    private JavaMailSender sender;

    //SignUP
    @PostMapping("/signUp")
    public ResponseEntity<String> signUp(@RequestBody SignUpDTO dto) throws MessagingException {
        System.out.println("Data from controller: "+dto);
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        if(serviceInterface.accountExistsOrNot((String) dto.getEmail())){
            return new ResponseEntity<>("Account already exists", HttpStatus.CONFLICT);
        }
        else{
            serviceInterface.signUp(dto);
            String content = "<div style= 'background: linear-gradient(to right, #00c6ff, #0072ff); padding: 20px; border-radius: 10px; color: white;'>"+
                            "<h2>✅ Success!</h2>"+
                            "<p>Your account has been created</p>"
                            +"</div>";
            helper.setTo(dto.getEmail());
            helper.setSubject("Account Creation");
            helper.setText(content, true);
            sender.send(message);
            return new ResponseEntity<>(HttpStatus.OK);
        }

    }

    //SigIn
    @PostMapping("/login")
    public ResponseEntity<String> signIn(@RequestBody SignInDTO dto, Model model){
        System.out.println("The data from the comtroller: "+dto.getEmail() +" "+dto.getPassword());
        boolean token = serviceInterface.signIn(dto);
        if(token){
            return ResponseEntity.ok("Success");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                         .body("Invalid credentials for: " + dto.getEmail());
    }
    
    
    @PostMapping("/setPassword")
    public void setPassword(@RequestBody SetPassword dto){
        System.out.println("Set password: "+dto.getEmail()+" : "+dto.getPassword());
        
    }



    
}