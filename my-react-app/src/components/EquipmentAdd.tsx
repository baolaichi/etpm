import React from 'react';
import { Button } from '@mui/material';

// Bạn có thể tùy chỉnh kiểu dáng thông qua SX prop (System Properties)
const buttonStyle = {
    // Màu nền: Thay vì 'primary' mặc định, dùng màu xanh lá cây cho hành động "Thêm mới"
    backgroundColor: '#2e85ccff', 
    '&:hover': {
        backgroundColor: '#2788aeff', // Màu tối hơn khi hover
    },
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '20px', 
    padding: '10px 6px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    textTransform: 'none', 
};

export default function EquipmentAdd() {
    return (
        <div className="flex justify-end mb-4">
            <Button 
                variant="contained" 
                // Sử dụng 'sx' prop cho tùy chỉnh styling
                sx={buttonStyle}
            >
                + Thêm Thiết bị Mới
            </Button>
        </div>
    );
}