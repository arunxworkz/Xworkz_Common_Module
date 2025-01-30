package com.xworkz.arungym.dto;


import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDTO {

    private String email;
    private String password;
    private int sigincount;
    private String usertablecol;
    private String confirm_password;
    private LocalDateTime accountlocktime;
    private LocalDateTime logintime;
}
