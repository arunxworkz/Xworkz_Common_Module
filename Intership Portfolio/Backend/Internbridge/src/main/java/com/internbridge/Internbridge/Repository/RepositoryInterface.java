package com.internbridge.Internbridge.Repository;

import org.hibernate.type.descriptor.jdbc.IntegerJdbcType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internbridge.Internbridge.DTO.HrSignUpDTO;
import com.internbridge.Internbridge.Entity.HrEmailEntity;
import java.util.List;
import java.util.Optional;


@Repository
public interface RepositoryInterface extends JpaRepository<HrEmailEntity, Integer>{

    HrEmailEntity findById(String email);
}