
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Layout, Type, Image, Grid, Users, Star, Phone } from 'lucide-react';

interface ComponentSelectorProps {
  isVisible: boolean;
  onClose: () => void;
  onAddComponent: (type: string) => void;
}

const ComponentSelector: React.FC<ComponentSelectorProps> = ({
  isVisible,
  onClose,
  onAddComponent
}) => {
  const components = [
    { type: 'hero', icon: Layout, label: 'HERO', color: 'lime-400' },
    { type: 'about', icon: Type, label: 'ABOUT', color: 'pink-500' },
    { type: 'service', icon: Grid, label: 'SERVICES', color: 'orange-500' },
    { type: 'projects', icon: Image, label: 'PROJECTS', color: 'lime-400' },
    { type: 'teams', icon: Users, label: 'TEAM', color: 'pink-500' },
    { type: 'reviews', icon: Star, label: 'REVIEWS', color: 'orange-500' },
    { type: 'contact', icon: Phone, label: 'CONTACT', color: 'lime-400' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Component Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-black border-4 border-lime-400 p-6 rounded-lg max-w-md">
              <h3 className="text-2xl font-black text-lime-400 mb-6 text-center">
                ADD COMPONENT
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {components.map((component, index) => {
                  const Icon = component.icon;
                  return (
                    <motion.button
                      key={component.type}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        onAddComponent(component.type);
                        onClose();
                      }}
                      className={`p-4 bg-gray-900 border-2 border-gray-700 hover:border-${component.color} rounded-lg transition-all duration-300 group`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`w-8 h-8 text-${component.color} mx-auto mb-2`} />
                      <div className={`text-xs font-bold text-gray-300 group-hover:text-${component.color}`}>
                        {component.label}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComponentSelector;
