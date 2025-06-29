
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useVisualEdit } from '@/context/VisualEditContext';

interface EditableElementProps {
  section: string;
  field: string;
  type: 'text' | 'image' | 'button' | 'section';
  value: any;
  children: React.ReactNode;
  className?: string;
}

const EditableElement: React.FC<EditableElementProps> = ({
  section,
  field,
  type,
  value,
  children,
  className = ''
}) => {
  const { 
    isVisualEditMode, 
    selectedElement, 
    setSelectedElement, 
    hoveredElement, 
    setHoveredElement,
    updateContent 
  } = useVisualEdit();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const elementRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const elementId = `${section}-${field}`;
  const isSelected = selectedElement?.id === elementId;
  const isHovered = hoveredElement === elementId;

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleClick = (e: React.MouseEvent) => {
    if (!isVisualEditMode) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const bounds = elementRef.current?.getBoundingClientRect();
    setSelectedElement({
      id: elementId,
      type,
      section,
      field,
      value,
      bounds,
      element: elementRef.current || undefined
    });

    if (type === 'text') {
      setIsEditing(true);
    }
  };

  const handleMouseEnter = () => {
    if (isVisualEditMode && !isSelected) {
      setHoveredElement(elementId);
    }
  };

  const handleMouseLeave = () => {
    if (isVisualEditMode) {
      setHoveredElement(null);
    }
  };

  const handleSave = () => {
    if (editValue !== value) {
      updateContent(section, field, editValue);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
    setSelectedElement(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div
      ref={elementRef}
      className={`relative ${className} ${isVisualEditMode ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Visual Edit Overlays */}
      {isVisualEditMode && (
        <>
          {/* Hover Overlay */}
          {isHovered && !isSelected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-lime-400/20 border-2 border-lime-400/50 rounded pointer-events-none z-10"
            />
          )}
          
          {/* Selected Overlay */}
          {isSelected && !isEditing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-pink-500/20 border-2 border-pink-500 rounded pointer-events-none z-10"
            />
          )}
        </>
      )}

      {/* Inline Editor */}
      {isEditing && type === 'text' ? (
        <div className="relative z-20">
          {field.includes('Description') || field.includes('content') ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              className="w-full bg-black border-2 border-lime-400 text-white p-2 rounded resize-none focus:outline-none focus:border-pink-500"
              rows={3}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              className="w-full bg-black border-2 border-lime-400 text-white p-2 rounded focus:outline-none focus:border-pink-500"
            />
          )}
        </div>
      ) : (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default EditableElement;
