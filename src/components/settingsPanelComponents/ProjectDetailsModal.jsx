import React from 'react';
import { func, object } from "prop-types";

const ProjectDetailsModal = ({ onSave, setProjectDetails, projectDetails }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-col gap-2">
                <label htmlFor="projectName">Project Name</label>
                <input
                    label="Project Name"
                    value={projectDetails.projectName}
                    onChange={(e) => setProjectDetails({
                        ...projectDetails,
                        projectName: e.target.value
                    })}
                    id="projectName"
                    placeholder="Project Name"
                    className="w-full px-3 py-2 border border-text rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="projectPath">Project Path</label>
                <input
                    label="Project Path"
                    value={projectDetails.projectPath}
                    onChange={(e) => setProjectDetails({
                        ...projectDetails,
                        projectPath: e.target.value
                    })}
                    id="projectPath"
                    placeholder="e.g., /home/user/projects/my-app or C:\Users\username\projects\my-app"
                    className="w-full px-3 py-2 border border-text rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <button
                className="bg-primary text-background font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                onClick={onSave}
            >
                Save
            </button>
        </div>
    );
};

ProjectDetailsModal.propTypes = {
    onSave: func,
    setProjectDetails: func,
    projectDetails: object
};

export default ProjectDetailsModal;