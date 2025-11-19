// src/types/equipment.ts

// Định nghĩa DTO
export interface EquipmentViewDTO {
    id: number;
    acceptanceName: string;
    departmentCode: string;
    deviceCode: string;
    deviceName: string;
    supplier: string;
    status: string;
    equipmentType: string;
    modelName: string;
    manufacturer: string;
    price: number; // Đã chuyển BigDecimal sang number cho đơn giản
    acceptanceDate: string; // Đã chuyển LocalDateTime sang string
}

// Cấu trúc phân trang Spring Data Page
export interface PaginatedResponse<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number; // Current page number (0-indexed)
    first: boolean;
    last: boolean;
    empty: boolean;
    numberOfElements: number;
}