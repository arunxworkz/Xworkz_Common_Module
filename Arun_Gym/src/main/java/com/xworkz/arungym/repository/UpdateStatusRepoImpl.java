package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.AdminDetailsEntity;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.entity.ViewEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.time.LocalDateTime;

@Repository
public class UpdateStatusRepoImpl implements UpdateStatusRepository{

    @Autowired
    EntityManagerFactory entityManagerFactory;

    @Override
    public InquiryEntity getData(int id) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            Query query = entityManager.createNamedQuery("getDataById");
            query.setParameter("setID", id);
            return (InquiryEntity) query.getSingleResult();
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }finally {
            entityManager.close();
        }
    }

    @Override
    public InquiryEntity statusUpdate(InquiryEntity entity) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            InquiryEntity updated = entityManager.merge(entity);
            entityTransaction.commit();
            return updated;
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            return null;
        }finally {
            entityManager.close();
        }
    }

    @Override
    public boolean viewSave(InquiryEntity entity) {

        ViewEntity viewEntity = new ViewEntity();
        viewEntity.setId(entity.getId());
        viewEntity.setStatus(entity.getStatus());
        viewEntity.setReason(entity.getReason());
//        viewEntity.setUpdatedBy(adminDetailsEntity.getName());
//        viewEntity.setUpdatedtime(LocalDateTime.now());

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            entityManager.persist(viewEntity);
            entityTransaction.commit();
            return true;
        }catch(Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
        }finally {
            entityManager.close();
        }
        return false;
    }
}
