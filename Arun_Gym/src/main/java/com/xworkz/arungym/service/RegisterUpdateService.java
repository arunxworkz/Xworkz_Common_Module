package com.xworkz.arungym.service;

import com.xworkz.arungym.dto.RegisterDTO;
import com.xworkz.arungym.entity.RegisterEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface RegisterUpdateService {
    public RegisterEntity getDataById(int id);

    public RegisterEntity onUpdate(int id, long packages, long trainer, long amount, long balance, long installmentAmount, int installment);

    public List<RegisterEntity> getAll();

    public List<RegisterEntity> getDataByName(String name);

    public RegisterEntity userUpdate(int id, float height, float weight, int age, String file);
}
