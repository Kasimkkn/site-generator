import { HandleImageChangeFunction, ProjectCard, UpdateArrayContentFunction } from "@/types/global";
import ImageUpload from "@/components/ContentEditor/ImageUpload";
import InputField from "@/components/ContentEditor/InputField";

interface ProjectCardFieldsProps {
    card: ProjectCard;
    index: number;
    updateArrayContent: UpdateArrayContentFunction;
    handleImageChange: HandleImageChangeFunction;
}
export const ProjectCardFields = ({ card, index, updateArrayContent, handleImageChange }: ProjectCardFieldsProps) => {
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
