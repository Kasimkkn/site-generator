
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInlineEdit } from '@/context/InlineEditContext';

interface EditableTextProps {
  value: string;
  section: string;
  field: string;
  type?: 'text' | 'textarea';
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

const EditableText: React.FC<EditableTextProps> = ({
  value,
  section,
  field,
  type = 'text',
  className = '',
  placeholder = 'Click to edit...',
  children
}) => {
  const { isEditMode, activeElement, setActiveElement, updateContent } = useInlineEdit();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const elementId = `${section}-${field}`;
  const isActive = activeElement?.id === elementId;

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
    if (!isEditMode) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = elementRef.current?.getBoundingClientRect();
    setActiveElement({
      id: elementId,
      section,
      field,
      value,
      type,
      rect
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    updateContent(section, field, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
    setActiveElement(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && type === 'text') {
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
      className={`relative ${isEditMode ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
    >
      {/* Edit Mode Indicator */}
      {isEditMode && !isEditing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 border-2 border-dashed border-lime-400/50 rounded pointer-events-none"
        />
      )}

      {/* Hover Overlay */}
      {isEditMode && !isEditing && (
        <motion.div
          className="absolute inset-0 bg-lime-400/10 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
          whileHover={{ opacity: 1 }}
        />
      )}

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative"
          >
            {type === 'textarea' ? (
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
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children || (
              <span className={!value ? 'text-gray-500 italic' : ''}>
                {value || placeholder}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EditableText;
