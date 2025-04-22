package com.belavadi.FamilyTime.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.belavadi.FamilyTime.DTO.SignUpDTO;
import com.belavadi.FamilyTime.Entity.SignUpEntity;
import com.belavadi.FamilyTime.Repository.RepositoryInterface;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class ServiceClassImpl implements ServiceInterface{

    @Autowired
    private RepositoryInterface repoInterface;

    @Override
    public SignUpEntity signUp(SignUpDTO dto) {
        BCryptPasswordEncoder  encoder = new BCryptPasswordEncoder();
        SignUpEntity entity = new SignUpEntity();
        if(dto != null){
            entity.setName(dto.getName());
            entity.setEmail(dto.getEmail());
            entity.setPhone(dto.getPhone());
            entity.setPassword(encoder.encode(dto.getPassword()));
            return repoInterface.save(entity);
        }   
        
        return null;
    }
    
}