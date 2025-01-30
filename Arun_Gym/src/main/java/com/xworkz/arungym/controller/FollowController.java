package com.xworkz.arungym.controller;
import com.xworkz.arungym.Constants.Status;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.service.FollowService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@Slf4j
@RequestMapping("/")
public class FollowController {

    @Autowired
    private FollowService followService;

    private List<Status> statusList = new ArrayList<>(Arrays.asList(Status.values()));

    public FollowController(){
        log.info("This is follow controller");
    }

    @GetMapping("/follow")
    public String getDetails(Model model){
        List<InquiryEntity> entityList = followService.getAllDetails();
        model.addAttribute("entity", entityList);
        model.addAttribute("status", statusList);
        model.addAttribute("data", "");
        return "Follow";
    }


    @PostMapping("getSearch")
    public String getDetails(@RequestParam(value = "search") String name, Model model){
        log.info("This is name from the follow controller: "+name);
        List<InquiryEntity> entity = followService.getDeatils(name);
        model.addAttribute("entity", entity);
        model.addAttribute("status", statusList);

        if(entity.isEmpty()){
            model.addAttribute("error", "No data found");
            return "Follow";
        } else {
            log.info("The data is: "+entity);
            model.addAttribute("data", entity);
            return "Follow";
        }
    }

}
