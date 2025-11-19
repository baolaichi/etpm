// src/components/Sidebar.tsx
import React, { useState } from 'react';

// Dữ liệu menu (giả lập các trang khác)
const menuItems = [
    { id: 'acceptance', name: 'Thiết Bị Chờ Nghiệm Thu', path: '/' },
    { id: 'general_inventory', name: 'Quản Lý Kho Chung', path: '/inventory' },
    { id: 'transfer', name: 'Điều Chuyển Thiết Bị', path: '/transfer' },
    { id: 'history', name: 'Lịch Sử Hoạt Động', path: '/history' },
];

const Sidebar: React.FC = () => {
    // State để đánh dấu mục đang được chọn
    const [activeItem, setActiveItem] = useState('acceptance');

    const handleItemClick = (id: string, path: string) => {
        setActiveItem(id);
        // Trong dự án thực tế, bạn sẽ dùng React Router để chuyển trang ở đây:
        // navigate(path); 
        
        // Hiện tại chỉ log ra console
        console.log(`Đang chuyển đến: ${path}`);
    };

    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Hệ Thống Quản Lý</h3>
            <div className="sidebar-menu">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
                        onClick={() => handleItemClick(item.id, item.path)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;