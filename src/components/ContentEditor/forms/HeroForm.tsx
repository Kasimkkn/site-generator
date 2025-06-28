import ImageUpload from "@/components/ContentEditor/ImageUpload";
import InputField from "@/components/ContentEditor/InputField";
import { HandleImageChangeFunction, HeroData, UpdateContentFunction } from "@/types/global";

interface HeroFormProps {
    content: {
        hero: HeroData
    }
    updateContent: UpdateContentFunction;
    handleImageChange: HandleImageChangeFunction;
    imagePreview: string;
}

export const HeroForm = ({ content, updateContent, handleImageChange, imagePreview }: HeroFormProps) => (
    <div className="space-y-4">
        <div className='grid grid-cols-1 gap-1'>
            <ImageUpload
                id={'hero-image'}
                label="Hero Image"
                onChange={(e) => handleImageChange(e, 'image')}
                preview={content.hero.image}
                height="h-96"
            />
            <InputField
                label="Hero Description"
                type="textarea"
                value={content.hero.heroDescription}
                onChange={(e) => updateContent('hero', 'heroDescription', e.target.value)}
            />
        </div>
        <InputField
            label="Hero Title"
            value={content.hero.heroTitle}
            onChange={(e) => updateContent('hero', 'heroTitle', e.target.value)}
        />
        <div className='grid grid-cols-2 gap-1'>
            <InputField
                label="CTA Button Text"
                value={content.hero.ctaButton.text}
                onChange={(e) => updateContent('hero', 'ctaButton', {
                    ...content.hero.ctaButton,
                    text: e.target.value
                })}
            />
            <InputField
                label="CTA Button URL"
                value={content.hero.ctaButton.url}
                onChange={(e) => updateContent('hero', 'ctaButton', {
                    ...content.hero.ctaButton,
                    url: e.target.value
                })}
            />
        </div>
    </div>
);
