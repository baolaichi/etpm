package com.example.inventory.repository;


import com.example.inventory.model.Device;
import com.example.inventory.model.dto.EquipmentViewDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DeviceRepository extends JpaRepository<Device, Long> {

    @Query(value = """
        SELECT new com.example.inventory.model.dto.EquipmentViewDTO(
            d.acceptance.id,
            d.acceptance.name,
            det.department.code,
            d.code,
            d.name,
            d.supplier,
            CASE WHEN d.status = true THEN 'Active' ELSE 'Inactive' END,
            det.type,
            det.brand,
            det.createBy,
            d.price,
            d.acceptanceDate
        )
        FROM Device d
        JOIN d.details det
    """, countQuery = """
        SELECT COUNT(d)
        FROM Device d JOIN d.details det
    """)
    Page<EquipmentViewDTO> findEquipmentView(Pageable pageable);
}