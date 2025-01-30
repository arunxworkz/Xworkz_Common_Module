package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.RegisterEntity;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.time.LocalDateTime;

@Repository
public class RegisterRepoImpl implements RegisterRepository{

    private static final Log log = LogFactory.getLog(RegisterRepoImpl.class);
    @Autowired
    EntityManagerFactory entityManagerFactory;
    @Override
    public boolean onSave(RegisterEntity entity) {
        log.info(entity);
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
            return false;
        }finally {
            entityManager.close();
        }
    }

    @Override
    public RegisterEntity getDataById(int id) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            Query query = entityManager.createNamedQuery("getRegisterEntityById");
            query.setParameter("setId", id);
            return (RegisterEntity) query.getSingleResult();
        }catch (Exception e){
            if(entityTransaction.isActive()){
                entityTransaction.rollback();
            }
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public RegisterEntity userLogin(String email) {

        EntityManager entityManager =entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        RegisterEntity registerEntity = null;
        try{
            Query query = entityManager.createNamedQuery("getDataByEmail");
            query.setParameter("setEmail", email);
            return (RegisterEntity) query.getSingleResult();
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }
    }


    //Updating the entity(for account lock time)
    @Override
    public boolean updateEntity(RegisterEntity entity) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            entityManager.merge(entity);
            entityTransaction.commit();
            return true;
        }catch (Exception e){
            if(entityManagerFactory.createEntityManager().getTransaction().isActive())
                entityManagerFactory.createEntityManager().getTransaction().rollback();
            return false;
        }
    }

    @Override
    public void timeSchedulre() {
        try{
        entityManagerFactory.createEntityManager().getTransaction().begin();
        Query query = entityManagerFactory.createEntityManager().createNamedQuery("forScheduler");
        query.setParameter("currentTime", LocalDateTime.now());
        query.executeUpdate();
        entityManagerFactory.createEntityManager().getTransaction().commit();
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            entityManagerFactory.createEntityManager().close();
        }
    }
}
