package com.example.inventory.controller;

import com.example.inventory.model.EquipmentAcceptance;
import com.example.inventory.service.EquipmentAcceptanceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EquipmentAcceptanceController {
    private final EquipmentAcceptanceService acceptanceService;

    public EquipmentAcceptanceController(EquipmentAcceptanceService acceptanceService) {
        this.acceptanceService = acceptanceService;
    }

    @GetMapping("/equipment")
    public List<EquipmentAcceptance> getAllEquipment(){
        return acceptanceService.findAllEquipment();
    }
}
