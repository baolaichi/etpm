import EquipmentAcceptanceScreen from './components/EquipmentAcceptanceScreen';
import Sidebar from './components/Sidebar';
import './index.css'; 

function App() {
    return (
        // Dùng class 'inventory-layout' để tạo bố cục 2 cột
        <div className="inventory-layout"> 
            
            <Sidebar /> {/* 1. Thêm Sidebar */}
            
            <div className="main-content-wrapper"> {/* 2. Bọc Content lại */}
                {/* Header/Title chung cho content có thể đặt ở đây */}
                <EquipmentAcceptanceScreen />
            </div>
            
        </div>
    );
}

export default App;