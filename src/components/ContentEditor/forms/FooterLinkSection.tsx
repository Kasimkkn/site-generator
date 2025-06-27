import { DeleteArrayItemFunction, FooterLinkSection as FooterLinkTypes, UpdateArrayContentFunction } from "@/types/global";
import { useState } from 'react';
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import ConfirmModal from "../../settingsPanelComponents/ConfirmModal";
import InputField from "../InputField";
import { FooterLinks } from "./FooterLinks";


interface FooterLinkSectionProps {
    linkSection: FooterLinkTypes;
    index: number;
    updateArrayContent: UpdateArrayContentFunction;
    deleteArrayItem: DeleteArrayItemFunction;
}

export const FooterLinkSection = ({ linkSection, index, updateArrayContent, deleteArrayItem }: FooterLinkSectionProps) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        sectionIndex: null
    });

    const openConfirmModal = (sectionIndex) => {
        setModalState({
            isOpen: true,
            sectionIndex
        });
    };

    const closeConfirmModal = () => {
        setModalState({
            isOpen: false,
            sectionIndex: null
        });
    };

    const handleDeleteConfirm = () => {
        if (modalState.sectionIndex !== null) {
            deleteArrayItem('footer', 'linksData', modalState.sectionIndex);
            closeConfirmModal();
        }
    };
    const scrollToMessage = (index) => {
        setTimeout(() => {
            const element = document.getElementById(`links-${index}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    return (
        <>
            <div id={`footer-links-${index}`} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <InputField
                            label="Section Title"
                            value={linkSection.title}
                            onChange={(e) => updateArrayContent(
                                'footer',
                                'linksData',
                                index,
                                { ...linkSection, title: e.target.value }
                            )}
                        />
                        <button
                            onClick={() => {
                                const newLinks = [...linkSection.links, { label: '', link: '' }];
                                updateArrayContent(
                                    'footer',
                                    'linksData',
                                    index,
                                    { ...linkSection, links: newLinks }
                                );
                                scrollToMessage(linkSection.links.length);
                            }}
                            className="flex mt-6 items-center px-3 py-2 text-sm font-medium text-primary border border-primary rounded-md "
                        >
                            <FiPlusCircle className="h-4 w-4 " />
                        </button>
                    </div>
                    <button
                        onClick={() => openConfirmModal(index)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                        <FiTrash2 className="h-5 w-5" />
                    </button>
                </div>
                <FooterLinks
                    linkSection={linkSection}
                    index={index}
                    updateArrayContent={updateArrayContent}
                />
            </div>
            <ConfirmModal
                isOpen={modalState.isOpen}
                message="Are you sure you want to delete this section?"
                onConfirm={handleDeleteConfirm}
                onCancel={closeConfirmModal}
            />
        </>
    );
};
