package com.xworkz.xworkz_common_module_Arun.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
public class SignupDTO {
@NonNull
@Size(min = 3,max = 10)
    private String userName;
@Email(message = "Enter the valid email")
    private String email;
    private String altEmail;
    private String phNo;
    private String altPhNo;
    private String fileName;
    private String location;

}
