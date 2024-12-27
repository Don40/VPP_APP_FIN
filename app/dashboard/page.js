"use client"

// pages/index.js
import { useState } from "react";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import Notifications from "@/components/Notifications";
import Services from "@/components/Services";
import Events from "@/components/Events";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeContent, setActiveContent] = useState('prayer'); // Default content

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = (item) => {
        setActiveContent(item); // Set the clicked item as active content
    };

    const renderContent = () => {
        switch (activeContent) {
            // case 'prayer':
            //     return <PrayerRequests />;
            case 'notifications':
                return <Notifications />;
            case 'services':
                return <Services />;
            case 'events':
                return <Events />;
            default:
                return <MainContent />; // Fallback content
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar
                toggleSidebar={toggleSidebar}
                isOpen={isOpen}
                onMenuItemClick={handleMenuItemClick}
                activeContent={activeContent}  // Pass the active menu
            />
            <div className="flex flex-col flex-1">
                <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
                <main className="flex-1 bg-gray-100 p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
