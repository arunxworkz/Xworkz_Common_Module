package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.entity.UserEntity;

public interface UserDetailsRepository {

    RegisterEntity getDataByEmail(String email);

    boolean updatePassword(RegisterEntity entity);

    boolean userDetailsUpdate(RegisterEntity entity);

    RegisterEntity getDataById(int id);
}
