package com.xworkz.arungym.entity;


import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "admindetails")
@Data

@NamedQuery(name = "getEntity", query = "Select ad from AdminDetailsEntity ad where ad.email = :setEmail")

public class AdminDetailsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;
}
