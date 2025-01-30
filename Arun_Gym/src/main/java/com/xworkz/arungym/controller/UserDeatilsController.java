package com.xworkz.arungym.controller;

import com.sun.mail.imap.protocol.ID;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.service.RegisterService;
import com.xworkz.arungym.service.UserDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
@Slf4j

public class UserDeatilsController {

    @Autowired
    private UserDetails userDetails;

    @Autowired
    private RegisterService registerService;


    public UserDeatilsController(){
        log.info("This  is user details");
    }


    //AccountLock

    @PostMapping("/userLogin")
    public String userLogin(@RequestParam String email, @RequestParam String password, HttpSession session, Model model){

        log.info("Email is: "+email+" "+"Password: "+password);
        RegisterEntity registerEntity = registerService.userLogin(email, password);
        log.info("Name is: "+ registerEntity.getName());
        log.info("Signin count: "+registerEntity.getSignincount());
        session.setAttribute("userdetails", registerEntity);

        if(registerEntity.getSignincount() > 2){
            model.addAttribute("lock", "Account has been locked");
            return "UserLogin";
        }

        if(registerEntity.getSignincount() == -1){
            return "UpdatePassword";
        }

        if(registerEntity.getSignincount() == 0){
//            model.addAttribute("userdetails", registerEntity);/
            session.getAttribute("userdetails");
            return "UerDetailsDisplay";

        }
        return "UserLogin";
    }



    //Password Update
    @PostMapping("/updatePassword")
    public String passwordUpdate(String email, String password, String confirmPassword){

        log.info("The password: "+password+" "+" Email is: "+email);
        if(userDetails.passwordUpdate(password, email,confirmPassword)) {
            if ((password.equals(confirmPassword))) {
                return "index";
            }
        }
        return "UpdatePassword";
    }

        @GetMapping("/userDetailsUpdate/{id}")
        public String userDetailsUpdate(@PathVariable int id, Model model){
        log.info("ID is :"+id);
        model.addAttribute("id", id);
            return "UserDetailsUpdate";
        }

}
