package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.InquirtDTO;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.entity.ViewEntity;

import javax.persistence.criteria.CriteriaBuilder;

public interface UpdateStatusService {
    InquiryEntity statusUpdate(String status, String reason, int id);

//    boolean viewSave(InquiryEntity entity);

}
