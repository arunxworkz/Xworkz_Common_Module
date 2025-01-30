package com.xworkz.arungym.controller;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/")


public class ViewController {


    public ViewController(){
        log.info("This is View Controller");
    }


    @GetMapping("/")
    public String onViewSave(){
        return "ViewUpdatePage";
    }
}
