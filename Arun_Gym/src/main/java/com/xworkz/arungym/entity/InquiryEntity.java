package com.xworkz.arungym.entity;

import lombok.Cleanup;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "inquiry")


@NamedQuery(name = "getData", query = "select ie from InquiryEntity ie where ie.name like :setName")

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
}
