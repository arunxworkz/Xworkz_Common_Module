package com.xworkz.arungym.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "slot")
@Data

@NamedQuery(name = "getAll", query = "select se from SlotEntity se")
public class SlotEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "starttime")
    String startTime;

    @Column(name = "endtime")
    String endTime;

    @Column(name = "duration")
    String duration;


}
