
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface SelectedElement {
  id: string;
  type: 'text' | 'image' | 'button' | 'section';
  section: string;
  field: string;
  value: any;
  bounds?: DOMRect;
  element?: HTMLElement;
  styles?: Record<string, string>;
}

interface VisualEditContextType {
  isVisualEditMode: boolean;
  toggleVisualEditMode: () => void;
  selectedElement: SelectedElement | null;
  setSelectedElement: (element: SelectedElement | null) => void;
  hoveredElement: string | null;
  setHoveredElement: (id: string | null) => void;
  updateContent: (section: string, field: string, value: any) => void;
  updateStyles: (section: string, field: string, styles: Record<string, string>) => void;
  customStyles: Record<string, Record<string, Record<string, string>>>;
  getElementStyles: (section: string, field: string) => Record<string, string>;
}

const VisualEditContext = createContext<VisualEditContextType | null>(null);

export const useVisualEdit = () => {
  const context = useContext(VisualEditContext);
  if (!context) {
    throw new Error('useVisualEdit must be used within VisualEditProvider');
  }
  return context;
};

interface VisualEditProviderProps {
  children: ReactNode;
  onUpdateContent: (section: string, field: string, value: any) => void;
}

export const VisualEditProvider: React.FC<VisualEditProviderProps> = ({ 
  children, 
  onUpdateContent 
}) => {
  const [isVisualEditMode, setIsVisualEditMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [customStyles, setCustomStyles] = useState<Record<string, Record<string, Record<string, string>>>>({});

  const toggleVisualEditMode = useCallback(() => {
    setIsVisualEditMode(!isVisualEditMode);
    setSelectedElement(null);
    setHoveredElement(null);
  }, [isVisualEditMode]);

  const updateContent = useCallback((section: string, field: string, value: any) => {
    onUpdateContent(section, field, value);
    // Force re-render by updating selected element
    if (selectedElement) {
      setSelectedElement({
        ...selectedElement,
        value
      });
    }
  }, [onUpdateContent, selectedElement]);

  const updateStyles = useCallback((section: string, field: string, styles: Record<string, string>) => {
    setCustomStyles(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: {
          ...prev[section]?.[field],
          ...styles
        }
      }
    }));

    // Apply styles to all matching elements in the DOM
    const elementId = `${section}-${field}`;
    const elements = document.querySelectorAll(`[data-editable-id="${elementId}"]`);
    elements.forEach(element => {
      Object.entries(styles).forEach(([property, value]) => {
        (element as HTMLElement).style.setProperty(property, value);
      });
    });
  }, []);

  const getElementStyles = useCallback((section: string, field: string) => {
    return customStyles[section]?.[field] || {};
  }, [customStyles]);

  return (
    <VisualEditContext.Provider
      value={{
        isVisualEditMode,
        toggleVisualEditMode,
        selectedElement,
        setSelectedElement,
        hoveredElement,
        setHoveredElement,
        updateContent,
        updateStyles,
        customStyles,
        getElementStyles,
      }}
    >
      {children}
    </VisualEditContext.Provider>
  );
};
