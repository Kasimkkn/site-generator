import React, { useContext, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { LayoutContext } from '@/context/LayoutContext';
import { addSpaceBetweenNumbersAndWords } from '@/utils/features';
import ContentEditor from '@/components/ContentEditor/ContentEditor';


interface SettingOptionProps {
    label: string;
    value: string;
    options: {
        label: string;
        components: React.ReactNode[];
    }[];
    onChange: (value: string) => void;
}
const SettingOption = ({ label, value, options, onChange }: SettingOptionProps) => {
    const { toggleEditModal } = useContext(LayoutContext);
    const [activeTabOpen, setActiveTabOpen] = useState(null);
    const [isContentEditorOpen, setIsContentEditorOpen] = useState(false);
    const toggeEditor = (value) => {
        setActiveTabOpen(value);
        toggleEditModal(value);
        setIsContentEditorOpen(true);
    }

    return (
        <>
            {isContentEditorOpen ? (
                <ContentEditor
                    isOpen={isContentEditorOpen}
                    onClose={() => {
                        setIsContentEditorOpen(false);
                        toggleEditModal(activeTabOpen?.toLowerCase());
                    }}
                    section={activeTabOpen?.toLowerCase()}
                />
            ) : (
                <div className="flex flex-col gap-4">
                    <div className='flex justify-between items-center'>
                        <label className="font-medium text-text">{label}</label>
                        <button
                            className='flex items-center gap-1 text-background bg-primary p-1 rounded-md text-md justify-center'
                            onClick={() => toggeEditor(label.toLowerCase())}
                        >
                            <CiEdit />
                            Edit</button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 max-h-[80vh] overflow-y-auto scollbar-hide pb-28">
                        {options.map((option) => (
                            <div
                                key={option.label}
                                role='none'
                                onClick={() => onChange(option.label)}
                                className={`cursor-pointer transition-all duration-200 border rounded-lg overflow-hidden ${value === option.label
                                    ? 'border-primary ring-2 ring-primary'
                                    : 'border-gray-200 hover:border-primary'
                                    }`}
                            >
                                <div className="p-2 bg-gray-50 border-b">
                                    <h3 className="text-sm font-medium text-text">{addSpaceBetweenNumbersAndWords(option.label)}</h3>
                                </div>
                                <div className="p-4 relative">
                                    {option.components[0]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </>
    );
};


export default SettingOption;