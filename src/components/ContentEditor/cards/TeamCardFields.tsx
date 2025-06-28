
import { HandleImageChangeFunction, TeamCard, UpdateArrayContentFunction } from "@/types/global";
import ImageUpload from "@/components/ContentEditor/ImageUpload";
import InputField from "@/components/ContentEditor/InputField";

interface TeamCardFieldsProps {
    card: TeamCard;
    index: number;
    updateArrayContent: UpdateArrayContentFunction;
    handleImageChange: HandleImageChangeFunction;
    accent?: string
}
export const TeamCardFields = ({ card, index, updateArrayContent, handleImageChange, accent }: TeamCardFieldsProps) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageUpload
            id={String(card.id)}
            label="Avatar"
            onChange={(e) => {
                handleImageChange(e, `teamsCardsData[${index}].avatar`)
            }}
            preview={card.avatar}
            accent={accent}
        />
        <div className="space-y-3">
            <InputField
                label="Name"
                value={card.name}
                onChange={(e) => updateArrayContent(
                    'teams',
                    'teamsCardsData',
                    index,
                    { ...card, name: e.target.value }
                )}
                accent={accent}
            />
            <InputField
                label="Role"
                value={card.title}
                onChange={(e) => updateArrayContent(
                    'teams',
                    'teamsCardsData',
                    index,
                    { ...card, title: e.target.value }
                )}
                accent={accent}
            />
            <InputField
                label="Description"
                type="textarea"
                value={card.desc}
                onChange={(e) => updateArrayContent(
                    'teams',
                    'teamsCardsData',
                    index,
                    { ...card, desc: e.target.value }
                )}
                accent={accent}
            />
            <InputField
                label="LinkedIn URL"
                value={card.linkedin}
                onChange={(e) => updateArrayContent(
                    'teams',
                    'teamsCardsData',
                    index,
                    { ...card, linkedin: e.target.value }
                )}
                accent={accent}
            />
            <InputField
                label="Twitter URL"
                value={card.twitter}
                onChange={(e) => updateArrayContent(
                    'teams',
                    'teamsCardsData',
                    index,
                    { ...card, twitter: e.target.value }
                )}
                accent={accent}
            />
            <InputField
                label="GitHub URL"
                value={card.github}
                onChange={(e) => updateArrayContent(
                    'teams',
                    'teamsCardsData',
                    index,
                    { ...card, github: e.target.value }
                )}
                accent={accent}
            />
        </div>
    </div>
);
