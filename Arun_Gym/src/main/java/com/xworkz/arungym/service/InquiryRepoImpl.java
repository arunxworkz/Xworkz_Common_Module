package com.xworkz.arungym.service;

import com.xworkz.arungym.entity.InquiryEntity;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

@Repository
public class InquiryRepoImpl implements InquiryRepository{

    private static final Log log = LogFactory.getLog(InquiryRepoImpl.class);
    @Autowired
    EntityManagerFactory entityManagerFactory;


    public InquiryRepoImpl(){
        System.out.println("This is Inquiry repository");
    }

    @Override
    public boolean onSave(InquiryEntity entity) {
        log.info("This is entity: "+entity);
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            entityManager.persist(entity);
            entityTransaction.commit();
            return true;
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
        }finally {
            entityManager.close();
        }
        return false;
    }
}
