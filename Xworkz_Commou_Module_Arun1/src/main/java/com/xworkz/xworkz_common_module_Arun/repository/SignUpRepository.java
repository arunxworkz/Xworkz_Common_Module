package com.xworkz.xworkz_common_module_Arun.repository;

import com.xworkz.xworkz_common_module_Arun.dto.SignupDTO;
import com.xworkz.xworkz_common_module_Arun.entity.SignupEntity;
import org.springframework.web.multipart.support.StringMultipartFileEditor;

public interface SignUpRepository {
    boolean save(SignupEntity entity);

    long getNameCount(String name);

    long getEmailCount(String email);

    long getPhoneNoCount(String phNo);

    SignupEntity getAllById(int id);

    int updateEmailByPhNo(SignupDTO dto, String phNo);

    SignupEntity onSignIn(String email);

    SignupEntity getAll(String name);

    boolean updateAll(SignupEntity entity);

    int updateAlternateEmailByEmail(String email, SignupDTO dto);

    SignupEntity getData(String email);

    boolean onUpadte(SignupEntity entity);


    void timeScheduler();



}
