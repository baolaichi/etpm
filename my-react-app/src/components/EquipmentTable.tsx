// src/components/EquipmentTable.tsx

import React from 'react';
import { type EquipmentViewDTO, type PaginatedResponse } from '../types/equipment';

// Khai báo kiểu dữ liệu cho props của Component
interface EquipmentTableProps {
    data: EquipmentViewDTO[];
    loading: boolean;
    paginationInfo: Omit<PaginatedResponse<any>, 'content'>; 
    onPageChange: (page: number) => void;
}

const EquipmentTable: React.FC<EquipmentTableProps> = ({ data, loading, paginationInfo, onPageChange }) => {
    const { number: currentPage, size, totalElements, totalPages } = paginationInfo;
    
    // Tính toán mục hiển thị
    const startItem = totalElements === 0 ? 0 : currentPage * size + 1;
    const endItem = Math.min((currentPage + 1) * size, totalElements);

    const headers = [
        "ID", "Mã Bộ phận", "Mã thiết bị", "Tên thiết bị", "Loại thiết bị",
        "Model", "Nhà cung cấp", "Trạng thái", "Ngày NT" 
    ];
    
    if (loading) return <div className="text-center p-8">Đang tải dữ liệu...</div>;
    
    return (
        <div className="equipment-table-container">
            <h3>Danh sách Thiết bị</h3>
            <div className="pagination-header">
                <div className="pagination-controls">
                    {/* Bỏ chọn size tạm thời để tập trung vào phân trang */}
                    <span>Trang **{currentPage + 1}** trên **{totalPages}**</span>
                    
                    <button onClick={() => onPageChange(0)} disabled={currentPage === 0} className="p-1 border rounded text-xs">«</button>
                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 0} className="p-1 border rounded text-xs">‹</button>
                    
                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages - 1} className="p-1 border rounded text-xs">›</button>
                    <button onClick={() => onPageChange(totalPages - 1)} disabled={currentPage >= totalPages - 1} className="p-1 border rounded text-xs">»</button>
                </div>
                
                <span className="text-sm">
                    Hiển thị **{startItem}** đến **{endItem}** trên tổng **{totalElements}** mục
                </span>
            </div>
            
            <table className="equipment-table">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}> 
                            <td>{item.id}</td> 
                            <td>{item.departmentCode}</td> 
                            <td>{item.deviceCode}</td> 
                            <td>{item.deviceName}</td> 
                            <td>{item.equipmentType}</td>
                            <td>{item.modelName}</td>
                            <td>{item.supplier}</td> 
                            <td>{item.status}</td> 
                            <td>{item.acceptanceDate.substring(0, 10)}</td> {/* Cắt lấy ngày */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EquipmentTable;