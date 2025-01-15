package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.AdminDetailsEntity;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.util.List;

@Repository
public class AdminDetailsRepoImpl implements AdminDetailsRepository{

    private static final Log log = LogFactory.getLog(AdminDetailsRepoImpl.class);
    @Autowired
    EntityManagerFactory entityManagerFactory;

    @Override
    public AdminDetailsEntity getEmail(String email) {
        System.out.println("This is from the repository: "+email);
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            Query query = entityManager.createNamedQuery("getEntity");
            query.setParameter("setEmail", email);
            List<AdminDetailsEntity> result = query.getResultList();
            if(result.isEmpty()){
                log.info("No result found");
                return null;
            }else {
                return result.get(0);
            }
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }finally{
            entityManager.close();
        }
    }
}
