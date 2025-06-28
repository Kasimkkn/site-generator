
import { HandleImageChangeFunction, ReviewCard, UpdateArrayContentFunction } from "@/types/global";
import ImageUpload from "@/components/ContentEditor/ImageUpload";
import InputField from "@/components/ContentEditor/InputField";

interface ReviewCardFieldsProps {
    card: ReviewCard;
    index: number;
    updateArrayContent: UpdateArrayContentFunction;
    handleImageChange: HandleImageChangeFunction;
}
export const ReviewCardFields = ({ card, index, updateArrayContent, handleImageChange }: ReviewCardFieldsProps) => (
    <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
            <ImageUpload
                id={String(card.id)}
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
