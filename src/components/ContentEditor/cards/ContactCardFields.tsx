import { ContactCard, UpdateArrayContentFunction } from "@/types/global";
import InputField from "../InputField";

interface ContactCardFieldsProps {
    card: ContactCard,
    index: number,
    updateArrayContent: UpdateArrayContentFunction
}
export const ContactCardFields = ({ card, index, updateArrayContent }: ContactCardFieldsProps) => (
    <>

        <InputField
            label="title"
            value={card.title}
            onChange={(e) => updateArrayContent(
                'contact',
                'contactsData',
                index,
                { ...card, title: e.target.value }
            )}
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
        />

    </>
);
