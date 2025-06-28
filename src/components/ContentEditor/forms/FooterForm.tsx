import { FiPlusCircle } from "react-icons/fi";
import { FooterLinkSection } from "@/components/ContentEditor/forms/FooterLinkSection";
import InputField from "@/components/ContentEditor/InputField";

import ImageUpload from "@/components/ContentEditor/ImageUpload";
import { DeleteArrayItemFunction, FooterData, HandleImageChangeFunction, UpdateArrayContentFunction, UpdateContentFunction } from "@/types/global";

interface FooterFormProps {
    content: {
        footer: FooterData
    };
    updateContent: UpdateContentFunction;
    handleImageChange: HandleImageChangeFunction;
    imagePreview: string;
    updateArrayContent: UpdateArrayContentFunction;
    deleteArrayItem: DeleteArrayItemFunction;
}

export const FooterForm = ({ content, updateContent, handleImageChange, imagePreview, updateArrayContent, deleteArrayItem }: FooterFormProps) => {

    const scrollToMessage = (index) => {
        setTimeout(() => {
            const element = document.getElementById(`footer-links-${index}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    return (
        <div className="space-y-4">
            <div className='grid grid-cols-2 gap-1'>
                <ImageUpload
                    id={'footer-logo'}
                    label="Footer Logo"
                    onChange={(e) => handleImageChange(e, 'logo')}
                    preview={imagePreview}
                    height="h-[130px]"
                />
                <InputField
                    label="Footer Description"
                    type="textarea"
                    value={content.footer.description}
                    onChange={(e) => updateContent('footer', 'description', e.target.value)}
                />
            </div>
            <InputField
                label="Company Name"
                value={content.footer.companyName}
                onChange={(e) => updateContent('footer', 'companyName', e.target.value)}
            />
            <div className="space-y-2">
                <span className="block text-sm font-medium text-text">Footer Links</span>
                <button
                    onClick={() => {
                        updateArrayContent('footer', 'linksData', -1, {
                            title: '',
                            links: []
                        })
                        scrollToMessage(content.footer.linksData.length);
                    }}
                    className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                    <FiPlusCircle className="h-4 w-4 mr-2" />
                    Add Link Section
                </button>
                {content.footer.linksData.map((linkSection, index) => (
                    <FooterLinkSection
                        key={linkSection.id}
                        linkSection={linkSection}
                        index={index}
                        updateArrayContent={updateArrayContent}
                        deleteArrayItem={deleteArrayItem}
                    />
                ))}
            </div>
        </div>
    )
};
