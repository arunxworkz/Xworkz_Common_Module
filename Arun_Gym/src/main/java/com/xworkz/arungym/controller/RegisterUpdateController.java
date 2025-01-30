package com.xworkz.arungym.controller;

import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.entity.RegisterEntity;
import com.xworkz.arungym.service.RegisterUpdateService;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.secure.spi.IntegrationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.jws.WebParam;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@Slf4j
@RequestMapping("/")
public class RegisterUpdateController {

    @Autowired
    private RegisterUpdateService registerUpdateService;



    public RegisterUpdateController(){
        System.out.println("This is the registration update controller");
    }

    @PostMapping("/getSearchByName")
    public String searchData(@RequestParam("search") String name,Model model){
        if(name!=null) {
            List<RegisterEntity> list = registerUpdateService.getDataByName(name);
            model.addAttribute("getAllDetails", list);
            return "RegisteredDetails";
        }
        return "";
    }


    @GetMapping("/getData")
    public String getUpdate(Model model){
        List<RegisterEntity> list = registerUpdateService.getAll();
        System.out.println("The list is: "+list);
        model.addAttribute("getAllDetails", list);
        return "RegisteredDetails";
    }

    @GetMapping("/getSearchByEmail")
    public String getDataByEmail(int id, Model model, HttpSession session){
        log.info("Email is: "+id);
        if(id != 0){
            RegisterEntity registerEntity = registerUpdateService.getDataById(id);
            model.addAttribute("packageTake", "Your package was: "+registerEntity.getPackages());
//            model.addAttribute("entityPakcage", registerEntity.getPackages());
            model.addAttribute("entityAmount", registerEntity.getTotalammount());
            model.addAttribute("entityBalance", registerEntity.getBalanceAmmount());
            model.addAttribute("getEmail", registerEntity.getEmail());
            model.addAttribute("getId", registerEntity.getId());
            model.addAttribute("installmentAmount", registerEntity.getInstallmentAmount());
            model.addAttribute("installmentTaken", registerEntity.getInstallement());
            model.addAttribute("entityInstallment", registerEntity.getInstallement());
            log.info("Id is: "+registerEntity.getId());
            return "RegisterUpdate";
        }
        model.addAttribute("noMatchForEmail", "No data found for matching email");
        return "RegisterUpdate";
    }

   // private int id;
    @PostMapping("/updatePackageServlet")
    public String onUpdate(int id, long packages, long trainer, long amount, long balance, long installmentAmount, int installment){

        RegisterEntity entity = registerUpdateService.onUpdate(id, packages, trainer, amount, balance, installmentAmount, installment);
        if(entity !=null){
            return "Success";
        }
        return "Update not successful";
    }


}
