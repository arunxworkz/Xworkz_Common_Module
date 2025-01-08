package com.xworkz.xworkz_common_module_Arun.service;

import com.xworkz.xworkz_common_module_Arun.constants.Status;
import com.xworkz.xworkz_common_module_Arun.dto.SignupDTO;
import com.xworkz.xworkz_common_module_Arun.entity.SignupEntity;
import com.xworkz.xworkz_common_module_Arun.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Random;

@Service
public class SignUpServiceImpl implements SignUpService{

    private final static String characters = "ABCDEFHGIJKLMNOPQRSTUVWXYZ" +
            "abcdefghojklmnopqrstuvwxyz" +
            "012456789!" +
            "@#$%^&*?/";

    @Autowired
    SignUpRepository signUpRepository;

    BCryptPasswordEncoder bcEncoder = new BCryptPasswordEncoder();

    SignupEntity signupEntity = new SignupEntity();

    public SignUpServiceImpl(){
        System.out.println("This is from the SignUpServiceImpl");
    }

    boolean saved = false;
    @Override
    public String save(SignupDTO dto) {
        System.out.println("This is from the service save method: "+dto);
        if(dto!=null){
            if(dto.getUserName()!=null && dto.getUserName().length()>3){
                System.out.println("NAme is valid: "+dto.getUserName());
                if(dto.getEmail()!=null && dto.getEmail().contains("@gmail.com")){
                    System.out.println("Email is valid: " + dto.getEmail());
                    if(dto.getAltEmail()!=null){
                        System.out.println("Altenate Email" + dto.getAltEmail());
                        if(dto.getPhNo()!=null&&dto.getPhNo().startsWith("9")){
                            System.out.println("Valid phone number: "+dto.getPhNo());
                            if(dto.getAltPhNo()!=null){
                                System.out.println("Alternate phone number: "+ dto.getAltEmail());
                                if(dto.getLocation()!=null){
                                    System.out.println("Location in valid: "+dto.getLocation());
                                        if(dto.getEmail()!=null){
                                            StringBuilder stringBuilder = new StringBuilder();
                                            SecureRandom random = new SecureRandom();
                                            for(int i = 0;i < 9;i++){
                                                int index =random.nextInt(characters.length());
                                                stringBuilder.append(characters.charAt(index));
                                            }
                                            System.out.println(stringBuilder.toString());
                                            signupEntity.setName(dto.getUserName());
                                            signupEntity.setEmail(dto.getEmail());
                                            signupEntity.setAlternetEmail((dto.getAltEmail()));
                                            signupEntity.setPhNo(dto.getPhNo());
                                            signupEntity.setAlPhNo(dto.getAltPhNo());


                                            signupEntity.setLocation(dto.getLocation());



                                            signupEntity.setPassword(stringBuilder.toString());
                                            signupEntity.setCraetedBy(dto.getUserName());
                                            signupEntity.getCreatedTime();
                                            signupEntity.setSignincount(-1);
                                            saved = signUpRepository.save(signupEntity);
                                            if(saved){
                                                    System.out.println("Entity saved successfully");
                                                return "Entity is saved successfully";
                                            }else{
                                                System.out.println("Entity is not saved ");
                                                return "Entity is not saved";
                                            }
                                        }else{
                                            System.out.println("Password does not saved successfully");
                                            return "Password does not saved successfully";
                                        }
                                }else{
                                    System.out.println("Location is not saved");
                                    return "Location is not saved";
                                }
                            }else {
                                System.out.println("Alternate phone number is not saved");
                                return "Alternate phone number is not saved";
                            }
                        }else{
                            System.out.println("Phone number is not saved");
                            return "Phone number is not saved";
                        }
                    }else{
                        System.out.println("Alternate email is not saved");
                        return "Alternate email is not saved";
                    }
                }else{
                    System.out.println("Email is not saved");
                    return "Email is not saved";
                }
            }else{
                System.out.println("Nave is not saved");
                return "NAme is not saved";
            }
        }
        return "Dto is empty";
    }

    @Override
    public long getNameCount(String name) {
        long count = signUpRepository.getNameCount(name);
        System.out.println("Count of name from service: "+count);
        return count;
    }

