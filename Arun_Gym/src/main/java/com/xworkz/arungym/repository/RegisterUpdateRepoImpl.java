package com.xworkz.arungym.repository;

import com.xworkz.arungym.entity.RegisterEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Repository
public class RegisterUpdateRepoImpl implements RegisteUpdateRepository{

    @Autowired
    EntityManagerFactory entityManagerFactory;

    @Override
    public RegisterEntity onUpdate(RegisterEntity entity) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            Query query = entityManager.createNamedQuery("updateDetails");
            query.setParameter("setId", entity.getId());
            query.setParameter("setPackage", entity.getPackages());
            query.setParameter("setTrainer", entity.getTrainer());
            query.setParameter("setInstallement", entity.getInstallement());
            query.setParameter("setTotalammount", entity.getTotalammount());
            query.setParameter("setBalanceammount", entity.getBalanceAmmount());
            query.setParameter("setInstallmentAmount", entity.getInstallmentAmount());
            int update = query.executeUpdate();
            entityTransaction.commit();
            if(update > 0)
                return entity;
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<RegisterEntity> getAllDetails() {

//        EntityManager entityManager = entityManagerFactory.createEntityManager();
//        EntityTransaction entityTransaction = entityManager.getTransaction();

        try{
            Query query = entityManagerFactory.createEntityManager().createNamedQuery("getALL");
            return query.getResultList();
        }catch (Exception e){
            e.printStackTrace();
        }
        return Collections.emptyList();
    }

    @Override
    public List<RegisterEntity> getDataByName(String name) {

        try {
            Query query = entityManagerFactory.createEntityManager().createNamedQuery("getDataByName");
            query.setParameter("setName", name);
            return query.getResultList();
        }catch (Exception e){
            e.printStackTrace();
        }
        return Collections.emptyList();
    }
}
