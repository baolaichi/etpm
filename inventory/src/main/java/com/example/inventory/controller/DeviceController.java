package com.example.inventory.controller;

import com.example.inventory.model.dto.EquipmentViewDTO;
import com.example.inventory.service.DeviceService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/api/view/equipment")
@CrossOrigin(origins = "http://localhost:5173")
public class DeviceController {
    private final DeviceService deviceService;

    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping
    public ResponseEntity<Page<EquipmentViewDTO>> getEquipmentView(Pageable pageable) {
        Page<EquipmentViewDTO> data = deviceService.getEquipmentView(pageable);
        return ResponseEntity.ok(data);
    }
}
