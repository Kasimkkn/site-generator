import ImageUpload from "../ImageUpload";
import InputField from "../InputField";
import { number, object, func } from 'prop-types'
export const ReviewCardFields = ({ card, index, updateArrayContent, handleImageChange }) => (
    <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
            <ImageUpload
                id={card.id}
                label="Avatar"
                onChange={(e) => handleImageChange(e, `reviewsCardsData[${index}].avatar`)}
                preview={card.avatar}
                height={"h-full"}
            />
        </div>
        <div className="col-span-8">
            <InputField
                label="Name"
                value={card.name}
                onChange={(e) => updateArrayContent(
                    'reviews',
                    'reviewsCardsData',
                    index,
                    { ...card, name: e.target.value }
                )}
            />
            <InputField
                label="Role"
                value={card.title}
                onChange={(e) => updateArrayContent(
                    'reviews',
                    'reviewsCardsData',
                    index,
                    { ...card, title: e.target.value }
                )}
            />
            <InputField
                label="Review"
                type="textarea"
                value={card.review}
                onChange={(e) => updateArrayContent(
                    'reviews',
                    'reviewsCardsData',
                    index,
                    { ...card, review: e.target.value }
                )}
            />
        </div>
    </div>
);

ReviewCardFields.propTypes = {
    card: object,
    index: number,
    updateArrayContent: func,
    handleImageChange: func,
};