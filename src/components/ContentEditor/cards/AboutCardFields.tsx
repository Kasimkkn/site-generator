import { AboutCard, UpdateArrayContentFunction } from "@/types/global";
import InputField from "@/components/ContentEditor/InputField";

interface AboutCardFieldsProps {
    card: AboutCard,
    index: number,
    updateArrayContent: UpdateArrayContentFunction
    accent?: string
}

const AboutCardFields = ({ card, index, updateArrayContent, accent }: AboutCardFieldsProps) => (
    <div className="space-y-4">
        <InputField
            label="Title (Number)"
            value={card.title}
            onChange={(e) => updateArrayContent(
                'about',
                'aboutCardsData',
                index,
                { ...card, title: e.target.value }
            )}
            accent={accent}
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
            accent={accent}
        />
    </div>
);


export { AboutCardFields }