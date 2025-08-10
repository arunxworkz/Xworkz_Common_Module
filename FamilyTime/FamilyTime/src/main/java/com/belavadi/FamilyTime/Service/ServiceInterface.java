package com.belavadi.FamilyTime.Service;

import com.belavadi.FamilyTime.DTO.DescriptionDto;
import com.belavadi.FamilyTime.DTO.OtpDTO;
import com.belavadi.FamilyTime.DTO.SignInDTO;
import com.belavadi.FamilyTime.DTO.SignUpDTO;
import com.belavadi.FamilyTime.Entity.UserEntity;

public interface ServiceInterface {
    public UserEntity signUp(SignUpDTO dto);

    public boolean signIn(SignInDTO dto);

    public boolean accountExistsOrNot(String email);

    public String getOtp(String email);

    public boolean checkOtp(OtpDTO dto);

    public boolean setPassword(SignUpDTO dto);

    public String generateStory(DescriptionDto dto);
}