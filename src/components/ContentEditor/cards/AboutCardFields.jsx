import InputField from "../InputField";
import { number, object, func } from 'prop-types'
const AboutCardFields = ({ card, index, updateArrayContent }) => (
    <>
        <InputField
            label="Title (Number)"
            value={card.title}
            onChange={(e) => updateArrayContent(
                'about',
                'aboutCardsData',
                index,
                { ...card, title: e.target.value }
            )}
        />
        <InputField
            label="Text"
            value={card.text}
            onChange={(e) => updateArrayContent(
                'about',
                'aboutCardsData',
                index,
                { ...card, text: e.target.value }
            )}
        />
    </>
);

AboutCardFields.propTypes = {
    card: object,
    index: number,
    updateArrayContent: func
}

export { AboutCardFields }