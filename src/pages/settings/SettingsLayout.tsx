
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/settingsPanelComponents/SideBar';

const SettingsLayout: React.FC = () => {
    return (
        <main className='flex h-screen w-screen overflow-x-hidden bg-black'>
            <Sidebar />
            <div className="lg:ml-20 text-xl w-full bg-black text-lime-400 relative">
                <Outlet />
            </div>
        </main>
    );
};

export default SettingsLayout;
