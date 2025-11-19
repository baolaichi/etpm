package com.example.inventory.model.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Lombok
@NoArgsConstructor
@AllArgsConstructor
public class EquipmentViewDTO {
    // Thông tin từ EquipmentAcceptance
    private Long id;
    private String acceptanceName; // Tên lô nghiệm thu

    // Thông tin từ Department
    private String departmentCode; // Mã Bộ phận

    // Thông tin từ Device
    private String deviceCode; // Mã thiết bị
    private String deviceName; // Tên thiết bị
    private String supplier; // Nhà cung cấp
    private String status; // Trạng thái

    // Thông tin từ DeviceDetail (Nếu bạn chỉ lấy một chi tiết)
    private String equipmentType; // Loại thiết bị
    private String modelName; // (Giả sử model nằm trong DeviceDetail)
    private String manufacturer; // Hãng sản xuất

    private BigDecimal price;
    private LocalDateTime acceptanceDate;
}