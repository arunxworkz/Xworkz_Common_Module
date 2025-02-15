package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.repository.RegisterRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Properties;

@Service
@Slf4j
public class RegisterServiceImpl implements RegisterService{

    private String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    public String passwordGeneret(){
        String password = null;
        StringBuilder stringBuilder =new StringBuilder();
        SecureRandom secureRandom =new SecureRandom();
        for(int i =0 ;i < 9;i++){
            int index =secureRandom.nextInt(characters.length());
            password = String.valueOf(stringBuilder.append(characters.charAt(index)));
        }
        return password;
    }

    @Autowired
    RegisterRepository registerRepository;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    public long calculateTotalAndBalance(double packages, double trainerYes,int installment) {

        log.info("Package: "+packages+"Trainer Yes: "+trainerYes+"Instalement: "+installment);
        int discount = 0;
        if(packages == 5000){
            discount = 5;
        } else if(packages == 7000){
            discount = 7;
        } else if (packages == 10000) {
            discount = 15;
        } else if (packages == 15000) {
            discount = 20;
        }

        double discountAmmount = packages - (packages * discount / 100);

        double totalAmmount = discountAmmount + trainerYes;

        double balaceAmmount = totalAmmount - (totalAmmount / installment);

        long totalAmmountResult = (long) totalAmmount;

        System.out.println((totalAmmountResult));
        return totalAmmountResult;
    }

    @Override
    public long calculateBalance(double totalAmount, int installement){

        double balaceAmmount = totalAmount - (totalAmount / installement);
        log.info(String.valueOf(balaceAmmount));
        return (long)balaceAmmount;
    }

    @Override
    public long calculateInstallments(double totalAmount, int installment) {

        double installments = totalAmount / installment;
        return (long)installments;
    }



    @Override
    public boolean onSave(RegisterDTO dto) {
         log.info("This fro service: "+dto);
        RegisterEntity registerEntity = new RegisterEntity();
        if(dto != null){
            if(dto.getPhNo() !=null && dto.getPhNo().length() == 10){
                registerEntity.setName(dto.getName());
                registerEntity.setEmail(dto.getEmail());
                registerEntity.setPassword(passwordGeneret());
                registerEntity.setPhoneNumber(dto.getPhNo());
                registerEntity.setGender(dto.getGender());
                registerEntity.setPackages(Long.parseLong(dto.getPackages()));
                registerEntity.setTrainer(dto.getTrainer());
                registerEntity.setInstallement(dto.getInstallment());
                registerEntity.setTotalammount(dto.getTotalAmmount());
                registerEntity.setBalanceAmmount(Long.parseLong(dto.getBalance()));
                registerEntity.setInstallmentAmount(calculateInstallments(dto.getTotalAmmount(), dto.getInstallment()));
                registerEntity.setSignincount(-1);
                registerEntity.setTrainername(dto.getTrainerName());
                if(registerRepository.onSave(registerEntity)){
                    saveEmail(dto.getEmail(), registerEntity.getPassword());
                    return true;
                }else{
                    return false;
                }
            }
        }
        return false;
    }

    @Override
    public boolean saveEmail(String email, String password) {

        final String username = "arunbelavadi30@gmail.com";
        final String userPassword = "pupk qhna lcvu rhdb";


        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
        prop.put("mail.debug", "true");

        Session session = Session.getInstance(prop,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, userPassword);
                    }
                });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
            message.setSubject("Your password");
            message.setText("your password" + password);
            Transport.send(message);
            System.out.println("Done");

        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return true;
    }


    //UserLogin
    @Override
    public RegisterEntity userLogin(String email, String password) {

        RegisterEntity registerEntity = registerRepository.userLogin(email);
        log.info("Sigin entity from service: "+registerEntity);
        if(registerEntity != null){

            if(registerEntity.getSignincount()==-1){
                return registerEntity;
            }

            if(registerEntity.getSignincount() > 2){
                log.info("Account has been locked");
                registerEntity.setAccountlocktime(LocalDateTime.now());
                registerRepository.updateEntity(registerEntity);
                log.info("PAssword miss match");
                return registerEntity;
            }

            if(password.equals(registerEntity.getPassword())){
                registerEntity.setSignincount(0);
                registerEntity.setLogintime(LocalDateTime.now());
                registerRepository.updateEntity(registerEntity);
                return registerEntity;
            }

            else{
                registerEntity.setSignincount(registerEntity.getSignincount() + 1);
                registerEntity.setLogintime(LocalDateTime.now());
                registerRepository.updateEntity(registerEntity);
                return registerEntity;
            }
        }
        return null;
    }

    @Scheduled(fixedDelay = 120000)
    @Override
    public void timeScheduler() {
            log.info("This is schedulermethdo");
        registerRepository.timeSchedulre();
    }

    @Override
    public List<RegisterEntity> getAllDetails() {

        if((registerRepository.getAllDetails()!=null)){
            return registerRepository.getAllDetails();
        }

        return Collections.emptyList();
    }

    @Override
    public List<RegisterEntity> getCustomrtDetailsWithTrainer() {

        if((registerRepository.getCustomrtDetailsWithTrainer()!=null)){
            return registerRepository.getCustomrtDetailsWithTrainer();
        }


        return Collections.emptyList();
    }

    @Override
    public RegisterEntity getDatabyIdToAssigntrainer(int id, String trainer) {

        RegisterEntity registerEntity = registerRepository.getDataById(id);
        if(registerEntity!=null){
            registerEntity.setTrainername(trainer);
            registerRepository.updateEntity(registerEntity);
            return registerEntity;
        }
        return null;
    }
}
