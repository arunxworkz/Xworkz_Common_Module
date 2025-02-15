package com.xworkz.arungym.controller;

import com.xworkz.arungym.Constants.TrainerNAmes;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.service.RegisterService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@Slf4j
@RequestMapping("/")
public class CustomerDetailsController {


    @Autowired
    private RegisterService registerService;

    private List<TrainerNAmes> trainerNAmes = new ArrayList<>(Arrays.asList(TrainerNAmes.values()));

    public CustomerDetailsController(){
        log.info("This is from the CustomerDetailsController");
    }


    @GetMapping("/noTrainer")
    public String displayDetail(Model model){

        List<RegisterEntity> list = registerService.getAllDetails();
        if(list!=null){
            model.addAttribute("noTrainerList", list);
            return "CustomrtWithNoData";
        }
        return "Success";
    }

    @GetMapping("/customerTrainer")
    public String customerWithTrainer(Model model){

        List<RegisterEntity> list = registerService.getCustomrtDetailsWithTrainer();
        if(list!=null){
            model.addAttribute("customrtWithTrainer", list);
            model.addAttribute("trainers", trainerNAmes);
            return "CustomrtWithTrainer";
        }
        return "Success";
    }

    @PostMapping("/assign/{id}")
    public String assignTrainer(@PathVariable int id, @RequestParam String trainer, String timeRange){

        System.out.println("Id from the customer with trainer details: "+id+ " "+ trainer);

        RegisterEntity registerEntity = registerService.getDatabyIdToAssigntrainer(id, trainer);
        if(registerEntity!=null){
            return "Success";
        }

        return "";
    }
}
