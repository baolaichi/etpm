package com.example.inventory.service.impl;

import com.example.inventory.model.dto.EquipmentViewDTO;
import com.example.inventory.repository.DeviceRepository;
import com.example.inventory.service.DeviceService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

@Service
public class DeviceServiceImpl implements DeviceService {
    private final DeviceRepository deviceRepository;

    public DeviceServiceImpl(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    @Override
    public Page<EquipmentViewDTO> getEquipmentView(Pageable pageable){
        return deviceRepository.findEquipmentView(pageable);
    }
}
