
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/settingsPanelComponents/SideBar';

const SettingsLayout: React.FC = () => {
    return (
        <main className='flex h-screen w-screen overflow-x-hidden'>
            <Sidebar />
            <div className="lg:ml-44 text-xl w-full bg-background relative">
                <Outlet />
            </div>
        </main>
    );
};

export default SettingsLayout;
