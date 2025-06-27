import { func, number, object } from 'prop-types';
import InputField from "../InputField";
const ServiceCardFields = ({ card, index, updateArrayContent }) => (
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

ServiceCardFields.propTypes = {
    card: object,
    index: number,
    updateArrayContent: func
}
export { ServiceCardFields };
