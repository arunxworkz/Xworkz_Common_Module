package com.belavadi.FamilyTime.DTO;
import lombok.Data;

@Data
public class SignUpDTO {
    private String name;
    private String email;
    private String phone;
    private String password;
}