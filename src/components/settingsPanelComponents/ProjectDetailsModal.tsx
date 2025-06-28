
import { Dispatch } from "react";

interface ProjectDetailsModalProps {
    onSave: () => void;
    setProjectDetails: Dispatch<React.SetStateAction<any>>;
    projectDetails: any;
}

const ProjectDetailsModal = ({ onSave, setProjectDetails, projectDetails }: ProjectDetailsModalProps) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-black text-lime-400 uppercase tracking-wide transform -rotate-1 mb-6">
                Export Project
            </h2>
            
            <div className="space-y-4">
                <div>
                    <label htmlFor="projectName" className="block text-lime-400 font-black uppercase tracking-wide mb-2 text-sm">
                        Project Name
                    </label>
                    <input
                        type="text"
                        value={projectDetails.projectName}
                        onChange={(e) => setProjectDetails({
                            ...projectDetails,
                            projectName: e.target.value
                        })}
                        id="projectName"
                        placeholder="My Awesome Project"
                        className="w-full px-4 py-3 bg-black text-lime-400 border-2 border-lime-400 focus:border-pink-500 focus:outline-none font-black placeholder-lime-400/50 transition-colors"
                    />
                </div>
                
                <div>
                    <label htmlFor="projectPath" className="block text-lime-400 font-black uppercase tracking-wide mb-2 text-sm">
                        Project Path
                    </label>
                    <input
                        type="text"
                        value={projectDetails.projectPath}
                        onChange={(e) => setProjectDetails({
                            ...projectDetails,
                            projectPath: e.target.value
                        })}
                        id="projectPath"
                        placeholder="/home/user/projects/my-app"
                        className="w-full px-4 py-3 bg-black text-lime-400 border-2 border-lime-400 focus:border-pink-500 focus:outline-none font-black placeholder-lime-400/50 transition-colors"
                    />
                </div>
                
                <button
                    className="w-full bg-lime-400 text-black font-black py-4 px-6 uppercase tracking-wide hover:bg-pink-500 hover:text-white transition-all duration-200 transform hover:scale-105 hover:rotate-1 border-2 border-lime-400 hover:border-pink-500 mt-6"
                    onClick={onSave}
                >
                    Export Now
                </button>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
