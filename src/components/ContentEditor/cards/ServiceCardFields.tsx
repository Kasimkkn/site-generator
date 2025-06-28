
import { ServiceCard, UpdateArrayContentFunction } from '@/types/global';
import InputField from "@/components/ContentEditor/InputField";

interface ServiceCardFieldsProps {
    card: ServiceCard
    index: number
    updateArrayContent: UpdateArrayContentFunction
    accent?: string
}
const ServiceCardFields = ({ card, index, updateArrayContent, accent }: ServiceCardFieldsProps) => (
    <div className='space-y-4'>
        <InputField
            label="Title"
            value={card.title}
            onChange={(e) => updateArrayContent(
                'service',
                'serviceCardsData',
                index,
                { ...card, title: e.target.value }
            )}
            accent={accent}
        />
        <InputField
            label="Description"
            type="textarea"
            value={card.description}
            onChange={(e) => updateArrayContent(
                'service',
                'serviceCardsData',
                index,
                { ...card, description: e.target.value }
            )}
            accent={accent}
        />
    </div>
);

export { ServiceCardFields };

