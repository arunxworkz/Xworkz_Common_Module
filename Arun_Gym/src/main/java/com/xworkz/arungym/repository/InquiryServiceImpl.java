package com.xworkz.arungym.repository;

import com.xworkz.arungym.dto.InquirtDTO;
import com.xworkz.arungym.entity.InquiryEntity;
import com.xworkz.arungym.service.InquiryRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class InquiryServiceImpl implements InquiryService {

    @Autowired
    InquiryRepository inquiryRepository;

    InquiryEntity inquiryEntity = new InquiryEntity();

    public InquiryServiceImpl() {
        log.info("This is InquiryServiceImpl service impl");
    }

    @Override
    public boolean onSave(InquirtDTO dto) {

        System.out.println("This is from the Inquiry Service dto: " + dto);
        System.out.println("The phone number is: " + dto.getPhNo());

        if (dto != null) {
            if (dto.getName() != null && dto.getName().length() > 3) {
                log.info("Name is correct");
                if (dto.getArea() != null) {
                    log.info("Area is valid");
                    if (dto.getDistance() != 0) {
                        log.info("Distance is correct");
                        if (dto.getPhNo() != null && (dto.getPhNo().length() == 10 || dto.getPhNo().length() < 10)) {
                            log.info("Phone number is valid");
                            if (dto.getStatus() != null) {
                                log.info("Status is correct");
                                if (dto.getReason() != null) {
                                    log.info("Reason is correct");
                                    if (dto.getAge() > 15) {
                                        log.info("Age is valid");
                                        inquiryEntity.setName(dto.getName());
                                        inquiryEntity.setArea(dto.getArea());
                                        inquiryEntity.setPhNo(dto.getPhNo());
                                        inquiryEntity.setAge(dto.getAge());
                                        inquiryEntity.setDistance(dto.getDistance());
                                        inquiryEntity.setStatus(dto.getStatus());
                                        inquiryEntity.setReason(dto.getReason());
                                        if (inquiryEntity != null) {
                                            boolean save = inquiryRepository.onSave(inquiryEntity);
                                            log.info("Data is saved");
                                            return save;
                                        }
                                        log.info("Data is not saved");
                                        return false;
                                    } else {
                                        log.info("Age is not valid");
                                        return false;
                                    }
                                } else {
                                    log.info("Reason is not valid");
                                    return false;
                                }
                            } else {
                                log.info("Status is not valid");
                                return false;
                            }
                        } else {
                            log.info("Phone number is not valid");
                            return false;
                        }
                    } else {
                        log.info("Distance is not valid");
                        return false;
                    }
                } else {
                    log.info("Area is not valid");
                    return false;
                }
            } else {
                log.info("Name is not valid");
                return false;
            }
        } else {
            log.info("DTO is empty");
            return false;
        }
    }
}

