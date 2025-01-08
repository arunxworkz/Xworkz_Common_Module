package com.xworkz.xworkz_common_module_Arun.RestController;

import com.xworkz.xworkz_common_module_Arun.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class RestSignUpController {

    public RestSignUpController(){
        System.out.println("This is rest controller");
    }

    @Autowired
    SignUpService signUpService;

    @GetMapping(value = "/checkValue/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getNameCount(@PathVariable String name){
        System.out.println("This is restcontoller name: "+name);
        long count = this.signUpService.getNameCount(name);
        if(count > 0){
            return "Exists";
        }
        return "";
    }

    @GetMapping(value = "/checkEmailValue/{email}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getEmailCount(@PathVariable String email){
        long count = signUpService.getEmailCount(email);
        System.out.println("The email count is: "+count);
        if(count > 0){
            return "Exists";
        }
        return "";
    }

    @GetMapping(value = "/checkPhnoValue/{phNo}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getPhnoCount(@PathVariable String phNo){
        long count = signUpService.getPhnoCount(phNo);
        if(count > 0){
            return "Exists";
        }
        return "";
    }

}
