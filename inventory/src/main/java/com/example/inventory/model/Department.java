// src/main/java/com/example/inventory/model/Department.java (Đã sửa ID sang Long)

package com.example.inventory.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Set;

@Entity
@Data
@Table(name = "department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "department_id")
    private Long id; // Dùng Long

    @Column(name = "department_name")
    private String name;
    @Column(name = "department_code")
    private String code;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<DeviceDetail> details;
}