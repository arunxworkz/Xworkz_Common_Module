package com.xworkz.xworkz_common_module_Arun.service;

import com.xworkz.xworkz_common_module_Arun.dto.SignupDTO;
import com.xworkz.xworkz_common_module_Arun.entity.SignupEntity;
import org.springframework.scheduling.support.SimpleTriggerContext;

public interface SignUpService {

    String save(SignupDTO dto);

    long getNameCount(String name);

    long getEmailCount(String email);

    long getPhnoCount(String phNo);

    public int updateEmailByPhNo(String phNo, String email);

    public SignupEntity signIn(String email, String password);

//    boolean update(SignupDTO dto,String fileName);
    boolean update(SignupDTO dto, String fileName);

    int updateAlternateEmailByEmail(String email, String alternateEmail);


    public boolean passwordUpdate(String email, String newPassword, String confirmPassword);

    SignupEntity getData(String email);

    void timeScheduler();

}
