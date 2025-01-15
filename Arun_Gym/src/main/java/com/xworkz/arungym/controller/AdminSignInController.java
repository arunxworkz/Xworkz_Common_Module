package com.xworkz.arungym.controller;

import com.xworkz.arungym.Constants.Images;
import com.xworkz.arungym.entity.AdminDetailsEntity;
import com.xworkz.arungym.service.AdminDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
@Slf4j
public class AdminSignInController {

    @Autowired
    AdminDetailsService adminDetailsService;

    public AdminSignInController(){
        log.info("This is admin signin controller");
    }

    @GetMapping("/sigin")
    public String showImage(Model model){
        model.addAttribute("backgroundImage", Images.ADMIN_BACKGROUND.getImagePath());
        return "AdminDetails";
    }

    @PostMapping("/onSignin")
    String onSigin(String email, String password, Model model){
        log.info("Email is: "+email+" "+"Password is: "+ password);
        AdminDetailsEntity entity = adminDetailsService.signIn(email, password);
        if(entity == null){
            model.addAttribute("wrongCreditientials", "Wrong Credientials");
            return "AdminDetails";
        }
        else if(entity != null){
            System.out.println("This is entity name: "+entity.getName());
            model.addAttribute("adminName", entity.getName());
            return "Success";
        }
        return "AdminDetails";
    }

}
