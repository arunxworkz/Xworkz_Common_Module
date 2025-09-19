package com.internbridge.Internbridge.Service;

import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Arrays;

import javax.naming.directory.Attributes;

import com.internbridge.Enum.SignUPEnum;
import com.internbridge.Internbridge.DTO.HrSignUpDTO;
import com.internbridge.Internbridge.Entity.HrEmailEntity;
import com.internbridge.Internbridge.Repository.RepositoryInterface;

@Service
public class ServiceClasses implements ServiceInterface{

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private RepositoryInterface repositoryInterface;

    private static final String CHARACTERS = "ABCDEFGHIJKLMANOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int CODE_LENGTH = 6;
    private static final SecureRandom random = new SecureRandom();

    // @Override
    // public String codeGeneration() {
    //     StringBuilder builder = new StringBuilder(CODE_LENGTH);
    //     for(int i = 0 ; i <= CODE_LENGTH; i++){
    //         builder.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
    //     }
    //     return builder.toString();
    // }

    @Override
    public SignUPEnum setPassword(String email, String password) {
        HrEmailEntity emailEntity = repositoryInterface.findById(email);

        if(emailEntity!=null){
            if(emailEntity.isVerified()){
                emailEntity.setPassword(password);
                repositoryInterface.save(emailEntity);
                return SignUPEnum.SUCCESS;
            }else{
                return SignUPEnum.NOT_VERIFIED;
            }
        }
        return SignUPEnum.INVALID_EMAIL;
    }

    @Override
    public SignUPEnum verifyCode(String email, String code) {
        HrEmailEntity emailEntity = repositoryInterface.findById(email);
        if(emailEntity!=null){
            if(emailEntity.getCode() != null && emailEntity.getCode().equals(code)){
                emailEntity.setCode(null);
                emailEntity.setVerified(true);
                repositoryInterface.save(emailEntity);
                return SignUPEnum.SUCCESS;
            }else{
                emailEntity.setCode(null);
                repositoryInterface.save(emailEntity);
                return SignUPEnum.INVALID_OTP;
            }
        }
        return SignUPEnum.INVALID_EMAIL;
    }

    @Override
    public SignUPEnum signUp(HrSignUpDTO dto) {

        if(dto.getEmail() == null){
            return SignUPEnum.EMPTY_EMAIL;
        }
        String emailParts[] = dto.getEmail().split("@");
        StringBuilder builder = new StringBuilder(CODE_LENGTH);
        for(int i = 0 ; i <= CODE_LENGTH; i++){
            builder.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
        }
        String code = builder.toString();
        try{
            DirContext cxt = new InitialDirContext();
            Attributes attributes = cxt.getAttributes("dns:/" + emailParts[1], new String[]{"MX"});
            java.util.List<String> personalDomains = Arrays.asList(
            "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "rediffmail.com"
                );

            if (attributes != null && attributes.get("MX") != null && !personalDomains.contains(emailParts[1])) {
                HrEmailEntity emailEntity = new HrEmailEntity();
                emailEntity.setHrEmailId(dto.getEmail()); 
                emailEntity.setCode(code); 
                repositoryInterface.save(emailEntity);

                // save the email, code in database and send the code to email
                // then check the code if matches then return success. Write a seprate method to 
                // macth the code
                // emailEntity.setPassword(dto.getPassword());

                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(dto.getEmail());
                mail.setSubject("The code for verification of the Email");
                mail.setText("Code is: "+code); 
                javaMailSender.send(mail);

                return SignUPEnum.OTP_SENT;
            }else{
                    return SignUPEnum.INVALID_EMAIL;
            }
        }catch(Exception e){
            e.printStackTrace();
            return SignUPEnum.ERROR;
        }
    }
}