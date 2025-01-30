package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.entity.UserEntity;

public interface UserDetails {

    boolean passwordUpdate(String email, String password, String confirmPassword);
}
