package com.belavadi.FamilyTime.Service;

import com.belavadi.FamilyTime.DTO.SignInDTO;
import com.belavadi.FamilyTime.DTO.SignUpDTO;
import com.belavadi.FamilyTime.Entity.UserEntity;

public interface ServiceInterface {
    public UserEntity signUp(SignUpDTO dto);

    public String signIn(SignInDTO dto);

    public String getOtp(String email);
}