package com.xworkz.arungym.entity;

import lombok.Data;
import org.springframework.stereotype.Controller;

import javax.persistence.*;

@Entity
@Table(name = "slotallotment")
@Data

@NamedQuery(name = "getAllTrainerDetails", query = "select ta from TrainerTimeAllotmentEntity ta")
@NamedQuery(name = "deleteTrainerDetails", query = "delete from TrainerTimeAllotmentEntity ta where ta.id=: setId")
public class TrainerTimeAllotmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "trainername")
    String name;

    @Column(name = "trainerphno")
    String trainerphno;

    @Column(name = "timeRange")
    String timeRange;

}
