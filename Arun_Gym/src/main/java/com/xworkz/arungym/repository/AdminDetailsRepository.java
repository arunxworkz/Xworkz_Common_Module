package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.AdminDetailsEntity;

import java.util.List;

public interface AdminDetailsRepository {

    AdminDetailsEntity getEmail(String email);

}
