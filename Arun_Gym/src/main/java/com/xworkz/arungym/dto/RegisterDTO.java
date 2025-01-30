package com.xworkz.arungym.dto;

import lombok.Data;
import lombok.NonNull;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RegisterDTO {

    @Valid

    @NotNull(message = "Name should not be null")
    @Size(min = 3, message = "Name length should be greater than 3")
    String name;

    @Email(message = "Email should contain @")
    String email;

    @Size(min = 3, max = 7, message = "Password length should be between 3 and 7")
    String password;
    String phNo;
    String gender;
    String packages;
    long trainer;
    int installment;
    long totalAmmount;
    String balance;
}
