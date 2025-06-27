import { func, object } from 'prop-types';
import InputField from "../InputField";
export const ServiceForm = ({ content, updateContent }) => (
    <div className="space-y-4">
        <InputField
            label="Service Section Title"
            value={content.service.serviceTitle}
            onChange={(e) => updateContent('service', 'serviceTitle', e.target.value)}
        />
        <InputField
            label="Service Description"
            type="textarea"
            value={content.service.serviceDescription}
            onChange={(e) => updateContent('service', 'serviceDescription', e.target.value)}
        />
    </div>
);

ServiceForm.propTypes = {
    content: object.isRequired,
    updateContent: func.isRequired
}