package com.xworkz.arungym.service;

import com.xworkz.arungym.entity.AdminDetailsEntity;
import com.xworkz.arungym.repository.AdminDetailsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AdminDetailsServiceImpl implements AdminDetailsService{


    @Autowired
    AdminDetailsRepository adminDetailsRepository;


    @Override
    public AdminDetailsEntity signIn(String email, String password) {
        log.info("This is from service: "+email+" "+password);
        AdminDetailsEntity entity = adminDetailsRepository.getEmail(email);
        log.info("This is entity from service: "+entity);
        if(entity!=null){
            if(password.equals(entity.getPassword())){
                return entity;
            }
            return null;
        }
        return null;
    }
}
