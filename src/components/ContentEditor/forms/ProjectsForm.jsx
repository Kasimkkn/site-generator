import { func, object } from 'prop-types';
import InputField from "../InputField";
export const ProjectsForm = ({ content, updateContent }) => (
    <div className="space-y-4">
        <InputField
            label="Projects Section Title"
            value={content.projects.projectTitle}
            onChange={(e) => updateContent('projects', 'projectTitle', e.target.value)}
        />
        <InputField
            label="Projects Description"
            type="textarea"
            value={content.projects.projectDescription}
            onChange={(e) => updateContent('projects', 'projectDescription', e.target.value)}
        />
    </div>
);

ProjectsForm.propTypes = {
    content: object.isRequired,
    updateContent: func.isRequired,
};