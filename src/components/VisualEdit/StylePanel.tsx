
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Type, Layout, Square, X, ChevronDown } from 'lucide-react';
import { useVisualEdit } from '@/context/VisualEditContext';

const StylePanel: React.FC = () => {
  const { selectedElement, updateStyles, setSelectedElement } = useVisualEdit();
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'layout' | 'spacing'>('colors');

  if (!selectedElement) return null;

  const handleStyleChange = (property: string, value: string) => {
    const styles = { [property]: value };
    updateStyles(selectedElement.section, selectedElement.field, styles);
    
    // Apply styles immediately to the element
    if (selectedElement.element) {
      selectedElement.element.style.setProperty(property, value);
    }
  };

  const tabs = [
    { id: 'colors', icon: Palette, label: 'Colors' },
    { id: 'typography', icon: Type, label: 'Text' },
    { id: 'layout', icon: Layout, label: 'Layout' },
    { id: 'spacing', icon: Square, label: 'Spacing' },
  ];

  const colorOptions = [
    { 
      name: 'Background', 
      property: 'background-color', 
      colors: ['#000000', '#ffffff', '#a3e635', '#ec4899', '#f97316', '#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b'] 
    },
    { 
      name: 'Text Color', 
      property: 'color', 
      colors: ['#000000', '#ffffff', '#a3e635', '#ec4899', '#f97316', '#3b82f6', '#8b5cf6', '#6b7280', '#ef4444', '#10b981'] 
    },
    { 
      name: 'Border Color', 
      property: 'border-color', 
      colors: ['#000000', '#ffffff', '#a3e635', '#ec4899', '#f97316', '#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b'] 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="fixed top-4 right-20 z-50 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h3 className="text-white font-semibold">Style Editor</h3>
        <button
          onClick={() => setSelectedElement(null)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 max-h-96 overflow-y-auto">
        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div className="space-y-6">
            {colorOptions.map((option) => (
              <div key={option.property}>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  {option.name}
                </label>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {option.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleStyleChange(option.property, color)}
                      className="w-8 h-8 rounded border border-gray-600 hover:border-blue-400 transition-colors relative group"
                      style={{ backgroundColor: color }}
                      title={color}
                    >
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {color}
                      </span>
                    </button>
                  ))}
                </div>
                <input
                  type="color"
                  onChange={(e) => handleStyleChange(option.property, e.target.value)}
                  className="w-full h-8 rounded border border-gray-600 bg-transparent cursor-pointer"
                  title="Custom color picker"
                />
              </div>
            ))}
          </div>
        )}

        {/* Typography Tab */}
        {activeTab === 'typography' && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Font Size</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="8"
                  max="72"
                  step="1"
                  onChange={(e) => handleStyleChange('font-size', `${e.target.value}px`)}
                  className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-400 w-8">px</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Font Weight</label>
              <div className="relative">
                <select
                  onChange={(e) => handleStyleChange('font-weight', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white appearance-none cursor-pointer"
                >
                  <option value="100">Thin (100)</option>
                  <option value="200">Extra Light (200)</option>
                  <option value="300">Light (300)</option>
                  <option value="400">Normal (400)</option>
                  <option value="500">Medium (500)</option>
                  <option value="600">Semibold (600)</option>
                  <option value="700">Bold (700)</option>
                  <option value="800">Extra Bold (800)</option>
                  <option value="900">Black (900)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Text Align</label>
              <div className="grid grid-cols-4 gap-1">
                {['left', 'center', 'right', 'justify'].map((align) => (
                  <button
                    key={align}
                    onClick={() => handleStyleChange('text-align', align)}
                    className="py-2 px-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded text-xs font-medium text-white transition-colors"
                  >
                    {align.charAt(0).toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Line Height</label>
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                onChange={(e) => handleStyleChange('line-height', e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Layout Tab */}
        {activeTab === 'layout' && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Display</label>
              <div className="relative">
                <select
                  onChange={(e) => handleStyleChange('display', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white appearance-none cursor-pointer"
                >
                  <option value="block">Block</option>
                  <option value="inline-block">Inline Block</option>
                  <option value="flex">Flex</option>
                  <option value="grid">Grid</option>
                  <option value="none">Hidden</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Width</label>
                <input
                  type="text"
                  placeholder="e.g., 100%, 300px"
                  onChange={(e) => handleStyleChange('width', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Height</label>
                <input
                  type="text"
                  placeholder="e.g., 200px, auto"
                  onChange={(e) => handleStyleChange('height', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Spacing Tab */}
        {activeTab === 'spacing' && (
          <div className="space-y-4">
            {['margin', 'padding'].map((spacing) => (
              <div key={spacing}>
                <label className="block text-gray-300 text-sm font-medium mb-3 capitalize">
                  {spacing}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['top', 'right', 'bottom', 'left'].map((side) => (
                    <div key={side}>
                      <label className="block text-xs text-gray-400 mb-1 capitalize">{side}</label>
                      <input
                        type="text"
                        placeholder="0px"
                        onChange={(e) => handleStyleChange(`${spacing}-${side}`, e.target.value)}
                        className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Border Radius</label>
              <input
                type="text"
                placeholder="e.g., 8px, 50%"
                onChange={(e) => handleStyleChange('border-radius', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Border Width</label>
              <input
                type="text"
                placeholder="e.g., 1px, 2px"
                onChange={(e) => handleStyleChange('border-width', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StylePanel;
