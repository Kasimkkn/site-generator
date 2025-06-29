
import React, { useContext, useState } from 'react';
import { LayoutContext } from '@/context/LayoutContext';
import SideBar from '@/components/settingsPanelComponents/SideBar';
import Settings from '@/pages/settings/Settings';
import VisualEditSettings from '@/pages/settings/VisualEditSettings';
import { Eye, Settings as SettingsIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const SettingsLayout = () => {
    const [viewMode, setViewMode] = useState<'settings' | 'visual'>('visual');

    return (
        <div className="relative h-screen bg-black">
            {/* View Mode Toggle */}
            <motion.div
                className="fixed top-4 left-20 z-50 flex bg-black border-2 border-lime-400 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => setViewMode('visual')}
                    className={`px-4 py-2 font-bold text-sm transition-all ${
                        viewMode === 'visual'
                            ? 'bg-lime-400 text-black'
                            : 'bg-transparent text-lime-400 hover:bg-lime-400/10'
                    }`}
                >
                    <Eye className="w-4 h-4 inline mr-2" />
                    VISUAL
                </button>
                <button
                    onClick={() => setViewMode('settings')}
                    className={`px-4 py-2 font-bold text-sm transition-all ${
                        viewMode === 'settings'
                            ? 'bg-lime-400 text-black'
                            : 'bg-transparent text-lime-400 hover:bg-lime-400/10'
                    }`}
                >
                    <SettingsIcon className="w-4 h-4 inline mr-2" />
                    SETTINGS
                </button>
            </motion.div>

            {/* Content */}
            {viewMode === 'visual' ? (
                <VisualEditSettings />
            ) : (
                <div className="flex h-screen bg-black">
                    <div className="w-16 border-r border-lime-400/30">
                        <SideBar />
                    </div>
                    <div className="flex-1 relative">
                        <Settings />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsLayout;
