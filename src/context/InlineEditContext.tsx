
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditableElement {
  id: string;
  section: string;
  field: string;
  value: string;
  type: 'text' | 'textarea' | 'image';
  rect?: DOMRect;
}

interface InlineEditContextType {
  isEditMode: boolean;
  setEditMode: (mode: boolean) => void;
  activeElement: EditableElement | null;
  setActiveElement: (element: EditableElement | null) => void;
  updateContent: (section: string, field: string, value: any) => void;
}

const InlineEditContext = createContext<InlineEditContextType | null>(null);

export const useInlineEdit = () => {
  const context = useContext(InlineEditContext);
  if (!context) {
    throw new Error('useInlineEdit must be used within InlineEditProvider');
  }
  return context;
};

interface InlineEditProviderProps {
  children: ReactNode;
  onUpdateContent: (section: string, field: string, value: any) => void;
}

export const InlineEditProvider: React.FC<InlineEditProviderProps> = ({ 
  children, 
  onUpdateContent 
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [activeElement, setActiveElement] = useState<EditableElement | null>(null);

  const updateContent = (section: string, field: string, value: any) => {
    onUpdateContent(section, field, value);
    setActiveElement(null);
  };

  return (
    <InlineEditContext.Provider
      value={{
        isEditMode,
        setEditMode,
        activeElement,
        setActiveElement,
        updateContent,
      }}
    >
      {children}
    </InlineEditContext.Provider>
  );
};
