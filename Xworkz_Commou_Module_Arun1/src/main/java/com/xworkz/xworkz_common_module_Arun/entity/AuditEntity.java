package com.xworkz.xworkz_common_module_Arun.entity;

import lombok.Data;

import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@MappedSuperclass
public class AuditEntity implements Serializable {

    private String craetedBy;
    private LocalDateTime createdTime = LocalDateTime.now();
    private String updatedBy;
    private LocalDateTime updatedTime;
}
