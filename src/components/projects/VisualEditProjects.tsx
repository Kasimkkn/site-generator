
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { ProjectData } from '@/types/global';

interface VisualEditProjectsProps {
  data?: ProjectData;
}

const VisualEditProjects: React.FC<VisualEditProjectsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <EditableElement
            section="projects"
            field="projectTitle"
            type="text"
            value={data.projectTitle || ''}
          >
            <h2 className="text-4xl font-black text-primary mb-4">
              {data.projectTitle}
            </h2>
          </EditableElement>
          
          <EditableElement
            section="projects"
            field="projectDescription"
            type="text"
            value={data.projectDescription || ''}
          >
            <p className="text-lg text-text max-w-3xl mx-auto">
              {data.projectDescription}
            </p>
          </EditableElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projectsCardsData?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <EditableElement
                section="projects"
                field={`projectsCardsData.${index}.image`}
                type="image"
                value={project.image || ''}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-lime-400/20 to-pink-500/20 border-4 border-dashed border-lime-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lime-400 text-4xl mb-2">🖼️</div>
                      <p className="text-gray-400 text-sm">Click to add image</p>
                    </div>
                  </div>
                )}
              </EditableElement>
              
              <div className="p-6">
                <EditableElement
                  section="projects"
                  field={`projectsCardsData.${index}.title`}
                  type="text"
                  value={project.title || ''}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                </EditableElement>
                
                <EditableElement
                  section="projects"
                  field={`projectsCardsData.${index}.description`}
                  type="text"
                  value={project.description || ''}
                >
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                </EditableElement>
                
                <EditableElement
                  section="projects"
                  field={`projectsCardsData.${index}.link`}
                  type="text"
                  value={project.link || ''}
                >
                  <a href={project.link} className="text-primary hover:text-primary/80 font-medium">
                    View Project →
                  </a>
                </EditableElement>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualEditProjects;
