package com.xworkz.arungym.RestController;
import com.xworkz.arungym.entity.TrainerTimeAllotmentEntity;
import com.xworkz.arungym.service.RegisterService;
import com.xworkz.arungym.service.SloatSaveService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.Duration;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

@RestController //Representational State Transfer Controlller
@RequestMapping("/")
@Slf4j
public class AjaxController {

    @Autowired
    private RegisterService registerService;

    @Autowired
    private SloatSaveService sloatSave;

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

    @GetMapping(value = "/getTime/{startTime}/{endTime}")
    public String timeDuration(@PathVariable String startTime, @PathVariable String endTime, Model model){
        LocalTime start_time = LocalTime.parse(startTime);
        LocalTime end_time = LocalTime.parse(endTime);
        Duration duration = sloatSave.timeDuration(end_time, start_time);
        int hour = (int)duration.toHours();
        int minutes = (int)duration.toMinutes();
        // % -> formats the data as integer && 02 -> make sure the digits are atleast 2
        String formatTiming = String.format("%02d:%02d", hour, minutes);
        Map<String, Integer> map = new HashMap<>();
        map.put("hour", hour);
        map.put("minutes", minutes);
        model.addAttribute("timeDuration", formatTiming);
        return formatTiming;
    }

    @GetMapping(value = "/slot/{trainerSlot}")
    public String getSlot(@PathVariable String trainerSlot, Model model){
        log.info("NAme is: "+trainerSlot);
        String timeRange = sloatSave.getTrainerSlot(trainerSlot);
        if(timeRange!=null){
            model.addAttribute("slot", timeRange);
            System.out.println("The time is: "+timeRange);
            return timeRange;
        }

        return null;
    }


}
