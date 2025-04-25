package com.belavadi.FamilyTime.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.belavadi.FamilyTime.Service.ServiceInterface;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/auth")
@RestController
public class RestControllerClass {
    
    @Autowired
    private ServiceInterface service;

    @PostMapping("/getOtp/{email}")
    public String getOpt(@PathVariable String email){
        String otp = service.getOtp(email);
        System.out.println("Otp from controller: "+otp);
        if(otp !=null){
            return otp;
        }
        return "USer not found fro email";
    }
}