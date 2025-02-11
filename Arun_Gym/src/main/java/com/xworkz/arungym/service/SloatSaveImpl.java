package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.SlotDTO;
import com.xworkz.arungym.dto.TrainerTimeAllotment;
import com.xworkz.arungym.entity.SlotEntity;
import com.xworkz.arungym.entity.TrainerTimeAllotmentEntity;
import com.xworkz.arungym.repository.SlotSaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.Duration;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;

@Service
public class SloatSaveImpl implements SloatSaveService {

    @Autowired
    private SlotSaveRepository slotSaveRepository;

    @Override
    public Duration timeDuration(LocalTime startTime, LocalTime endTime) {
        Duration duration = Duration.between(endTime, startTime);
        return duration;
    }

    @Override
    public boolean onSave(SlotDTO dto) {

        SlotEntity slotEntity = new SlotEntity();
        if(dto.getStartTime() !=null && dto.getEndTime() != null && dto.getDuration() != null){

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh:mm a");
            String formattedStartTime = dto.getStartTime().format(formatter);
            String formattedEndTime = dto.getEndTime().format(formatter);

            slotEntity.setStartTime(formattedStartTime);
            slotEntity.setEndTime(formattedEndTime);
            slotEntity.setDuration(dto.getDuration());
            if(slotSaveRepository.onSlotSave(slotEntity)){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }

    @Override
    public List<SlotEntity> getSlots() {


        List<SlotEntity> slotEntities = slotSaveRepository.getSlots();
        if(slotEntities!=null){
            return slotEntities;
        }
        return Collections.emptyList();
    }

    @Override
    public boolean trainerAllotment(TrainerTimeAllotment dto) {

        if(dto!=null){
            if(dto.getPhone()==null){
                return false;
            }

            if(dto.getTimeRange()==null){
                return false;
            }


            TrainerTimeAllotmentEntity trainerTimeAllotmentEntity = new TrainerTimeAllotmentEntity();
            trainerTimeAllotmentEntity.setName(dto.getName());
            trainerTimeAllotmentEntity.setTimeRange(dto.getTimeRange());
            trainerTimeAllotmentEntity.setTrainerphno(dto.getPhone());

            if(slotSaveRepository.trainerAllotment(trainerTimeAllotmentEntity)){
                return true;
            }
            return false;
        }
        return false;
    }

    @Override
    public List<TrainerTimeAllotmentEntity> getDetails() {

        List<TrainerTimeAllotmentEntity> trainerTimeAllotments = slotSaveRepository.getDetails();
        if(trainerTimeAllotments!=null)
            return trainerTimeAllotments;

        return Collections.emptyList();
    }

    @Override
    public boolean deleteTrsiner(int id) {

        if(slotSaveRepository.delete(id)){
            return true;
        }
        return false;
    }

}
