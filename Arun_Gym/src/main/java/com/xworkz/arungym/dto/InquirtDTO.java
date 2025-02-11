package com.xworkz.arungym.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class InquirtDTO {

    private String name;
    private String area;
    private String phNo;
    private float distance;
    private int age;
    private String status;
    private String reason;
}
