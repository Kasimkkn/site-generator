import ImageUpload from "../ImageUpload";
import InputField from "../InputField";
import { number, object, func } from 'prop-types'
export const ProjectCardFields = ({ card, index, updateArrayContent, handleImageChange }) => {
    return (
        <div className="grid grid-cols-2 gap-3" key={index} id={card.id}>
            <ImageUpload
                id={card.id}
                label="Project Image"
                onChange={(e) => handleImageChange(e, `projectsCardsData[${index}].image`)}
                preview={card.image}
            />
            <div className="flex flex-col gap-1">
                <InputField
                    label="Title"
                    value={card.title}
                    onChange={(e) => updateArrayContent(
                        'projects',
                        'projectsCardsData',
                        index,
                        { ...card, title: e.target.value }
                    )}
                />
                <InputField
                    label="Description"
                    value={card.description}
                    onChange={(e) => updateArrayContent(
                        'projects',
                        'projectsCardsData',
                        index,
                        { ...card, description: e.target.value }
                    )}
                />
                <InputField
                    label="Link"
                    value={card.link}
                    onChange={(e) => updateArrayContent(
                        'projects',
                        'projectsCardsData',
                        index,
                        { ...card, link: e.target.value }
                    )}
                />

            </div>
        </div>
    );
};

ProjectCardFields.propTypes = {
    card: object.isRequired,
    index: number.isRequired,
    updateArrayContent: func.isRequired,
    handleImageChange: func.isRequired,
};