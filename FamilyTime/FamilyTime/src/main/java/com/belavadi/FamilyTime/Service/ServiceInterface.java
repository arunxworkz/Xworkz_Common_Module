package com.belavadi.FamilyTime.Service;

import com.belavadi.FamilyTime.DTO.SignUpDTO;
import com.belavadi.FamilyTime.Entity.SignUpEntity;

public interface ServiceInterface {
    public SignUpEntity signUp(SignUpDTO dto);
}