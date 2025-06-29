
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Type, Layout, Spacing, X } from 'lucide-react';
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
    { id: 'spacing', icon: Spacing, label: 'Spacing' },
  ];

  const colorOptions = [
    { name: 'Background', property: 'background-color', colors: ['#000000', '#ffffff', '#a3e635', '#ec4899', '#f97316', '#3b82f6', '#8b5cf6'] },
    { name: 'Text Color', property: 'color', colors: ['#000000', '#ffffff', '#a3e635', '#ec4899', '#f97316', '#3b82f6', '#8b5cf6', '#6b7280'] },
    { name: 'Border Color', property: 'border-color', colors: ['#000000', '#ffffff', '#a3e635', '#ec4899', '#f97316', '#3b82f6', '#8b5cf6'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="fixed top-4 right-20 z-50 w-80 bg-black border-2 border-lime-400 rounded-lg shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-lime-400/30">
        <h3 className="text-lime-400 font-bold">STYLE EDITOR</h3>
        <button
          onClick={() => setSelectedElement(null)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-lime-400/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-lime-400 text-black'
                : 'text-gray-400 hover:text-lime-400'
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
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {option.name}
                </label>
                <div className="flex flex-wrap gap-2">
                  {option.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleStyleChange(option.property, color)}
                      className="w-8 h-8 rounded border-2 border-gray-600 hover:border-lime-400 transition-colors"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <input
                  type="color"
                  onChange={(e) => handleStyleChange(option.property, e.target.value)}
                  className="mt-2 w-full h-8 rounded border border-gray-600 bg-transparent"
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
              <input
                type="range"
                min="12"
                max="72"
                step="2"
                onChange={(e) => handleStyleChange('font-size', `${e.target.value}px`)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Font Weight</label>
              <select
                onChange={(e) => handleStyleChange('font-weight', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              >
                <option value="300">Light</option>
                <option value="400">Normal</option>
                <option value="500">Medium</option>
                <option value="600">Semibold</option>
                <option value="700">Bold</option>
                <option value="800">Extra Bold</option>
                <option value="900">Black</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Text Align</label>
              <div className="flex gap-2">
                {['left', 'center', 'right', 'justify'].map((align) => (
                  <button
                    key={align}
                    onClick={() => handleStyleChange('text-align', align)}
                    className="flex-1 py-2 px-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded text-xs font-medium text-white transition-colors"
                  >
                    {align.charAt(0).toUpperCase() + align.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Layout Tab */}
        {activeTab === 'layout' && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Display</label>
              <select
                onChange={(e) => handleStyleChange('display', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              >
                <option value="block">Block</option>
                <option value="inline-block">Inline Block</option>
                <option value="flex">Flex</option>
                <option value="grid">Grid</option>
                <option value="none">Hidden</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Width</label>
              <input
                type="text"
                placeholder="e.g., 100%, 300px, auto"
                onChange={(e) => handleStyleChange('width', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Height</label>
              <input
                type="text"
                placeholder="e.g., 200px, auto"
                onChange={(e) => handleStyleChange('height', e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              />
            </div>
          </div>
        )}

        {/* Spacing Tab */}
        {activeTab === 'spacing' && (
          <div className="space-y-4">
            {['padding', 'margin'].map((spacing) => (
              <div key={spacing}>
                <label className="block text-gray-300 text-sm font-medium mb-2 capitalize">
                  {spacing}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['top', 'right', 'bottom', 'left'].map((side) => (
                    <input
                      key={side}
                      type="text"
                      placeholder={`${side} (px)`}
                      onChange={(e) => handleStyleChange(`${spacing}-${side}`, e.target.value)}
                      className="bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-xs"
                    />
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
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StylePanel;
