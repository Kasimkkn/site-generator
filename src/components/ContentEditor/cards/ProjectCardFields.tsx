
import { HandleImageChangeFunction, ProjectCard, UpdateArrayContentFunction } from "@/types/global";
import ImageUpload from "@/components/ContentEditor/ImageUpload";
import InputField from "@/components/ContentEditor/InputField";

interface ProjectCardFieldsProps {
    card: ProjectCard;
    index: number;
    updateArrayContent: UpdateArrayContentFunction;
    handleImageChange: HandleImageChangeFunction;
    accent?: string
}

export const ProjectCardFields = ({ card, index, updateArrayContent, handleImageChange, accent }: ProjectCardFieldsProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={index} id={String(card.id)}>
            <ImageUpload
                id={String(card.id)}
                label="Project Image"
                onChange={(e) => handleImageChange(e, `projectsCardsData[${index}].image`)}
                preview={card.image}
                accent={accent}
            />
            <div className="space-y-4">
                <InputField
                    label="Title"
                    value={card.title}
                    onChange={(e) => updateArrayContent(
                        'projects',
                        'projectsCardsData',
                        index,
                        { ...card, title: e.target.value }
                    )}
                    accent={accent}
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
                    accent={accent}
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
                    accent={accent}
                />

            </div>
        </div>
    );
};
