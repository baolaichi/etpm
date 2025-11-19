import React, { useState } from 'react';

const DEPARTMENT_OPTIONS = ['ALL', 'SMT', 'ME', 'IE'];
const EQUIPMENT_TYPE_OPTIONS = ['ALL', 'AOI', 'SPI', 'PRINTER'];

interface SearchFilterBarProps {
    currentFilters: { department: string, equipmentType: string, searchContent: string };
    onSearch: (filters: { department: string, equipmentType: string, searchContent: string }) => void;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({ currentFilters, onSearch }) => {
    const [department, setDepartment] = useState(currentFilters.department);
    const [equipmentType, setEquipmentType] = useState(currentFilters.equipmentType);
    const [searchContent, setSearchContent] = useState(currentFilters.searchContent);

    const handleSearchClick = () => {
        onSearch({ department, equipmentType, searchContent });
    };

    return (
        <div className="search-filter-bar"> {/* Sử dụng class CSS đã định nghĩa */}
            <div className="search-group">
                <label>Bộ phận</label>
                <select value={department} onChange={(e) => setDepartment(e.target.value)} className="border p-1 rounded">
                    {DEPARTMENT_OPTIONS.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                </select>
            </div>

            <div className="search-group">
                <label>Loại thiết bị chính</label>
                <select value={equipmentType} onChange={(e) => setEquipmentType(e.target.value)} className="border p-1 rounded">
                    {EQUIPMENT_TYPE_OPTIONS.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
            </div>

            <div className="search-group content-search">
                <label>Nội dung tìm kiếm</label>
                <input 
                    type="text"
                    value={searchContent}
                    onChange={(e) => setSearchContent(e.target.value)}
                    placeholder="Mã số thiết bị, tên thiết bị, model,..."
                    className="border p-1 rounded w-full"
                />
            </div>

            <button onClick={handleSearchClick} className="search-button">
                Tìm kiếm [Search]
            </button>
        </div>
    );
};

export default SearchFilterBar;