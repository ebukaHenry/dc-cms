import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import Dashboard from "../pages/Dashboard";

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="app-container">

            <Header toggleSidebar={toggleSidebar} />
            <Sidebar
                isOpen={sidebarOpen}
                closeSidebar={closeSidebar}
            />
            <main
                className="main-content"
                onClick={closeSidebar}
            >
                <Dashboard />
                {/* <Outlet /> */}
            </main>

            <BottomNav />
        </div>

    );

}