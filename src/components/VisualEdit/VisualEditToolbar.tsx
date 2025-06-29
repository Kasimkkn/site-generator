
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Settings, Type, Image, MousePointer } from 'lucide-react';
import { useVisualEdit } from '@/context/VisualEditContext';

const VisualEditToolbar: React.FC = () => {
  const { isVisualEditMode, toggleVisualEditMode, selectedElement } = useVisualEdit();

  return (
    <>
      {/* Visual Edit Toggle Button */}
      <motion.button
        className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full font-black text-sm transition-all duration-300 ${
          isVisualEditMode 
            ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30' 
            : 'bg-lime-400 text-black hover:bg-pink-500 hover:text-white'
        }`}
        onClick={toggleVisualEditMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isVisualEditMode ? <EyeOff className="w-5 h-5 mx-auto" /> : <Eye className="w-5 h-5 mx-auto" />}
      </motion.button>

      {/* Visual Edit Mode Indicator */}
      {isVisualEditMode && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-black border-2 border-lime-400 px-4 py-2 rounded-lg flex items-center gap-2">
            <MousePointer className="w-4 h-4 text-lime-400 animate-pulse" />
            <span className="text-lime-400 font-bold text-sm">VISUAL EDIT MODE</span>
            <span className="text-gray-400 text-xs">Click elements to edit</span>
          </div>
        </motion.div>
      )}

      {/* Element Info Panel */}
      {isVisualEditMode && selectedElement && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed top-20 right-4 z-40 bg-black border-2 border-lime-400 rounded-lg p-4 min-w-64"
        >
          <div className="flex items-center gap-2 mb-3">
            {selectedElement.type === 'text' && <Type className="w-4 h-4 text-lime-400" />}
            {selectedElement.type === 'image' && <Image className="w-4 h-4 text-lime-400" />}
            <span className="text-lime-400 font-bold text-sm uppercase">
              {selectedElement.type}
            </span>
          </div>
          
          <div className="text-gray-400 text-xs mb-2">
            {selectedElement.section}.{selectedElement.field}
          </div>
          
          <div className="text-white text-sm">
            Click outside to deselect
          </div>
        </motion.div>
      )}
    </>
  );
};

export default VisualEditToolbar;
