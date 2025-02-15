package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.entity.RegisterEntity;

import java.util.List;
import java.util.Map;

public interface RegisterService {
    long calculateTotalAndBalance(double packages, double trainerYes, int installment);

    long calculateBalance(double totalAmount, int installement);

    long calculateInstallments(double totalAmount, int installement);

    boolean onSave(RegisterDTO dto);

    boolean saveEmail(String email, String password);

    RegisterEntity userLogin(String email, String password);

    void timeScheduler();

    List<RegisterEntity> getAllDetails();

    List<RegisterEntity> getCustomrtDetailsWithTrainer();

    RegisterEntity getDatabyIdToAssigntrainer(int id, String trainer);


}
