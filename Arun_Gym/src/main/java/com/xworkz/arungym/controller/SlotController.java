package com.xworkz.arungym.controller;


import com.xworkz.arungym.dto.SlotDTO;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.repository.RegisteUpdateRepository;
import com.xworkz.arungym.service.SloatSaveService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@Slf4j

@RequestMapping("/")
public class SlotController {

    @Autowired
    private SloatSaveService sloatSave;

    public SlotController(){
        log.info("This is slot controller");
    }

    @PostMapping("/getDuration")
    public String timeSlotSave(SlotDTO dto, HttpSession session){

        log.info("Start timg: "+dto.getStartTime()+" End time: "+dto.getEndTime()+" Duration: "+dto.getDuration());

        if(sloatSave.onSave(dto)){
            session.getAttribute("AdminName");
            return "AddSlots";
        }
        return "AddSlots";
    }





}
