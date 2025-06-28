import InputField from "@/components/ContentEditor/InputField";

import { ServiceData, UpdateContentFunction } from '@/types/global';

interface ServiceFormProps {
    content: {
        service: ServiceData
    };
    updateContent: UpdateContentFunction;
}

export const ServiceForm = ({ content, updateContent }: ServiceFormProps) => (
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
