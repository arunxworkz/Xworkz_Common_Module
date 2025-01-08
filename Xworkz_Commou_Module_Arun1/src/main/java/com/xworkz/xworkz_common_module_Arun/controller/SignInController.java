package com.xworkz.xworkz_common_module_Arun.controller;
import com.sun.corba.se.spi.activation.Server;
import com.xworkz.xworkz_common_module_Arun.RestController.RestSignUpController;
import com.xworkz.xworkz_common_module_Arun.dto.SignupDTO;
import com.xworkz.xworkz_common_module_Arun.entity.SignupEntity;
import com.xworkz.xworkz_common_module_Arun.service.SignUpService;
import org.apache.commons.io.IOUtils;
import org.hibernate.cache.spi.FilterKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class SignInController {

    @Autowired
    SignUpService signUpService;

    @Autowired
    RestSignUpController restSignUpController;

    @PostMapping("/logIn")
    public String onSignIn(@RequestParam String email, @RequestParam String password, SignupDTO dto, HttpServletRequest session, Model model) {
        System.out.println(email + "    " + password);
        SignupEntity str = signUpService.signIn(email, password);

        System.out.println("User name is: " + str);
        System.out.println("in controller.." + str.getSignincount());

        if(str.getSignincount() >= 2){

            model.addAttribute("lock", "Account has been locked, Try again after 2 minutes or Reset the password");
            return "Signin";
        }
        HttpSession session1 = session.getSession(true);
        session1.setAttribute("userName", str.getName());
        if(str.getSignincount() > 2){
            return "Signin";
        }

        if(str.getSignincount() == -1){
            return "PasswordUpdate";
        }

        if(str.getSignincount() == 0){
            model.addAttribute("userName", str.getName());
            HttpSession session2 = session.getSession(true);
            session2.setAttribute("userName", str.getName());
            // here
            return "Success";
        }
        return "Signin";
    }

    @PostMapping("/updateAction")
    public String updateController(@RequestParam("fileUpload") MultipartFile multipartFile, SignupDTO dto, Model model, HttpServletRequest servletRequest) throws IOException {
//        SignupEntity ref = (SignupEntity) session.getAttribute("name");
        String count = restSignUpController.getNameCount(dto.getUserName());
        System.out.println("The name is :"+ count);

        System.out.println("Multipart file: "+multipartFile);
        System.out.println("Original file name: "+multipartFile.getOriginalFilename());
        System.out.println("Multipart File: "+multipartFile.getContentType());
        byte[] image =multipartFile.getBytes();
        HttpSession session = servletRequest.getSession(true);
        Path path = Paths.get("C:\\commons\\" + System.currentTimeMillis()+ ".jpg");
        session.setAttribute("path", path);
        Files.write(path, image);
        String file =path.getFileName().toString();
        boolean save = signUpService.update(dto, file);
        if(signUpService.update(dto, file)){
            model.addAttribute("fileName", file);
            return "FinalSuccess";
        }
        return  "Signin";
    }

    @PostMapping("/updatePassword")
    public String onUpdatePassword(String email, String newPassword, String confirmPassword){

        if(signUpService.passwordUpdate(email, newPassword, confirmPassword)){
            return "Success";
        }
        return "PasswordUpdate";
    }

    @GetMapping("/download")
    public  void display(HttpServletResponse response ,  @RequestParam String fileName) throws Exception{
        System.out.println("File name is : "+fileName);
        System.out.println("this is image");
        response.setContentType("Image/jpg");
        File file =new File( "C:\\commons\\"+fileName);
        InputStream in =new BufferedInputStream(new FileInputStream(file));
        ServletOutputStream out=  response.getOutputStream();
        IOUtils.copy(in,out);
        response.flushBuffer();
    }

//    @GetMapping("/download")
//    public String display(Model model, String email){
//        SignupEntity entity = signUpService.getData(email);
//        String fileName = entity.getFilename();
//        model.addAttribute("fileName", fileName);
//        return "ViewImage";
//    }

}
