package com.xworkz.arungym.repository;

import com.xworkz.arungym.dto.TrainerTimeAllotment;
import com.xworkz.arungym.entity.SlotEntity;
import com.xworkz.arungym.entity.TrainerTimeAllotmentEntity;

import java.util.List;

public interface SlotSaveRepository {

    boolean onSlotSave(SlotEntity slotEntity);

    List<SlotEntity> getSlots();


    boolean trainerAllotment(TrainerTimeAllotmentEntity trainerTimeAllotmentEntity);

    List<TrainerTimeAllotmentEntity> getDetails();

    boolean delete(int id);

    String getTrainerSlot(String trainerSlot);

}
