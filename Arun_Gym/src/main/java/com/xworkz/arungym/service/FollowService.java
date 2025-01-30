package com.xworkz.arungym.service;

import com.xworkz.arungym.entity.InquiryEntity;

import java.util.List;

public interface FollowService {
    List<InquiryEntity> getDeatils(String name);

    List<InquiryEntity> getAllDetails();
}
