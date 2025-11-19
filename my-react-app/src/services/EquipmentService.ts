// src/api/equipmentApi.ts

import axios from 'axios';
import { type PaginatedResponse, type EquipmentViewDTO } from '../types/equipment';

const API_URL = 'http://localhost:8080/api/view/equipment';

/**
 * Hàm gọi API lấy danh sách thiết bị đã phân trang
 * @param page Số trang (bắt đầu từ 0)
 * @param size Số lượng mục trên mỗi trang
 */
export const getEquipmentView = (page: number, size: number): Promise<PaginatedResponse<EquipmentViewDTO>> => {
    return axios.get(API_URL, {
        params: {
            page: page,
            size: size
        }
    }).then(response => response.data);
};