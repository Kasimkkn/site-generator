
import { ServiceCard, UpdateArrayContentFunction } from '@/types/global';
import InputField from "@/components/ContentEditor/InputField";

interface ServiceCardFieldsProps {
    card: ServiceCard
    index: number
    updateArrayContent: UpdateArrayContentFunction
}
const ServiceCardFields = ({ card, index, updateArrayContent }: ServiceCardFieldsProps) => (
    <>
        <InputField
            label="Title"
            value={card.title}
            onChange={(e) => updateArrayContent(
                'service',
                'serviceCardsData',
                index,
                { ...card, title: e.target.value }
            )}
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
        />
    </>
);

export { ServiceCardFields };

