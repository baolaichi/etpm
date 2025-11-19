package com.example.inventory.service;

import com.example.inventory.model.dto.EquipmentViewDTO;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;

public interface DeviceService {
    public Page<EquipmentViewDTO> getEquipmentView(Pageable pageable);
}
