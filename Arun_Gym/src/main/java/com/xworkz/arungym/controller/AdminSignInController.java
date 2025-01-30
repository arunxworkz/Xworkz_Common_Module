package com.xworkz.arungym.controller;

import com.xworkz.arungym.Constants.Images;
import com.xworkz.arungym.entity.AdminDetailsEntity;
import com.xworkz.arungym.service.AdminDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.rmi.server.ServerCloneException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import static java.lang.System.out;

@Controller
@RequestMapping("/")
@Slf4j
public class AdminSignInController {

    @Autowired
    AdminDetailsService adminDetailsService;

    public AdminSignInController(){
        log.info("This is admin signin controller");
    }

    @GetMapping("/sigin")
    public String showImage(Model model){
        model.addAttribute("backgroundImage", Images.ADMIN_BACKGROUND.getImagePath());
        return "AdminDetails";
    }

    @PostMapping("/onSignin")
    String onSigin(String email, String password, Model model, HttpSession session){
        log.info("Email is: "+email+" "+"Password is: "+ password);
        AdminDetailsEntity entity = adminDetailsService.signIn(email, password);
        session.setAttribute("AdminName", entity.getName());

        if(entity == null){
            model.addAttribute("wrongCreditientials", "Wrong Credientials");
            return "AdminDetails";
        }
        else if(entity != null){
            out.println("This is entity name: "+entity.getName());
            return "Success";
        }
        return "AdminDetails";
    }

    @GetMapping("/download")
    public void display(HttpServletResponse response, @RequestParam String fileName) throws Exception{

        log.info("File name is: "+fileName);
        response.setContentType("Image/jpg");
        File file = new File("C:\\commons\\"+ fileName);
        InputStream inputStream =new BufferedInputStream(new FileInputStream(file));
        ServletOutputStream servletOutputStream = response.getOutputStream();
        IOUtils.copy(inputStream, servletOutputStream);
        response.flushBuffer();
    }

}
