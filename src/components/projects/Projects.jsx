import React, { useState } from "react";
import { object } from 'prop-types';

const Projects = ({ data }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="py-20 px-[10%] md:px-[5%] lg:px-[10%]">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-extrabold text-primary mb-6">{data?.projectTitle}</h2>
                <p className="text-xl text-text max-w-3xl mx-auto leading-relaxed">{data?.projectDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {data?.projectsCardsData.map((project) => (
                    <button key={project.id} className="group relative  rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <div className="relative w-full h-80 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    </button>
                ))}
            </div>

            {selectedProject && (
                <button className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
                    <button className="bg-background p-6 rounded-xl shadow-lg max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-60 object-cover rounded-lg" />
                        <h3 className="text-3xl font-bold text-primary mt-4">{selectedProject.title}</h3>
                        <p className="text-lg text-gray-700 mt-2">{selectedProject.description}</p>
                        <a href={selectedProject.link} className="inline-block mt-4 px-6 py-2 bg-primary text-background rounded-lg text-lg capitalize">View More</a>
                    </button>
                </button>
            )}
        </section>
    );
};

Projects.propTypes = {
    data: object
}
export default Projects;
