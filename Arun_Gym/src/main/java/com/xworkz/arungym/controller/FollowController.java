package com.xworkz.arungym.controller;

import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.service.FollowService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@Slf4j
public class FollowController {

    @Autowired
    private FollowService followService;

    public FollowController(){
        log.info("This is follow controller");
    }

    @PostMapping("getSearch")
    public String getDetails(@RequestParam(value = "search") String name, Model model){
        log.info("This is name from the follow controller: "+name);
        List<InquiryEntity> entity = followService.getDeatils(name);
        if(entity.isEmpty()){
            model.addAttribute("data", "No data found");
            return "Follow";
        } else {
            log.info("The data is: "+entity);
            model.addAttribute("data", entity);
            return "Follow";
        }
    }
}
