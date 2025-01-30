package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.InquiryEntity;

import java.util.List;

public interface FollowRepository {
    List<InquiryEntity> getDetails(String name);

    List<InquiryEntity> getAllDetails();
}
