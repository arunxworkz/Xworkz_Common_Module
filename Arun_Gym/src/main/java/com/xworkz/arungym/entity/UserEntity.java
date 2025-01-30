package com.xworkz.arungym.entity;


import com.sun.org.apache.bcel.internal.classfile.Code;
import lombok.Data;
import org.springframework.stereotype.Controller;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "usertable")
@Data
//@NamedQuery(name = "getDataByEmail", query = "select ud from UserEntity ud where ud.email=: setEmail")
//
//@NamedQuery(name = "updatePassword", query = "update UserEntity ud set ud.password=: setPassword, ud.sigincount=: setSigincount where ud.email=: setEmail")
public class UserEntity {

    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
    int user_id;

    @Column(name = "email")
    String email;

    @Column(name = "password")
    String password;

    @Column(name = "sigincount")
    int sigincount;

    @Column(name = "accountlocktime")
    LocalDateTime accountlocktime;

    @Column(name = "logintime")
    LocalDateTime logintime;

    @Column(name = "usertablecol")
    String usertablecol;

}
