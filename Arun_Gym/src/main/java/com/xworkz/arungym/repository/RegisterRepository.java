package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.RegisterEntity;

import java.util.List;

public interface RegisterRepository {
    boolean onSave(RegisterEntity entity);

    RegisterEntity getDataById(int id);

    RegisterEntity userLogin(String email);

    boolean updateEntity(RegisterEntity entity);

    void timeSchedulre();
}
