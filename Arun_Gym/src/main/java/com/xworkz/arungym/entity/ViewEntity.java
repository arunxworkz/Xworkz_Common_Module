package com.xworkz.arungym.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "viewtable")
public class ViewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int view_id;

    @Column(name = "status")
    String status;

    @Column(name = "reason")
    String reason;

    @Column(name = "id")
    int id;

    @Column(name = "updatedBy")
    String updatedBy;

    @Column(name = "updatedtime")
    LocalDateTime updatedtime;

}
