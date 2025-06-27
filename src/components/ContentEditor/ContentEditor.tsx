
import React, { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import { LayoutContext } from "../../context/LayoutContext";
import CardsForm from "./CardsForm";
import GeneralForm from "./GeneralForm";
import toast from "react-hot-toast";
import { ContentData } from './types';

interface ContentEditorProps {
    isOpen: boolean;
    onClose: () => void;
    section: string;
}

interface NestedUpdateParams {
    obj: any;
    path: string;
    value: any;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ isOpen, onClose, section }) => {
    const { content, setContent, activePage } = useContext(LayoutContext);

    const activePageData = content.find((pageData: any) => pageData.page.toLowerCase() === activePage.toLowerCase());
    const activePageContent: ContentData = activePageData ? activePageData.content : {};
    const [tempContent, setTempContent] = useState<ContentData>(activePageContent);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleNestedFieldUpdate = ({ obj, path, value }: NestedUpdateParams): any => {
        if (!path) {
            toast.error("Error: Invalid path for nested update");
            return obj;
        }
        const pathArray = path.split(".");
        const lastField = pathArray.pop()!;

        let current = obj;
        for (const field of pathArray) {
            if (field.includes("[") && field.includes("]")) {
                const arrayField = field.split("[")[0];
                const index = parseInt(field.split("[")[1].split("]")[0], 10);
                if (!current[arrayField]) current[arrayField] = [];
                if (!current[arrayField][index]) current[arrayField][index] = {};
                current = current[arrayField][index];
            } else {
                if (!current[field]) current[field] = {};
                current = current[field];
            }
        }
        current[lastField] = value;
        return { ...obj };
    };

    const updateContent = (section: string, field: string, value: any): void => {
        if (!section || !field) {
            toast.error('Error updating content');
            return;
        }
        if (field.includes('.') || field.includes('[')) {
            setTempContent(prevContent => ({
                ...prevContent,
                [section]: handleNestedFieldUpdate({ obj: prevContent[section], path: field, value })
            }));
        } else {
            setTempContent(prevContent => ({
                ...prevContent,
                [section]: {
                    ...prevContent[section],
                    [field]: value
                }
            }));
        }
    };

    const updateArrayContent = (section: string, arrayField: string, index: number, value: any): void => {
        console.log('updateArrayContent', section, arrayField, index, value);
        setTempContent(prevContent => {
            const existingArray = prevContent[section]?.[arrayField] || [];
            const newArray = [...existingArray];

            if (index === -1) {
                newArray.push(value);
            } else {
                newArray[index] = {
                    ...newArray[index],
                    ...value
                };
            }

            return {
                ...prevContent,
                [section]: {
                    ...prevContent[section],
                    [arrayField]: newArray
                }
            };
        });
    };

    const deleteArrayItem = (section: string, arrayField: string, index: number): void => {
        if (!section || !arrayField || index === undefined) {
            toast.error("Error deleting array item: Missing parameters");
            return;
        }

        setTempContent((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [arrayField]: prev[section][arrayField].filter((_: any, i: number) => i !== index),
            },
        }));
    };

    const handleFileUpload = async (file: File, section: string, field: string): Promise<string> => {
        if (!file || !section || !field) {
            toast.error('Error uploading file');
            throw new Error('Missing required parameters');
        }
        if (!(file instanceof File)) {
            throw new Error('Invalid file object');
        }

        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const result = e.target?.result as string;

                if (field.includes('[') && field.includes(']')) {
                    const match = field.match(/(\w+)\[(\d+)\]\.(\w+)/);
                    if (match) {
                        const [, arrayField, indexStr, imageField] = match;
                        const index = parseInt(indexStr);

                        updateArrayContent(
                            section,
                            arrayField,
                            index,
                            { [imageField]: result }
                        );
                    }
                } else {
                    updateContent(section, field, result);
                }

                resolve(result);
            };

            reader.onerror = (error) => {
                console.error('File reading error:', error);
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, field: string): Promise<void> => {
        const file = e.target.files?.[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            await handleFileUpload(file, section, field);
        }
    };

    const onSave = (): void => {
        console.log("tempContent", tempContent);
        setContent((prevContent: any[]) =>
            prevContent.map((pageData: any) =>
                pageData.page.toLowerCase() === activePage.toLowerCase()
                    ? { ...pageData, content: tempContent }
                    : pageData
            )
        );
        onClose();
    };

    return (
        <>
            <div className="flex justify-between items-center border-b p-4">
                <h2 className="text-xl font-semibold">Edit {section} Content</h2>
                <button onClick={onClose} className="p-1">
                    <FiX className="h-6 w-6" />
                </button>
            </div>

            <div className="py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
                <GeneralForm
                    content={tempContent}
                    deleteArrayItem={deleteArrayItem}
                    handleImageChange={handleImageChange}
                    imagePreview={imagePreview || ''}
                    section={section}
                    updateArrayContent={updateArrayContent}
                    updateContent={updateContent}
                    key={"general"}
                />
                <CardsForm
                    content={tempContent}
                    deleteArrayItem={deleteArrayItem}
                    handleImageChange={handleImageChange}
                    section={section}
                    updateArrayContent={updateArrayContent}
                    key={"cards"}
                />
            </div>

            <div className="px-6 py-4 border-t flex justify-end space-x-3">
                <button onClick={onClose} className="px-4 py-2 bg-text text-background rounded-md">
                    Cancel
                </button>
                <button onClick={onSave} className="px-4 py-2 bg-primary text-background rounded-md">
                    Save Changes
                </button>
            </div>
        </>
    );
};

export default ContentEditor;
