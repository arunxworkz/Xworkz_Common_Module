package com.belavadi.FamilyTime.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.belavadi.FamilyTime.DTO.SignInDTO;
import com.belavadi.FamilyTime.DTO.SignUpDTO;
import com.belavadi.FamilyTime.Entity.UserEntity;
import com.belavadi.FamilyTime.Service.ServiceInterface;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/auth")
@Controller
public class ControllerClass {

    @Autowired
    private ServiceInterface serviceInterface;

    //SignUP
    @PostMapping("/signUp")
    public ResponseEntity<String> signUp(@RequestBody SignUpDTO dto) {
        serviceInterface.signUp(dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //SigIn
    @PostMapping("/login")
    public ResponseEntity<String> signIn(@RequestBody SignInDTO dto, Model model){
        if(serviceInterface.signIn(dto) != null){
            return ResponseEntity.ok(serviceInterface.signIn(dto));
        }
        return ResponseEntity.ok("User not fround for: "+dto.getEmail()+" check the credientials");
    }
}