    @Override
    public long getEmailCount(String email) {
        long count = signUpRepository.getEmailCount(email);
        return count;
    }

    @Override
    public long getPhnoCount(String phNo) {
        long count = signUpRepository.getPhoneNoCount(phNo);
        return count;
    }

    @Override
    public int updateEmailByPhNo(String email, String phNo) {

        SignupDTO dto = new SignupDTO();
        dto.setEmail(email);
        return signUpRepository.updateEmailByPhNo(dto, phNo);
    }

    @Override
    public SignupEntity signIn(String email, String password) {

        SignupEntity entity  = signUpRepository.onSignIn(email);
        System.out.println("T?his is entity from sighin"+entity);
        if(entity != null){
            if(entity.getSignincount() == -1){
                return entity;
            }

            if(entity.getSignincount() >= 2){
                System.out.println("Account has been locked");
//                entity.setAccountlocktime(LocalDateTime.now());
//              //  entity.setLogintime(LocalDateTime.now());
//                signUpRepository.updateAll(entity); //To set the time after account lock
//                if(bcEncoder.matches(password,entity.getPassword())){
//                    System.out.println("after account lock in if condiaction for password match..");
//                    //LocalDateTime currenttime=LocalDateTime.now();
//                  entity.setLogintime(LocalDateTime.now().plusMinutes(2));
//                  signUpRepository.updateAll(entity);
//                   if(entity.getLogintime().isBefore(entity.getAccountlocktime())){
//                       System.out.println("in if condiaction of time compreaction.."+entity);
//                        entity.setSignincount(0);
//                        entity.setLogintime(LocalDateTime.now());
//                        signUpRepository.updateAll(entity);
//                        return entity;
//                    }
//                    System.out.println("try after 2 minites..");
//                    return entity;
//                }
                entity.setAccountlocktime(LocalDateTime.now());
                signUpRepository.updateAll(entity);

                System.out.println("password miss mathc..");
                return  entity;
            }

            if(bcEncoder.matches(password, entity.getPassword())){
                entity.setSignincount(0);
                entity.setLogintime(LocalDateTime.now());
                signUpRepository.updateAll(entity);
                return entity;
            }else{
                int count = entity.getSignincount()+1;
                entity.setSignincount(count);
                entity.setLogintime(LocalDateTime.now());
                signUpRepository.updateAll(entity);
                return entity;
            }
        }
        return  null;
    }

    @Override
    public boolean update(SignupDTO dto, String fileName) {

        SignupEntity get = signUpRepository.getAll(dto.getUserName());
        if(get != null){
            get.setName(dto.getUserName());
            get.setEmail(dto.getEmail());
            get.setAlternetEmail(dto.getAltEmail());
            get.setPhNo(dto.getPhNo());
            get.setAlPhNo(dto.getAltPhNo());
            get.setLocation(dto.getLocation());
            get.setUpdatedTime(LocalDateTime.now());
            get.setUpdatedBy(dto.getUserName());
            get.setFilename(fileName);
            return signUpRepository.updateAll(get);
//            return true;
        }
        return false;
    }

    @Override
    public int updateAlternateEmailByEmail(String email, String alternateEmail) {

        SignupDTO dto = new SignupDTO();
        dto.setAltEmail(alternateEmail);
        return signUpRepository.updateAlternateEmailByEmail(email, dto);

    }


    @Override
    public SignupEntity getData(String email) {
        if(email != null) {
            return signUpRepository.getData(email);
        }
        return null;
    }



    @Override
    public boolean passwordUpdate(String email, String newPassword, String confirmPassword) {

        if(newPassword.equals(confirmPassword)){
            SignupEntity signupEntity = signUpRepository.getData(email);
            if(signupEntity != null){
                signupEntity.setPassword(bcEncoder.encode(confirmPassword));
                signupEntity.setSignincount(0);
                return signUpRepository.onUpadte(signupEntity);
            }
            return false;
        }
        return false;
    }

    @Scheduled(fixedDelay =  120000)
    @Override
    public void timeScheduler() {
        System.out.println("This is time scheduler method after 2 minutes");
        signUpRepository.timeScheduler();
    }


}
