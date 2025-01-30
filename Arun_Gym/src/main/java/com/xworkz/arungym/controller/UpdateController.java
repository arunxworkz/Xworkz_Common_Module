package com.xworkz.arungym.controller;

import com.xworkz.arungym.Constants.Status;
import com.xworkz.arungym.dto.InquirtDTO;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.service.UpdateStatusService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@Slf4j
@RequestMapping("/")
public class UpdateController {

    @Autowired
    private UpdateStatusService updateStatusService;

    public UpdateController(){
        log.info("This is update controller");
    }

    private List<Status> listStatus = new ArrayList<>(Arrays.asList(Status.values()));

    @GetMapping("/updation/{id}")
    public String updation(@PathVariable("id") int id, Model model){
        model.addAttribute("status", listStatus);
        log.info("id: "+id);
        model.addAttribute("id", id);
        return "Update";
    }


    @PostMapping("/updation/settingData")
    public RedirectView update( int id,String status,String reason, Model model, HttpServletRequest req){ //HttpServlet is used to redirect - not necessary but some times
        System.out.println("==============="+id);
        log.info("This is updation controller");
        log.info(" Status: "+status+"Reason: "+reason);
        if(status.equals("Comfirmed")){
            InquiryEntity inquiryEntity = updateStatusService.statusUpdate(status, reason, id);
        }
        InquiryEntity inquiryEntity = updateStatusService.statusUpdate(status, reason, id);
        RedirectView redirectView =new RedirectView();

        if(inquiryEntity == null){
            model.addAttribute("data", "Data does not exists");
            redirectView.setUrl(req.getContextPath()+"/updation/settingData");
            return redirectView;
        }else{
            redirectView.setUrl(req.getContextPath()+"/follow");
        }
        return redirectView;
    }
}
