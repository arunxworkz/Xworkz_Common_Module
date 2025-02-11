package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.entity.UserEntity;
import net.bytebuddy.asm.Advice;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.util.Collections;

@Repository
public class UserDetailsRepoImpl implements UserDetailsRepository{

    private static final Log log = LogFactory.getLog(UserDetailsRepoImpl.class);
    @Autowired
    EntityManagerFactory entityManagerFactory;

    @Override
    public RegisterEntity getDataByEmail(String email) {

        log.info("This is from getdata getDataByEmail() repository:" +email);

        try{
            Query query = entityManagerFactory.createEntityManager().createNamedQuery("getDataByEmail");
            query.setParameter("setEmail", email);
            return (RegisterEntity) query.getSingleResult();
        }catch (Exception e){
            if(entityManagerFactory.createEntityManager().getTransaction().isActive()){
                entityManagerFactory.createEntityManager().getTransaction().rollback();
            }
            e.printStackTrace();
            return null;
        }finally {
            entityManagerFactory.createEntityManager().close();
        }

    }

    @Override
    public boolean updatePassword(RegisterEntity entity) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            entityManager.merge(entity);
            entityTransaction.commit();
         //   Query query = entityManagerFactory.createEntityManager().createNamedQuery("updatePassword");
           // query.setParameter("setPassword", entity.getPassword()).setParameter("setEmail", entity.getEmail());
           // entityManagerFactory.createEntityManager().merge(query);
//            entityManager().merge(entity);
          //  entityManagerFactory.createEntityManager().getTransaction().commit();
            return true;
           // return (RegisterEntity) query.getSingleResult();

        }catch (Exception e){
            if(entityManagerFactory.createEntityManager().getTransaction().isActive())
                entityManagerFactory.createEntityManager().getTransaction().rollback();
            e.printStackTrace();
            return false;
        }
    }


    @Override
    public RegisterEntity getDataById(int id) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try {
            Query query = entityManager.createNamedQuery("getRegisterEntityById");
            query.setParameter("setId", id);
            return (RegisterEntity) query.getSingleResult();
        } catch (Exception e) {
            if (entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean userDetailsUpdate(RegisterEntity entity) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            entityManager.merge(entity);
            entityTransaction.commit();
            return true;
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            return false;
        }
    }

}
