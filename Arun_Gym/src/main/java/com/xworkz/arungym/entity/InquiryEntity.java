package com.xworkz.arungym.entity;

import lombok.Cleanup;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "inquiry")

@NamedQuery(name = "getAllDetails", query = "select ie from InquiryEntity ie")
@NamedQuery(name = "getData", query = "select ie from InquiryEntity ie where ie.name like :setName")
@NamedQuery(name = "getDataById", query = "select ie from InquiryEntity ie where ie.id=: setID")
@NamedQuery(name = "updateStatus", query = "update InquiryEntity ie set ie.status=: setStatus, ie.reason=: setReason where ie.id=: setId")

public class InquiryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "area")
    private String area;

    @Column(name = "phno")
    private String phNo;

    @Column(name = "distance")
    private float distance;

    @Column(name = "age")
    private int age;

    @Column(name = "status")
    private String status;

    @Column(name = "reason")
    private String reason;

    @Column(name = "createdby")
    String createdby;

    @Column(name = "createdtime")
    LocalDateTime createdtime;

    @Column(name = "updatedby")
    String updatedby;

    @Column(name = "updatedtime")
    LocalDateTime updatedtime;
}
