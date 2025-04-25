package com.belavadi.FamilyTime.Service;

import java.text.DecimalFormat;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

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

    @Override
    public String signIn(SignInDTO dto) {
        
        UserEntity entityUserPassword =repoInterface.findByEmail(dto.getEmail());
        if(encoder.matches(dto.getPassword(), entityUserPassword.getPassword())){
            return ""+entityUserPassword;
        }
        return null;
    }

    @Override
    public String getOtp(String email) {
        
        if(repoInterface.findByEmail(email) != null){
            String otp = new DecimalFormat("000000").format(new Random().nextInt(999999));
            SimpleMailMessage mailOtp = new SimpleMailMessage();
            mailOtp.setTo(email);
            mailOtp.setSubject("You OTP for Reset password");
            mailOtp.setText("Otp is: "+otp);
            sender.send(mailOtp);
            return otp;
        }
        return null;
    }   
    
}