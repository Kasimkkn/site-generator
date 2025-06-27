import ImageUpload from "../ImageUpload";
import InputField from "../InputField";
import { string, object, func } from 'prop-types'


export const HeroForm = ({ content, updateContent, handleImageChange, imagePreview }) => (
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

HeroForm.propTypes = {
    content: object.isRequired,
    updateContent: func.isRequired,
    handleImageChange: func.isRequired,
    imagePreview: string
};