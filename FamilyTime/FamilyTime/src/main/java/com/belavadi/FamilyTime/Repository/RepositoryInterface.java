package com.belavadi.FamilyTime.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.belavadi.FamilyTime.Entity.SignUpEntity;

public interface RepositoryInterface extends JpaRepository<SignUpEntity, Integer>{
}