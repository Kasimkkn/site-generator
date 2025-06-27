import InputField from "../InputField";
import { ReviewData, UpdateContentFunction } from '@/types/global';

interface ReviewsFormProps {
    content: {
        reviews: ReviewData
    };
    updateContent: UpdateContentFunction;
}
export const ReviewsForm = ({ content, updateContent }: ReviewsFormProps) => (
    <div className="space-y-4">
        <InputField
            label="Reviews Section Title"
            value={content.reviews.reviewsTitle}
            onChange={(e) => updateContent('reviews', 'reviewsTitle', e.target.value)}
        />
        <InputField
            label="Reviews Description"
            type="textarea"
            value={content.reviews.reviewsDescription}
            onChange={(e) => updateContent('reviews', 'reviewsDescription', e.target.value)}
        />
    </div>
);
