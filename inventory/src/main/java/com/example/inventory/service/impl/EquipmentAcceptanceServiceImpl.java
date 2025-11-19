package com.example.inventory.service.impl;

import com.example.inventory.model.EquipmentAcceptance;
import com.example.inventory.repository.EquipmentAcceptanceRepository;
import com.example.inventory.service.EquipmentAcceptanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentAcceptanceServiceImpl implements EquipmentAcceptanceService {

    private final EquipmentAcceptanceRepository acceptanceRepository;

    public EquipmentAcceptanceServiceImpl(EquipmentAcceptanceRepository acceptanceRepository) {
        this.acceptanceRepository = acceptanceRepository;
    }

    @Override
    public List<EquipmentAcceptance> findAllEquipment() {
        return acceptanceRepository.findAll();
    }
}