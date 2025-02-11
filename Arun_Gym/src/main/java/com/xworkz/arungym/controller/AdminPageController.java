package com.xworkz.arungym.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.persistence.Column;

@Controller
@RequestMapping("/")
public class AdminPageController {

    @GetMapping("/adminPage")
    public String adminPage(){
        return "Success";
    }

}
