package com.xworkz.arungym.service;

import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.repository.FollowRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Service
@Slf4j
public class FollowServicceImpl implements FollowService{

    @Autowired
    private FollowRepository followRepository;

    public FollowServicceImpl(){
        log.info("This is from the follow service implimentation");
    }

    @Override
    public List<InquiryEntity> getDeatils(String name) {

        log.info("Email from follow service: "+name);
        List<InquiryEntity> entity = followRepository.getDetails(name);
        if(entity!=null){
            return entity;
        }
        return null;
    }
}
