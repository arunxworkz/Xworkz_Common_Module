package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.entity.UserEntity;
import com.xworkz.arungym.repository.UserDetailsRepository;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsImpl implements UserDetails{

    private static final Log log = LogFactory.getLog(UserDetailsImpl.class);
    @Autowired
    UserDetailsRepository userDetailsRepository;

    @Override
    public boolean passwordUpdate(String password, String email, String confirmPassword) {

        log.info("This sfrom service: "+password+ " "+ email+" ");
        if(password.equals(confirmPassword)) {
            RegisterEntity registerEntity = userDetailsRepository.getDataByEmail(email);


            if (registerEntity != null) {

                registerEntity.setPassword(password);
                registerEntity.setSignincount(0);
                if(userDetailsRepository.updatePassword(registerEntity)){
                    return userDetailsRepository.updatePassword(registerEntity);
                }
            }
                return false;
            }
        return false;
    }
}

