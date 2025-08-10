package com.belavadi.FamilyTime.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.belavadi.FamilyTime.DTO.DescriptionDto;
import com.belavadi.FamilyTime.DTO.OtpDTO;
import com.belavadi.FamilyTime.Service.ServiceInterface;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/auth")
@RestController
public class RestControllerClass {
    
    @Autowired
    private ServiceInterface service;


    @PostMapping("/getOtp/{email}")
    public ResponseEntity<String> getOpt(@PathVariable String email, Model model){
        String otp = service.getOtp(email);
        System.out.println("Otp from controller: "+otp);
        if(otp != "Email does not exists"){
            model.addAttribute("otpYoUser", otp);
            return ResponseEntity.ok(otp);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found for email");
    }


    @PostMapping("/verifyOtp")
    public ResponseEntity<String> checkOtp(@RequestBody OtpDTO dto){
        if(service.checkOtp(dto)){
            return ResponseEntity.status(200).body("User valid");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Otp doesn't matches");
    }
    
    @PostMapping("/createStory")
    public String createStory(@RequestBody DescriptionDto dto){
        System.out.println("NAme: "+dto.getName()+" "+dto.getOccasion()+" "+dto.getDescription());
        
        String story = service.generateStory(dto);
        return story;
    }

    
}