package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.RegisterEntity;

import java.util.List;

public interface RegisteUpdateRepository {

    RegisterEntity onUpdate(RegisterEntity entity);

    List<RegisterEntity> getAllDetails();

    List<RegisterEntity> getDataByName(String name);
}
