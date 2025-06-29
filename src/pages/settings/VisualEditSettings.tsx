
import React, { useContext } from 'react';
import { LayoutContext } from '@/context/LayoutContext';
import { VisualEditProvider } from '@/context/VisualEditContext';
import VisualEditToolbar from '@/components/VisualEdit/VisualEditToolbar';
import VisualEditHero from '@/components/hero/VisualEditHero';
import VisualEditAbout from '@/components/about/VisualEditAbout';
import VisualEditService from '@/components/service/VisualEditService';
import SideBar from '@/components/settingsPanelComponents/SideBar';
import { motion } from 'framer-motion';

const VisualEditSettings: React.FC = () => {
    const { content, setContent, activePage } = useContext(LayoutContext);

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

    const normalizedPage = activePage?.toLowerCase();
    const activePageContent = content.find(
        (pageData) => pageData.page.toLowerCase() === normalizedPage
    )?.content || {};

    return (
        <VisualEditProvider onUpdateContent={handleUpdateContent}>
            <div className="flex h-screen bg-black">
                {/* Compact Sidebar */}
                <div className="w-16 border-r border-lime-400/30">
                    <SideBar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 relative overflow-auto">
                    {/* Visual Edit Toolbar */}
                    <VisualEditToolbar />
                    
                    {/* Page Content */}
                    <div className="relative">
                        {/* Hero Section */}
                        {activePageContent.hero && (
                            <VisualEditHero data={activePageContent.hero} />
                        )}

                        {/* About Section */}
                        {activePageContent.about && (
                            <VisualEditAbout data={activePageContent.about} />
                        )}

                        {/* Service Section */}
                        {activePageContent.service && (
                            <VisualEditService data={activePageContent.service} />
                        )}

                        {/* Placeholder for no content */}
                        {!activePageContent.hero && !activePageContent.about && !activePageContent.service && (
                            <div className="min-h-screen flex items-center justify-center">
                                <motion.div 
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <h2 className="text-4xl font-black text-lime-400 mb-4">
                                        START BUILDING
                                    </h2>
                                    <p className="text-gray-400 text-lg mb-6">
                                        Enable visual edit mode to start editing
                                    </p>
                                    <div className="text-gray-500 text-sm">
                                        Click the eye icon in the top right to enable visual editing
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </VisualEditProvider>
    );
};

export default VisualEditSettings;
