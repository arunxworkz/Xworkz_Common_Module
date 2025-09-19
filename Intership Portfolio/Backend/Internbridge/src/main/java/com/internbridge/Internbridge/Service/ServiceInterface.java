package com.internbridge.Internbridge.Service;

import javax.naming.directory.DirContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internbridge.Enum.SignUPEnum;
import com.internbridge.Internbridge.DTO.HrSignUpDTO;
import com.internbridge.Internbridge.Repository.RepositoryInterface;

public interface ServiceInterface {

    public SignUPEnum signUp(HrSignUpDTO dto);

    public SignUPEnum verifyCode(String email, String code);

    public SignUPEnum setPassword(String email, String password);

}