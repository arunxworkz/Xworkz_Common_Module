package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.AdminDTO;
import com.xworkz.arungym.entity.AdminDetailsEntity;

public interface AdminDetailsService {

    AdminDetailsEntity signIn(String email, String password);
}
