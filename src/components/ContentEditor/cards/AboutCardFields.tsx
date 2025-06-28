import { AboutCard, UpdateArrayContentFunction } from "@/types/global";
import InputField from "@/components/ContentEditor/InputField";

interface AboutCardFieldsProps {
    card: AboutCard,
    index: number,
    updateArrayContent: UpdateArrayContentFunction
}

const AboutCardFields = ({ card, index, updateArrayContent }: AboutCardFieldsProps) => (
    <>
        <InputField
            label="Title (Number)"
            value={card.title}
            onChange={(e) => updateArrayContent(
                'about',
                'aboutCardsData',
                index,
                { ...card, title: e.target.value }
            )}
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
        />
    </>
);


export { AboutCardFields }