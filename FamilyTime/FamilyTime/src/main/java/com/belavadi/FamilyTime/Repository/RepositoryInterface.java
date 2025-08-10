package com.belavadi.FamilyTime.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.belavadi.FamilyTime.Entity.UserEntity;

public interface RepositoryInterface extends JpaRepository<UserEntity, Integer>{

    UserEntity findByEmail(String email);

    

}