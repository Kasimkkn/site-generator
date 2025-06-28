import { ContactCard, UpdateArrayContentFunction } from "@/types/global";
import InputField from "@/components/ContentEditor/InputField";

interface ContactCardFieldsProps {
    card: ContactCard,
    index: number,
    updateArrayContent: UpdateArrayContentFunction
    accent?: string
}
export const ContactCardFields = ({ card, index, updateArrayContent, accent }: ContactCardFieldsProps) => (
    <div className="space-y-4">
        <InputField
            label="title"
            value={card.title}
            onChange={(e) => updateArrayContent(
                'contact',
                'contactsData',
                index,
                { ...card, title: e.target.value }
            )}
            accent={accent}
        />
        <InputField
            label="contact"
            value={card.contact}
            onChange={(e) => updateArrayContent(
                'contact',
                'contactsData',
                index,
                { ...card, contact: e.target.value }
            )}
            accent={accent}
        />
        <InputField
            label="icon"
            value={card.icon}
            type="textarea"
            onChange={(e) => updateArrayContent(
                'contact',
                'contactsData',
                index,
                { ...card, icon: e.target.value }
            )}
            accent={accent}
        />

    </div>
);
