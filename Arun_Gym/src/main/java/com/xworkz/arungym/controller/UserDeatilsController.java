package com.xworkz.arungym.controller;

import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.service.RegisterService;
import com.xworkz.arungym.service.RegisterUpdateService;
import com.xworkz.arungym.service.UserDetails;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@Slf4j
@RequestMapping("/")
public class UserDeatilsController {

    @Autowired
    private UserDetails userDetails;

    @Autowired
    private RegisterService registerService;

    @Autowired
    private RegisterUpdateService registerUpdateService;

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


    //REdirect attribute is used to avoid the over lapping of the action
    @GetMapping("/userDetailsUpdate/{id}")
    public String userDetailsUpdate(@PathVariable int id, Model model, RedirectAttributes redirectAttributes){
            log.info("ID is :"+id);
            redirectAttributes.addFlashAttribute("id", id);
            return "redirect:/updateByID?id="+id;
    }

    @GetMapping("/updateByID")
    public String updatePage(@RequestParam int id, Model model){
            model.addAttribute("id", id);
            return "UserDetailsUpdate";
    }

    @PostMapping("/updateUserDetails")
    public String userUpdateDetails(@RequestParam int id, @RequestParam float height, @RequestParam float weight, @RequestParam int age, HttpSession session, Model model,@RequestParam("fileUpload")MultipartFile multipartFile) throws IOException {
            log.info("Id while updating: "+id+"========"+multipartFile);
            byte[] bytes = multipartFile.getBytes();
            Path path = Paths.get("C:\\commons\\"+ System.currentTimeMillis()+".jpg");
            Files.write(path, bytes);
            String file =path.getFileName().toString();
            log.info("File is: "+file);
            model.addAttribute("fileName", file);
            RegisterEntity registerEntity = registerUpdateService.userUpdate(id, height, weight, age, file);
            session.setAttribute("userdetails", registerEntity);
            if(registerUpdateService.userUpdate(id, height, weight, age, file)!=null){
                session.getAttribute("userdetails");
                return "UerDetailsDisplay";
            }
            return "UserDetailsUpdate";
    }

    @GetMapping("/getImage")
    public  void display(HttpServletResponse response , @RequestParam String filename) throws Exception{
        System.out.println("File name is : "+filename);
        System.out.println("this is image");
        response.setContentType("Image/jpg");
        File file =new File( "C:\\commons\\"+filename);
        InputStream in =new BufferedInputStream(new FileInputStream(file));
        ServletOutputStream out=  response.getOutputStream();
        IOUtils.copy(in,out);
        response.flushBuffer();
    }

}
