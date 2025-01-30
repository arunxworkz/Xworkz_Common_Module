package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.AdminDetailsEntity;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.entity.ViewEntity;

import javax.persistence.criteria.CriteriaBuilder;

public interface UpdateStatusRepository {

    InquiryEntity getData(int id);

    InquiryEntity statusUpdate(InquiryEntity entity);


    boolean viewSave(InquiryEntity entity);
}
