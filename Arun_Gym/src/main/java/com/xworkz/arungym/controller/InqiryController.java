package com.xworkz.arungym.controller;


import com.xworkz.arungym.Constants.Locations;
import com.xworkz.arungym.Constants.Status;
import com.xworkz.arungym.dto.InquirtDTO;
import com.xworkz.arungym.repository.InquiryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/")
@Slf4j
public class InqiryController {

    List<Locations> locationList = new ArrayList<>(Arrays.asList(Locations.values()));

    List<Status> statusList = new ArrayList<>(Arrays.asList(Status.values()));

    @Autowired
    InquiryService inquiryService;

    public InqiryController(){
        log.info("This is Inquiry Controller");
    }

    @GetMapping("/inquiry")
    public String onSaveDetails(Model model) {
        log.info("This is the list of details: " + locationList);
        model.addAttribute("locations", locationList);
        model.addAttribute("status", statusList);
        return "Inquiry";
    }

    @PostMapping("/onSave")
    public String onSave(InquirtDTO dto, Model model){
        log.info("This is Inquiry Controller");
        model.addAttribute("locations", locationList);
        model.addAttribute("status", statusList);
        boolean save = inquiryService.onSave(dto);
        if(save){
            model.addAttribute("savedData", "Your data hase been Saved");
            return "Inquiry";
        }
        return null;
    }


}
