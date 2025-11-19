// src/screens/EquipmentAcceptanceScreen.tsx

import React, { useState, useEffect } from 'react';
// Đảm bảo đường dẫn này đúng: src/screens/ -> src/api/
import { fetchEquipmentData, type SearchParams } from '../api/equipmentApi'; // Cần import SearchParams
import EquipmentTable from '../components/EquipmentTable';
import SearchFilterBar from '../components/SearchFilterBar'; // <-- IMPORT COMPONENT TÌM KIẾM
import { type EquipmentViewDTO, type PaginatedResponse } from '../types/equipment';

// Định nghĩa kiểu dữ liệu cho bộ lọc (trích xuất từ SearchParams)
interface Filters {
    department: string;
    equipmentType: string;
    searchContent: string;
}

const EquipmentAcceptanceScreen: React.FC = () => {
    const [data, setData] = useState<EquipmentViewDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0); 
    const [size, setSize] = useState<number>(10); 
    
    // 1. TRẠNG THÁI MỚI CHO BỘ LỌC
    const [filters, setFilters] = useState<Filters>({
        department: 'ALL',
        equipmentType: 'ALL',
        searchContent: '',
    });

    const [paginationInfo, setPaginationInfo] = useState<Omit<PaginatedResponse<any>, 'content'>>({
        number: 0, size: 10, totalPages: 0, totalElements: 0, first: true, last: true, empty: true,
        numberOfElements: 0, 
    } as any);

    // 2. useEffect gọi loadData khi page HOẶC filters thay đổi
    useEffect(() => {
        loadData(page, size, filters);
    }, [page, size, filters]); 

    // 3. Cập nhật loadData để nhận tham số filters
    const loadData = async (currentPage: number, currentSize: number, currentFilters: Filters) => {
        setLoading(true);
        try {
            // Chuẩn bị tham số cho API
            const searchParams: SearchParams = {
                page: currentPage,
                size: currentSize,
                department: currentFilters.department,
                equipmentType: currentFilters.equipmentType,
                searchContent: currentFilters.searchContent,
            };

            const result = await fetchEquipmentData(currentPage, currentSize, currentFilters); 
            
            setData(result.content);
            const { content, ...info } = result;
            
            // Đảm bảo thông tin phân trang được cập nhật đúng
            setPaginationInfo(info);
            setLoading(false);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu thiết bị:", error);
            setLoading(false);
            setData([]);
        }
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };
    
    // 4. HÀM XỬ LÝ KHI NHẤN NÚT TÌM KIẾM
    const handleSearch = (newFilters: Filters) => {
        setPage(0); // Luôn reset về trang 0 khi tìm kiếm mới
        setFilters(newFilters);
    };

    return (
        <div className="acceptance-screen-container p-4">
            <h1>Quản lý Nghiệm thu Thiết bị</h1>
            
            {/* RENDER COMPONENT SEARCH FILTER BAR */}
            <SearchFilterBar 
                currentFilters={filters}
                onSearch={handleSearch}
            />
            
            {/* TRUYỀN DỮ LIỆU ĐỂ HIỂN THỊ BẢNG */}
            <EquipmentTable
                data={data}
                loading={loading}
                paginationInfo={paginationInfo}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default EquipmentAcceptanceScreen;