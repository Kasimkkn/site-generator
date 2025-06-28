import { DeleteArrayItemFunction, HandleImageChangeFunction, NavbarData, UpdateArrayContentFunction, UpdateContentFunction } from '@/types/global';
import { useState } from 'react';
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { getInitialCardData } from "@/utils/cardInitialData";
import ConfirmModal from "@/components/settingsPanelComponents/ConfirmModal";
import ImageUpload from "@/components/ContentEditor/ImageUpload";
import InputField from "@/components/ContentEditor/InputField";

interface NavbarFormProps {
    content: {
        navbar: NavbarData
    };
    updateContent: UpdateContentFunction;
    handleImageChange: HandleImageChangeFunction;
    imagePreview: string;
    updateArrayContent: UpdateArrayContentFunction;
    deleteArrayItem: DeleteArrayItemFunction;
}
export const NavbarForm = ({ content, updateContent, handleImageChange, imagePreview, updateArrayContent, deleteArrayItem }: NavbarFormProps) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        menuIndexToDelete: null
    });

    const openConfirmModal = (index) => {
        setModalState({
            isOpen: true,
            menuIndexToDelete: index
        });
    };

    const closeConfirmModal = () => {
        setModalState({
            isOpen: false,
            menuIndexToDelete: null
        });
    };

    const handleDeleteConfirm = () => {
        if (modalState.menuIndexToDelete !== null) {
            deleteArrayItem('navbar', 'menus', modalState.menuIndexToDelete);
            closeConfirmModal();
        }
    };

    const scrollToMessage = (index) => {
        setTimeout(() => {
            const element = document.getElementById(`menu-${index}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };


    return (
        <>
            <div className="space-y-4">
                <ImageUpload
                    id="navbar-logo"
                    label="Logo"
                    onChange={(e) => handleImageChange(e, 'logo')}
                    preview={content.navbar.logo}
                />
                <InputField
                    label="Button Text"
                    value={content.navbar.buttonText}
                    onChange={(e) => updateContent('navbar', 'buttonText', e.target.value)}
                />
            </div>
            <div className="space-y-4 mt-4 flex flex-col">
                <button
                    onClick={() => {
                        updateArrayContent('navbar', 'menus', -1, getInitialCardData('navbar'))
                        console.log('content', content.navbar.menus.length);
                        scrollToMessage(content.navbar.menus.length)
                    }}
                    className="self-end flex items-center px-3 py-2 text-sm font-medium text-black bg-lime-400 rounded-md"
                >
                    <FiPlusCircle className="h-4 w-4 mr-2" />
                    Add Menu
                </button>
                {content.navbar.menus.map((card, index) => (
                    <div id={`menu-${index}`} key={index + 1} className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium">Menu {index + 1}</h3>
                            <button
                                onClick={() => openConfirmModal(index)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                            >
                                <FiTrash2 className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <InputField
                                label="Title"
                                value={card.title}
                                onChange={(e) => updateContent('navbar', `menus[${index}].title`, e.target.value)}
                            />
                            <InputField
                                label="Path"
                                value={card.path}
                                onChange={(e) => updateContent('navbar', `menus[${index}].path`, e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <ConfirmModal
                isOpen={modalState.isOpen}
                message="Are you sure you want to delete this menu item?"
                onConfirm={handleDeleteConfirm}
                onCancel={closeConfirmModal}
            />
        </>
    );
};
