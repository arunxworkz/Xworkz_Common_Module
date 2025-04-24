package com.belavadi.FamilyTime.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.belavadi.FamilyTime.Service.ServiceInterface;

@RequestMapping("/api/auth")
@RestController
public class RestControllerClass {
    
    @Autowired
    private ServiceInterface service;

    @GetMapping("/getOtp/{email}")
    public String getOpt(@PathVariable String email){
        if(service.getOtp(email) !=null){
            return service.getOtp(email);
        }
        return "USer not found fro email";
    }
}