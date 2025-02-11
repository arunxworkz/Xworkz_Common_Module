package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.SlotDTO;
import com.xworkz.arungym.dto.TrainerTimeAllotment;
import com.xworkz.arungym.entity.SlotEntity;
import com.xworkz.arungym.entity.TrainerTimeAllotmentEntity;

import java.time.Duration;
import java.time.LocalTime;
import java.util.List;

public interface SloatSaveService {

    Duration timeDuration(LocalTime startTime, LocalTime endTime);

    boolean onSave(SlotDTO dto);

    List<SlotEntity> getSlots();

    boolean trainerAllotment(TrainerTimeAllotment dto);

    List<TrainerTimeAllotmentEntity> getDetails();

    boolean deleteTrsiner(int id);

}
