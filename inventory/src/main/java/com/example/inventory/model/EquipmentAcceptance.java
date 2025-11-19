// src/main/java/com/example/inventory/model/EquipmentAcceptance.java (Đã sửa)

package com.example.inventory.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
@Table(name = "equipment_acceptance") // Đổi tên bảng
public class EquipmentAcceptance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Dùng Long

    private String name;

    // mappedBy phải khớp với tên trường tham chiếu ngược trong Device.java (acceptance)
    @JsonIgnore
    @OneToMany(mappedBy = "acceptance", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Device> devices;
}