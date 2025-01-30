package com.xworkz.arungym.repository;

import com.xworkz.arungym.dto.InquirtDTO;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.service.InquiryRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class InquiryServiceImpl implements InquiryService {

    @Autowired
    InquiryRepository inquiryRepository;

//    InquiryEntity inquiryEntity = new InquiryEntity();

    public InquiryServiceImpl() {
        log.info("This is InquiryServiceImpl service impl");
    }

    @Override
    public boolean onSave(InquirtDTO dto) {
        System.out.println("This is from the Inquiry Service dto: " + dto);
        System.out.println("The phone number is: " + dto.getPhNo());

        if (dto == null) {
            log.info("DTO is empty");
            return false;
        }

        if (dto.getName() == null || dto.getName().length() <= 3) {
            log.info("Name is not valid");
            return false;
        }
        log.info("Name is correct");

        if (dto.getArea() == null) {
            log.info("Area is not valid");
            return false;
        }
        log.info("Area is valid");

        if (dto.getDistance() == 0) {
            log.info("Distance is not valid");
            return false;
        }
        log.info("Distance is correct");

        if (dto.getPhNo() == null || dto.getPhNo().length() != 10) {
            log.info("Phone number is not valid");
            return false;
        }
        log.info("Phone number is valid");

        if (dto.getAge() <= 15) {
            log.info("Age is not valid");
            return false;
        }
        log.info("Age is valid");

        dto.setStatus("Inquired");
        // Convert DTO to Entity
        InquiryEntity entity = new InquiryEntity();
        BeanUtils.copyProperties(dto, entity);

        if (entity != null) {
            boolean save = inquiryRepository.onSave(entity);
            if (save) {
                log.info("Data is saved");
                return true;
            } else {
                log.info("Data is not saved");
                return false;
            }
        } else {
            log.info("Entity conversion failed");
            return false;
        }
    }

}

