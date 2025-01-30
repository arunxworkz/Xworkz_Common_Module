package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.InquirtDTO;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.entity.ViewEntity;
import com.xworkz.arungym.repository.AdminDetailsRepository;
import com.xworkz.arungym.repository.UpdateStatusRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UpdateStatusImpl implements UpdateStatusService {

    @Autowired
    private UpdateStatusRepository updateStatusRepository;

    @Autowired
    private AdminDetailsRepository adminDetailsRepository;

    public UpdateStatusImpl(){
        log.info("This is status update implementation");
    }

    @Override
    public InquiryEntity statusUpdate(String status, String reason, int id) {

//        log.info("Phone number: "+dto.getPhNo()+" Status: "+dto.getStatus()+" Reason: "+dto.getReason());
        InquiryEntity inquiryEntity = updateStatusRepository.getData(id);
        if(inquiryEntity!=null){
            inquiryEntity.setStatus(status);
            inquiryEntity.setReason(reason);
            inquiryEntity =  updateStatusRepository.statusUpdate(inquiryEntity);
            updateStatusRepository.viewSave(inquiryEntity);
            return inquiryEntity;
        }
        return null;
    }


//    @Override
//    public boolean viewSave(InquiryEntity entity) {
//        ViewEntity entity1 = new ViewEntity();
//        entity1.setReason(entity.getStatus());
//        entity1.setStatus(entity.getStatus());
//        entity1.setId(entity.getId());
//        if(entity1!=null){
//            if(updateStatusRepository.viewSave(entity1)){
//                return true;
//            }
//        }
//        return false;
//    }
}
