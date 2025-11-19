// src/api/equipmentApi.ts (Đã sửa đổi)

import axios from 'axios';
import { type PaginatedResponse, type EquipmentViewDTO } from '../types/equipment';

const API_URL = 'http://localhost:8080/api/view/equipment';

// Định nghĩa kiểu dữ liệu cho tham số tìm kiếm
export interface SearchParams {
    page: number;
    size: number;
    department?: string;
    equipmentType?: string;
    searchContent?: string;
}

/**
 * Lấy dữ liệu thiết bị đã phân trang và áp dụng bộ lọc.
 */
export const fetchEquipmentData = async (
    page: number, 
    size: number, 
    filters?: Omit<SearchParams, 'page' | 'size'>
): Promise<PaginatedResponse<EquipmentViewDTO>> => {
    
    // Tạo đối tượng params kết hợp phân trang và bộ lọc
    const params: any = {
        page: page,
        size: size,
        ...filters,
    };
    
    // Xóa các bộ lọc "ALL" hoặc rỗng trước khi gửi lên Backend
    if (params.department === 'ALL') delete params.department;
    if (params.equipmentType === 'ALL') delete params.equipmentType;
    if (params.searchContent === '') delete params.searchContent;

    const response = await axios.get(API_URL, {
        params: params,
    });
    return response.data;
};