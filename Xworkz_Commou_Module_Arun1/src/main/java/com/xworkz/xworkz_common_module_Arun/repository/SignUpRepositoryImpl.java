package com.xworkz.xworkz_common_module_Arun.repository;

import ch.qos.logback.core.encoder.EchoEncoder;
import com.xworkz.xworkz_common_module_Arun.constants.Status;
import com.xworkz.xworkz_common_module_Arun.dto.SignupDTO;
import com.xworkz.xworkz_common_module_Arun.entity.SignupEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Repository
public class SignUpRepositoryImpl implements SignUpRepository{

    @Autowired
    EntityManagerFactory entityManagerFactory;
    @Override
    public boolean save(SignupEntity entity) {

        System.out.println("This is entity from the repository save method: "+entity);
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();

        try{
            entityTransaction.begin();
            entityManager.persist(entity);
            entityTransaction.commit();
            return true;
        }catch(Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return false;
        }finally{
            entityManager.close();
        }
    }

    @Override
    public long getNameCount(String name) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        long count = 0l;
        try{
            Query query = entityManager.createNamedQuery("getNameCount");
            query.setParameter("setName", name);
            count = (long)query.getSingleResult();
            return count;
        }catch(Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return 0;
        }finally {
            entityManager.close();
        }
    }

    @Override
    public long getEmailCount(String email) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        long count = 0l;
        try{
            Query query = entityManager.createNamedQuery("getEmailCount");
            query.setParameter("setEmail", email);
            count = (Long)query.getSingleResult();
            return count;
        }catch(Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return 0;
        }finally{
            entityManager.close();
        }
    }

    @Override
    public long getPhoneNoCount(String phNo) {

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTranscation = entityManager.getTransaction();
        long count = 0l;
        try{
            Query query = entityManager.createNamedQuery("getPhnoCount");
            query.setParameter("setPhno", phNo);
            count = (Long)query.getSingleResult();
            return count;
        }catch(Exception e){
            if(entityTranscation.isActive())
                entityTranscation.rollback();
            e.printStackTrace();
            return 0;
        }finally {
            entityManager.close();
        }
    }

    @Override
    public SignupEntity getAllById(int id) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try {
            Query query = entityManager.createNamedQuery("getAllById");
            query.setParameter("setId", id);
            return (SignupEntity)query.getSingleResult();
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }
    }

    //This is to update only by phone number (BY each field)
    @Override
    public int updateEmailByPhNo(SignupDTO dto, String phNo) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try {
            entityTransaction.begin();
            Query query = entityManager.createNamedQuery("updateByphNo");
            query.setParameter("setEmail", dto.getEmail());
            query.setParameter("setPhNo", phNo);
            int count = query.executeUpdate();

            if (count > 0) {
                entityTransaction.commit(); // Commit the transaction after successful update
                return Status.SUCCESS.getCode(); // Return success
            } else {
                entityTransaction.rollback(); // Rollback if no rows were updated
                return Status.FAILURE.getCode(); // No rows updated
            }
        } catch (Exception e) {
            if (entityTransaction.isActive()) {
                entityTransaction.rollback(); // Rollback in case of an exception
            }
            e.printStackTrace();
            return 0; // Indicate failure
        } finally {
            entityManager.close(); // Ensure the EntityManager is closed
        }
    }

    @Override
    public SignupEntity onSignIn(String email) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        SignupEntity entity = null;
        try{
        Query query = entityManager.createNamedQuery("getDataByEmail");
        query.setParameter("setEmail", email);
        return (SignupEntity)query.getSingleResult();
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return  null;
        }
    }

    @Override
    public SignupEntity getAll(String name) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            Query query = entityManager.createNamedQuery("getAll");
            query.setParameter("setName", name);
            List<SignupEntity> entities = query.getResultList();
            return entities.get(0);
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }
    }

    public boolean updateAll(SignupEntity entity){
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try {
            entityTransaction.begin();
            entityManager.merge(entity);
            entityTransaction.commit();
            return true;
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public int updateAlternateEmailByEmail(String email, SignupDTO dto) {

        System.out.println("Emil is: "+email+"Alternate email is: "+dto.getAltEmail());
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            Query query = entityManager.createNamedQuery("updateAlternateEmailByEmail");
            query.setParameter("setAlternateEmail", dto.getAltEmail());
            query.setParameter("setEmail", email);
            int count = query.executeUpdate();
            if(count > 0){
                entityTransaction.commit();
                return Status.SUCCESS.getCode();
            }else{
                return Status.FAILURE.getCode();
            }
        }catch (Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return Status.FAILURE.getCode();
        }finally {
            entityManager.close();
        }
    }

    public SignupEntity getData(String email){

        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();

        try{
            Query query = entityManager.createNamedQuery("getData");
            query.setParameter("email", email);
            return (SignupEntity) query.getSingleResult();
        }catch(Exception e){
            if(entityTransaction.isActive())
                entityTransaction.rollback();
            e.printStackTrace();
            return null;
        }finally {
            entityManager.close();
        }
    }

    @Override
    public boolean onUpadte(SignupEntity entity) {

        System.out.println("Repositorty entity: "+entity);
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            System.out.println("Update");
            Query query = entityManager.createNamedQuery("updatePAsswordAndSignInCountByEmail");
            query.setParameter("setPassword", entity.getPassword());
            query.setParameter("setSignInCount", entity.getSignincount());
            query.setParameter("setEmail", entity.getEmail());
            int updatedRows = query.executeUpdate();
            transaction.commit();
            return updatedRows > 0;
        } catch (Exception e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            e.printStackTrace();
            return false;
        } finally {
            entityManager.close();
        }
    }

    @Override
    public void timeScheduler() {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction = entityManager.getTransaction();
        try{
            entityTransaction.begin();
            Query query = entityManager.createNamedQuery("forScheduler");
            query.setParameter("currentTime", LocalDateTime.now());
            query.executeUpdate();
            entityTransaction.commit();
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            entityManager.close();
        }
    }
}
