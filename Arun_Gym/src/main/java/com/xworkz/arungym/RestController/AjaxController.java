package com.xworkz.arungym.RestController;

import com.xworkz.arungym.service.RegisterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController //Representational State Transfer Controlller
@RequestMapping("/")
@Slf4j
public class AjaxController {

    @Autowired
    private RegisterService registerService;

    public AjaxController(){
        log.info("This is rest controller");
    }

//    produces = "application/json"
    @GetMapping(value = "/forTotalAmmount/{packages}/{installment}/{trainerYes}", produces = "application/json")

    //controller can not accept the multiple values in its path, therefore we need to specify @PathVariable which accepts the multiple values.
    ///here 406 error occur when the

    public Long getTotalAmmount(@PathVariable  double packages, @PathVariable double trainerYes, @PathVariable int installment, Model model){
        log.info("PAckage: "+packages+" TrainerYes: "+trainerYes+  "Installement: "+installment);

        long totalAmmount = registerService.calculateTotalAndBalance(packages, trainerYes, installment);
        log.info("From controller: "+totalAmmount);
            model.addAttribute("totalAmmount", totalAmmount);
        return totalAmmount;
    }

    @GetMapping(value = "/balance/{totalAmount}/{installment}", produces = "application/json") // Here produces = "application/json" is optional
    //because we have added dependencies. However it is not related to _________________________________________
    public Long getBalance(@PathVariable double totalAmount, @PathVariable int installment,Model model){

        long balance = registerService.calculateBalance(totalAmount, installment);
        log.info(String.valueOf(balance));
        model.addAttribute("balance", balance);
        return balance;
    }
}
