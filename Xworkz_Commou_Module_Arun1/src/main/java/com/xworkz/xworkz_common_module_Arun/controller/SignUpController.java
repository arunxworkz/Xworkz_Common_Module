package com.xworkz.xworkz_common_module_Arun.controller;


import com.xworkz.xworkz_common_module_Arun.constants.Location;
import com.xworkz.xworkz_common_module_Arun.constants.Status;
import com.xworkz.xworkz_common_module_Arun.dto.SignupDTO;
import com.xworkz.xworkz_common_module_Arun.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

@Controller
public class SignUpController {

    @Autowired
    SignUpService signUpService;

    private List<Location> liLocation = new ArrayList<>(Arrays.asList(Location.values()));

    Iterator<Location> iterator = liLocation.iterator();


    public void scheckList(){
        while (iterator.hasNext()){
            Location location = iterator.next();
            System.out.println("Location are: "+location);
        }
    }

    public SignUpController(){
        System.out.println("This is from signup controller");
    }

    @GetMapping("/signupact")
    public String onSave(Model model){
        System.out.println("The locations are: "+liLocation);
        model.addAttribute("liLocation", liLocation);
        return "Signup";
    }


    @PostMapping("/signup")
    public String onSave( Model model, @Valid SignupDTO dto,BindingResult bindingResult){
        model.addAttribute("liLocation", liLocation);

        System.out.println("The dto is: "+dto);
        if(bindingResult.hasErrors())
        {
            model.addAttribute("error",bindingResult.getAllErrors());
            return "Signup";
        }

        String saved = signUpService.save(dto);
        if(saved.contains("successfully")){
            return "Signin";
        }
        return "Signup";
    }

//    @PostMapping("")
//    public String updateByEmail(String email, String phNo){
//        int i = signUpService.updateEmailByPhNo(email, phNo);
//        if(i == Status.SUCCESS.getCode()){
//            System.out.println("Update successful");
//            return "index";
//        }
//        return "Update";
//    }
//
//
//    @PostMapping("")
//    public String updateAlternateEmailByEmail(@RequestParam String email, @RequestParam String alternateEmail){
//
//        System.out.println("Email from controller: "+email+" Alternate Email :"+alternateEmail);
//        int count = signUpService.updateAlternateEmailByEmail(email, alternateEmail);
//        if(count > 0){
//            return "Success";
//        }
//
//        return "Update";
//    }


}
