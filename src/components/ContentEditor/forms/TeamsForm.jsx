import { func, object } from 'prop-types';
import InputField from "../InputField";
export const TeamsForm = ({ content, updateContent }) => (
    <div className="space-y-4">
        <InputField
            label="Teams Section Title"
            value={content.teams.teamsTitle}
            onChange={(e) => updateContent('teams', 'teamsTitle', e.target.value)}
        />
        <InputField
            label="Teams Description"
            type="textarea"
            value={content.teams.teamsDescription}
            onChange={(e) => updateContent('teams', 'teamsDescription', e.target.value)}
        />
    </div>
);

TeamsForm.propTypes = {
    content: object.isRequired,
    updateContent: func.isRequired,
};