package com.xworkz.arungym.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;


@Data
@Entity
@Table(name = "register")

//To update the data appeared in the front end
@NamedQuery(name = "getRegisterEntityById", query = "Select re from RegisterEntity re where re.id=:setId")

@NamedQuery(name = "updateDetails", query = "update RegisterEntity re set re.packages=: setPackage, re.trainer=: setTrainer, re.installement=: setInstallement, re.totalammount=: setTotalammount, re.balanceAmmount=: setBalanceammount, re.installmentAmount=: setInstallmentAmount where re.id=: setId")

//To get all data to front end
@NamedQuery(name = "getALL", query = "select re from RegisterEntity re")

@NamedQuery(name = "getDataByName", query = "select re from RegisterEntity re where re.name=: setName")

@NamedQuery(name = "getDataByEmail", query = "select ud from RegisterEntity ud where ud.email=: setEmail")

@NamedQuery(name = "updatePassword", query = "update RegisterEntity ud set ud.password=: setPassword where ud.email=: setEmail")

@NamedQuery(name = "forScheduler", query = "update RegisterEntity rd set rd.signincount = 0 where rd.accountlocktime < : currentTime")

public class RegisterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "name")
    String name;

    @Column(name = "email")
    String email;

    @Column(name = "password")
    String password;

    @Column(name = "phoneNumber")
    String phoneNumber;

    @Column(name = "gender")
    String gender;

    @Column(name = "package")
    long packages;

    @Column(name = "trainer")
    long trainer;

    @Column(name = "installement")
    int installement;

    @Column(name = "totalammount")
    long totalammount;

    @Column(name = "balanceammount")
    long balanceAmmount;

    @Column(name = "installmentAmount")
    long installmentAmount;

    @Column(name = "age")
    int age;

    @Column(name = "signincount")
    int signincount;

    @Column(name = "logintime")
    LocalDateTime logintime;

    @Column(name = "accountlocktime")
    LocalDateTime accountlocktime;

    @Column(name = "weight")
    float weight;

    @Column(name = "height")
    float height;

}
