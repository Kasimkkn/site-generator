
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedElement {
  id: string;
  type: 'text' | 'image' | 'button' | 'section';
  section: string;
  field: string;
  value: any;
  bounds?: DOMRect;
  element?: HTMLElement;
}

interface VisualEditContextType {
  isVisualEditMode: boolean;
  toggleVisualEditMode: () => void;
  selectedElement: SelectedElement | null;
  setSelectedElement: (element: SelectedElement | null) => void;
  hoveredElement: string | null;
  setHoveredElement: (id: string | null) => void;
  updateContent: (section: string, field: string, value: any) => void;
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

  const toggleVisualEditMode = () => {
    setIsVisualEditMode(!isVisualEditMode);
    setSelectedElement(null);
    setHoveredElement(null);
  };

  const updateContent = (section: string, field: string, value: any) => {
    onUpdateContent(section, field, value);
    setSelectedElement(null);
  };

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
      }}
    >
      {children}
    </VisualEditContext.Provider>
  );
};
