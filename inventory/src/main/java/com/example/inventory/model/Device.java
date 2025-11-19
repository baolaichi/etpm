// src/main/java/com/example/inventory/model/Device.java (Đã sửa lỗi)

package com.example.inventory.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Data
@Table(name = "device")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "device_id") // ID nên là NON-NULLABLE
    private Long id; // Dùng Long thay vì long

    @Column(name = "device_name")
    private String name;

    // ĐÃ SỬA: XÓA @Column(name = "department_id") vì nó không thuộc Device mà thuộc DeviceDetail
    @OneToMany(mappedBy = "device", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<DeviceDetail> details;

    @Column(name = "device_code")
    private String code;

    @Column(name = "device_status")
    private boolean status;

    // ĐÃ SỬA: CHỈ CHỌN MỘT TRƯỜNG CHO MỐI QUAN HỆ VỚI EquipmentAcceptance
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "acceptance_id") // Khóa ngoại trỏ đến EquipmentAcceptance.id
    private EquipmentAcceptance acceptance;

    @Column(name = "supplier", nullable = true)
    private String supplier;

    private LocalDateTime acceptanceDate;
    private BigDecimal price;
    private LocalDateTime dateCreated;

    @PrePersist
    protected void onCreate() {
        this.dateCreated = LocalDateTime.now();
    }
}