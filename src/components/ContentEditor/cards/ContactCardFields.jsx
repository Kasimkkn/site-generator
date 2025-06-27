import InputField from "../InputField";
import { number, object, func } from 'prop-types'
export const ContactCardFields = ({ card, index, updateArrayContent }) => (
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

ContactCardFields.propTypes = {
    card: object,
    index: number,
    updateArrayContent: func,
}