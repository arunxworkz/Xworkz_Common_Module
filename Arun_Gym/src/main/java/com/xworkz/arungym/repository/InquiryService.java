package com.xworkz.arungym.repository;

import com.xworkz.arungym.dto.InquirtDTO;
import org.springframework.ui.Model;

public interface InquiryService {
    boolean onSave(InquirtDTO dto);
}
