import { func, object } from 'prop-types';
import InputField from "../InputField";
export const ReviewsForm = ({ content, updateContent }) => (
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

ReviewsForm.propTypes = {
    content: object.isRequired,
    updateContent: func.isRequired
}