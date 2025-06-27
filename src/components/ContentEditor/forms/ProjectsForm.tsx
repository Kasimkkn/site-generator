import { ProjectData, UpdateContentFunction } from '@/types/global';
import InputField from "../InputField";

interface ProjectsFormProps {
    content: {
        projects: ProjectData
    };
    updateContent: UpdateContentFunction;
}
export const ProjectsForm = ({ content, updateContent }: ProjectsFormProps) => (
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
