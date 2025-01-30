package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.InquiryEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Access;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.util.Collections;
import java.util.List;

@Repository
@Slf4j
public class FollowRepositoryImpl implements FollowRepository{

    @Autowired
    EntityManagerFactory entityManagerFactory;
    @Override
    public List<InquiryEntity> getDetails(String name) {
        log.info("The name from the follow repository: "+name);
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
//        List<InquiryEntity> ent = null;
        try{
            Query query = entityManager.createNamedQuery("getData");
            query.setParameter("setName", name);
            return query.getResultList();
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<InquiryEntity> getAllDetails() {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            Query query = entityManager.createNamedQuery("getAllDetails");
            return query.getResultList();
        }catch(Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            return null;
        }finally {
            entityManager.close();
        }
    }
}
