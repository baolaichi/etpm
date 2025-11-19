// src/main/java/com/example/inventory/model/DeviceDetail.java (Đã sửa)

package com.example.inventory.model;

import jakarta.persistence.*;
import lombok.Data; // Thêm Lombok @Data để tránh code boilerplate

@Entity
@Data
@Table(name = "device_detail")
public class DeviceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Dùng Long

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "device_id")
    private Device device;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;

    @Column(name = "create_by", nullable = true)
    private String createBy;

    @Column(name = "device_type", nullable = true)
    private String type;

    @Column(name = "device_brand", nullable = true)
    private String brand;
}