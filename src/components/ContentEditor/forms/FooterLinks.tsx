import { FooterLinkSection, UpdateArrayContentFunction } from '@/types/global';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import ConfirmModal from "../../settingsPanelComponents/ConfirmModal";
import InputField from "../InputField";

interface FooterLinksProps {
    linkSection: FooterLinkSection
    index: number;
    updateArrayContent: UpdateArrayContentFunction;
}
export const FooterLinks = ({ linkSection, index, updateArrayContent }: FooterLinksProps) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        linkIndexToDelete: null
    });

    const handleDelete = (linkIndex) => {
        const newLinks = linkSection.links.filter((_, i) => i !== linkIndex);
        updateArrayContent(
            'footer',
            'linksData',
            index,
            { ...linkSection, links: newLinks }
        );
    };

    const openConfirmModal = (linkIndex) => {
        setModalState({
            isOpen: true,
            linkIndexToDelete: linkIndex
        });
    };

    const closeConfirmModal = () => {
        setModalState({
            isOpen: false,
            linkIndexToDelete: null
        });
    };

    const handleDeleteConfirm = () => {
        if (modalState.linkIndexToDelete !== null) {
            handleDelete(modalState.linkIndexToDelete);
            closeConfirmModal();
        }
    };

    return (
        <>
            <div className="space-y-2">
                {linkSection?.links?.map((link, linkIndex) => (
                    <div id={`links-${linkIndex}`} key={linkIndex + 1} className="flex space-x-2">
                        <InputField
                            label="name"
                            value={link.name}
                            onChange={(e) => {
                                const newLinks = [...linkSection.links];
                                newLinks[linkIndex] = {
                                    ...link,
                                    name: e.target.value
                                };
                                updateArrayContent(
                                    'footer',
                                    'linksData',
                                    index,
                                    { ...linkSection, links: newLinks }
                                );
                            }}
                        />
                        <InputField
                            label="href"
                            value={link.href}
                            onChange={(e) => {
                                const newLinks = [...linkSection.links];
                                newLinks[linkIndex] = {
                                    ...link,
                                    href: e.target.value
                                };
                                updateArrayContent(
                                    'footer',
                                    'linksData',
                                    index,
                                    { ...linkSection, links: newLinks }
                                );
                            }}
                        />
                        <button
                            onClick={() => openConfirmModal(linkIndex)}
                            className="flex mt-7 h-max w-max items-center p-3 text-lg font-medium text-red-600 border border-red-600 rounded-md hover:bg-blue-50"
                        >
                            <FiTrash2 className="h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
            <ConfirmModal
                isOpen={modalState.isOpen}
                message="Are you sure you want to delete this link?"
                onConfirm={handleDeleteConfirm}
                onCancel={closeConfirmModal}
            />
        </>
    );
};
