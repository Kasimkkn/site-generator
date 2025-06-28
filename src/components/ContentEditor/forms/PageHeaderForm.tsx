import { HandleImageChangeFunction, PageHeaderData, UpdateContentFunction } from "@/types/global";
import ImageUpload from "@/components/ContentEditor/ImageUpload";
import InputField from "@/components/ContentEditor/InputField";

interface PageHeaderFormProps {
    content: {
        pageheader: PageHeaderData
    };
    updateContent: UpdateContentFunction;
    handleImageChange: HandleImageChangeFunction;
    imagePreview: string;
}
export const PageHeaderForm = ({ content, updateContent, handleImageChange, imagePreview }: PageHeaderFormProps) => (
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
