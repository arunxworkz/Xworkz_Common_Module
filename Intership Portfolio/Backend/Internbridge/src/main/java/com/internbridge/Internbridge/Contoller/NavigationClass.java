package com.internbridge.Internbridge.Contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.internbridge.Enum.SignUPEnum;
import com.internbridge.Internbridge.DTO.HrSignUpDTO;
import com.internbridge.Internbridge.Service.ServiceClasses;



@CrossOrigin(origins = "http://localhost:5173")
@Controller
@RequestMapping("/api")
public class NavigationClass {

    @Autowired
    private ServiceClasses serviceClasses;

    @PostMapping("/signUp")
    public ResponseEntity<String> getMethodName(@RequestBody HrSignUpDTO dto) {
        SignUPEnum signUPEnum = serviceClasses.signUp(dto);
        
        switch(signUPEnum){
            case OTP_SENT:
                return ResponseEntity.ok("Verification code is sent to your email");

            case INVALID_EMAIL:
                return ResponseEntity.badRequest().body("Please enter the valid business Email ID");
            
            case EMPTY_EMAIL:
                return ResponseEntity.badRequest().body("Email can not be empty");

            default:
                return ResponseEntity.status(500).body("SignUP Failed");
        }
    }

    
    @PostMapping("/verification")
    public ResponseEntity<String> verifyCode(@RequestParam String email, @RequestParam String code){
            SignUPEnum result = serviceClasses.verifyCode(email, code);
            switch(result){
                case SUCCESS:
                    return ResponseEntity.ok("Email is verified. Redircting to Password Setup page");
                
                case INVALID_OTP:
                    return ResponseEntity.badRequest().body("Invalid code. Please sign up again.");

                case INVALID_EMAIL:
                    return ResponseEntity.badRequest().body("Email not found. Please sign up first.");

                default:
                    return ResponseEntity.status(500).body("Verification failed");

            }
    }


    @PostMapping("/setPassword")
    public ResponseEntity<String> setPassword(@RequestParam String email, @RequestParam String password){
        SignUPEnum result = serviceClasses.setPassword(email, password);
        switch (result) {
            case SUCCESS:
                return ResponseEntity.ok("Password set successfully. You can now login.");
            case NOT_VERIFIED:
                return ResponseEntity.badRequest().body("Email is not verified. Please verify first.");
            case INVALID_EMAIL:
                return ResponseEntity.badRequest().body("Invalid email. Please sign up first.");
            default:
                return ResponseEntity.status(500).body("Error setting password");
        }
    }
    
}