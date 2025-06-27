import ImageUpload from "../ImageUpload";
import InputField from "../InputField";
import { string, object, func } from 'prop-types'


export const PageHeaderForm = ({ content, updateContent, handleImageChange, imagePreview }) => (
    <div className="space-y-4">
        <div className='grid grid-cols-1 gap-1'>
            <ImageUpload
                id={'page-header-image'}
                label="Page Header Image"
                onChange={(e) => handleImageChange(e, 'image')}
                preview={content.pageheader.image}
                height="h-96"
            />
            <InputField
                label="Page Header Description"
                type="textarea"
                value={content.pageheader.description}
                onChange={(e) => updateContent('pageheader', 'description', e.target.value)}
            />
        </div>
        <InputField
            label="Page Header Title"
            value={content.pageheader.title}
            onChange={(e) => updateContent('pageheader', 'title', e.target.value)}
        />
    </div>
);

PageHeaderForm.propTypes = {
    content: object.isRequired,
    updateContent: func.isRequired,
    handleImageChange: func.isRequired,
    imagePreview: string
};