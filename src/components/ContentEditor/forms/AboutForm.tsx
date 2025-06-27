import ImageUpload from "../ImageUpload";
import InputField from "../InputField";

import { AboutData, HandleImageChangeFunction, UpdateContentFunction } from "@/types/global";

interface AboutFormProps {
    content: {
        about: AboutData
    };
    updateContent: UpdateContentFunction;
    handleImageChange: HandleImageChangeFunction;
    imagePreview: string;
}

export const AboutForm = ({ content, updateContent, handleImageChange, imagePreview }: AboutFormProps) => (
    <div className="space-y-4">
        <div className='grid grid-cols-2 gap-1'>
            <ImageUpload
                id={'about-image'}
                label="About Image"
                onChange={(e) => handleImageChange(e, 'image')}
                preview={content.about.image}
                height="h-[130px]"
            />
            <InputField
                label="About Description"
                type="textarea"
                value={content.about.aboutDescription}
                onChange={(e) => updateContent('about', 'aboutDescription', e.target.value)}
            />
        </div>
        <div className='grid grid-cols-2 gap-1'>
            <InputField
                label="About Title"
                value={content.about.aboutTitle}
                onChange={(e) => updateContent('about', 'aboutTitle', e.target.value)}
            />
            <InputField
                label="Button Text"
                value={content.about.aboutBtnText}
                onChange={(e) => updateContent('about', 'aboutBtnText', e.target.value)}
            />
        </div>
    </div>
);
