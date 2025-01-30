package com.xworkz.arungym.controller;

import com.xworkz.arungym.Constants.AmmonutPakcages;
import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.service.RegisterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@Slf4j
public class RegisterController {

//    private List<AmmonutPakcages> packageList = new ArrayList<>(Arrays.asList(AmmonutPakcages.values()));

    @Autowired
    private RegisterService registerService;

    public RegisterController(){
        log.info("This is register controller");
    }

    @GetMapping("/register")
    public String register(Model model){
        return "Register";
    }

    @PostMapping("/registering")
    public String onSave(RegisterDTO dto, HttpSession session){
        if(dto != null){
            registerService.onSave(dto);
            session.getAttribute("AdminName");
            return "Success";
        }
        return "Register";
    }
}
