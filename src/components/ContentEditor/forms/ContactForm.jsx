import InputField from "../InputField";
import { object, func } from 'prop-types'
export const ContactForm = ({ content, updateContent }) => (
    <div className="space-y-4">
        <InputField
            label="Contact Section Title"
            value={content.contact.contactTitle}
            onChange={(e) => updateContent('contact', 'contactTitle', e.target.value)}
        />
        <InputField
            label="Contact Description"
            type="textarea"
            value={content.contact.contactDescription}
            onChange={(e) => updateContent('contact', 'contactDescription', e.target.value)}
        />
    </div>
);

ContactForm.propTypes = {
    content: object.isRequired,
    updateContent: func.isRequired,
}