package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.repository.RegisteUpdateRepository;
import com.xworkz.arungym.repository.RegisterRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@Slf4j
public class RegisterUpdateServiceImpl implements RegisterUpdateService{

    @Autowired // if we do not do @Autowired, the instance will not be created leads to NullPointerException
    private RegisterRepository registerRepository;

    @Autowired
    private RegisterService registerService;

    @Autowired
    private RegisteUpdateRepository registeUpdateRepository;

    public RegisterUpdateServiceImpl(){
        log.info("This is Register Update Service");
    }

    @Override
    public RegisterEntity getDataById(int id) {
        log.info("Email from Srevice: "+id);
        if(id != 0) {
            RegisterEntity entity = (RegisterEntity) registerRepository.getDataById(id);
            return entity;
        }
        return null;
    }

    @Override
    public List<RegisterEntity> getAll() {

        List<RegisterEntity> list = registeUpdateRepository.getAllDetails();
        return list;
    }

    @Override
    public List<RegisterEntity> getDataByName(String name) {

        if(name!=null){
            List<RegisterEntity> list = registeUpdateRepository.getDataByName(name);
            return list;
        }
        return Collections.emptyList();
    }


    @Override
    public RegisterEntity onUpdate(int id, long packages, long trainer, long amount, long balance, long installmentAmount, int installment) {

        RegisterEntity entity = registerRepository.getDataById(id);
        log.info("ID is: "+id);
        long totalAmount = registerService.calculateTotalAndBalance(packages, trainer, installment);
        long balances = registerService.calculateBalance(amount, installment);
        long installments = registerService.calculateInstallments(amount, installment);

        log.info("Total amount: "+totalAmount+" Balance: "+balances+" Installments: "+installments);

        entity.setPackages(packages);
        entity.setTrainer(trainer);
        entity.setTotalammount(totalAmount);
        entity.setBalanceAmmount(balances);
        entity.setInstallmentAmount(installments);
        entity.setInstallement(installment);
        if(entity != null){
            return  registeUpdateRepository.onUpdate(entity);
        }
        return null;
    }
}
