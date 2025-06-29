
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit, Check, X, Image, Type, AlignLeft } from 'lucide-react';
import { useInlineEdit } from '@/context/InlineEditContext';

const FloatingToolbar: React.FC = () => {
  const { isEditMode, setEditMode, activeElement, setActiveElement } = useInlineEdit();

  if (!isEditMode) return null;

  const toggleEditMode = () => {
    setEditMode(!isEditMode);
    setActiveElement(null);
  };

  return (
    <>
      {/* Main Toggle Button */}
      <motion.div
        className="fixed top-20 right-4 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <button
          onClick={toggleEditMode}
          className={`w-12 h-12 rounded-full font-black text-sm transition-all duration-300 ${
            isEditMode 
              ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30' 
              : 'bg-lime-400 text-black hover:bg-pink-500 hover:text-white'
          }`}
        >
          {isEditMode ? <X className="w-5 h-5 mx-auto" /> : <Edit className="w-5 h-5 mx-auto" />}
        </button>
      </motion.div>

      {/* Edit Mode Indicator */}
      <AnimatePresence>
        {isEditMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-black border-2 border-lime-400 px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                <span className="text-lime-400 font-bold text-sm">EDIT MODE ACTIVE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Actions Panel */}
      <AnimatePresence>
        {isEditMode && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-36 right-4 z-40"
          >
            <div className="bg-black border-2 border-gray-700 rounded-lg p-2 space-y-2">
              <button
                className="w-10 h-10 bg-gray-800 hover:bg-lime-400 hover:text-black text-gray-300 rounded flex items-center justify-center transition-all"
                title="Edit Text"
              >
                <Type className="w-4 h-4" />
              </button>
              <button
                className="w-10 h-10 bg-gray-800 hover:bg-lime-400 hover:text-black text-gray-300 rounded flex items-center justify-center transition-all"
                title="Edit Content"
              >
                <AlignLeft className="w-4 h-4" />
              </button>
              <button
                className="w-10 h-10 bg-gray-800 hover:bg-lime-400 hover:text-black text-gray-300 rounded flex items-center justify-center transition-all"
                title="Edit Image"
              >
                <Image className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingToolbar;
