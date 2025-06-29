import React, { useContext } from 'react';
import { LayoutContext } from '@/context/LayoutContext';
import { useInlineEdit } from '@/context/InlineEditContext';
import InlineHero from '@/components/hero/InlineHero';
import { motion } from 'framer-motion';

const SimpleSettings: React.FC = () => {
    const { content, activePage } = useContext(LayoutContext);
    const { isEditMode } = useInlineEdit();

    const normalizedPage = activePage?.toLowerCase();
    const activePageContent = content.find(
        (pageData) => pageData.page.toLowerCase() === normalizedPage
    )?.content || {};

    return (
        <div className="min-h-screen bg-black relative">
            {/* Edit Mode Overlay */}
            {isEditMode && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-lime-400/5 pointer-events-none z-10"
                />
            )}

            {/* Page Content */}
            <div className="relative z-20">
                {/* Hero Section */}
                {activePageContent.hero && (
                    <InlineHero data={activePageContent.hero} />
                )}

                {/* Other sections would be added here with inline editing */}
                
                {/* Placeholder for additional sections */}
                {!activePageContent.hero && (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-4xl font-black text-lime-400 mb-4">
                                START BUILDING
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Click the + button to add components
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimpleSettings;
