package com.xworkz.xworkz_common_module_Arun.entity;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "newtable")
@Data

@NamedQuery(name = "getNameCount", query = "Select count(se.name) from SignupEntity se where se.name = :setName")
@NamedQuery(name = "getEmailCount", query = "Select count(se.email) from SignupEntity se where se.email= :setEmail")
@NamedQuery(name = "getPhnoCount", query = "select count(se.phNo) from SignupEntity se where se.phNo= :setPhno")
@NamedQuery(name = "getAllById", query = "select se from SignupEntity se where se.id=: setId")
@NamedQuery(name = "getDataByEmail", query = "select se from SignupEntity se where se.email= :setEmail")
@NamedQuery(name = "getAll", query = "select se from SignupEntity se where se.name= :setName")

@NamedQuery(name = "updateByphNo", query = "update SignupEntity se set se.email= :setEmail where  se.phNo= :setPhNo")
@NamedQuery(name = "updateAlternateEmailByEmail", query = "update SignupEntity se set se.alternetEmail= :setAlternateEmail where se.email= :setEmail")

@NamedQuery(name = "getData", query = "select se from SignupEntity se where se.email= :email")

@NamedQuery(name = "updatePAsswordAndSignInCountByEmail", query = "update SignupEntity se set se.password= :setPassword, se.signincount= :setSignInCount where se.email= :setEmail")

@NamedQuery(name = "forScheduler", query =  "update SignupEntity se set se.signincount = 0 where se.accountlocktime < : currentTime")


public class SignupEntity extends AuditEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "alternetEmail")
    private String alternetEmail;

    @Column(name = "phNo")
    private String phNo;

    @Column(name = "alPhNo")
    private String alPhNo;

    @Column(name = "location")
    private String location;

    @Column(name = "password")
    private String password;

    @Column(name = "filename")
    String filename;

    @Column(name = "signincount")
    int signincount;

    @Column(name = "accountlocktime")
    LocalDateTime accountlocktime;

    @Column(name = "logintime")
    LocalDateTime logintime;

}
