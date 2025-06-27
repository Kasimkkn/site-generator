import { ContactData, UpdateContentFunction } from "@/types/global";
import InputField from "../InputField";

interface ContactFormProps {
    content: {
        contact: ContactData
    };
    updateContent: UpdateContentFunction;
}
export const ContactForm = ({ content, updateContent }: ContactFormProps) => (
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
