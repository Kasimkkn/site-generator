
import React, { useContext, useState } from 'react';
import { LayoutContext } from '@/context/LayoutContext';
import { InlineEditProvider } from '@/context/InlineEditContext';
import SideBar from '@/components/settingsPanelComponents/SideBar';
import Settings from '@/pages/settings/Settings';
import FloatingToolbar from '@/components/InlineEdit/FloatingToolbar';
import ComponentSelector from '@/components/InlineEdit/ComponentSelector';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const SettingsLayout = () => {
    const { content, setContent, activePage } = useContext(LayoutContext);
    const [showComponentSelector, setShowComponentSelector] = useState(false);

    const handleUpdateContent = (section: string, field: string, value: any) => {
        setContent((prevContent: any[]) =>
            prevContent.map((pageData: any) =>
                pageData.page.toLowerCase() === activePage.toLowerCase()
                    ? {
                        ...pageData,
                        content: {
                            ...pageData.content,
                            [section]: {
                                ...pageData.content[section],
                                [field]: value
                            }
                        }
                    }
                    : pageData
            )
        );
    };

    const handleAddComponent = (type: string) => {
        console.log('Adding component:', type);
        // This would implement the logic to add new components
    };

    return (
        <InlineEditProvider onUpdateContent={handleUpdateContent}>
            <div className="flex h-screen bg-black">
                {/* Compact Sidebar */}
                <div className="w-16 border-r border-lime-400/30">
                    <SideBar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 relative">
                    <Settings />
                    
                    {/* Floating Add Component Button */}
                    <motion.button
                        className="fixed bottom-6 left-20 w-12 h-12 bg-lime-400 text-black rounded-full shadow-lg z-40 flex items-center justify-center font-black hover:bg-pink-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowComponentSelector(true)}
                    >
                        <Plus className="w-6 h-6" />
                    </motion.button>

                    {/* Floating Toolbar */}
                    <FloatingToolbar />

                    {/* Component Selector Modal */}
                    <ComponentSelector
                        isVisible={showComponentSelector}
                        onClose={() => setShowComponentSelector(false)}
                        onAddComponent={handleAddComponent}
                    />
                </div>
            </div>
        </InlineEditProvider>
    );
};

export default SettingsLayout;
