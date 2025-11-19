package com.example.inventory.repository;

import com.example.inventory.model.EquipmentAcceptance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentAcceptanceRepository
        extends JpaRepository<EquipmentAcceptance, Long> {

}
