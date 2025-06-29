
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { TeamData } from '@/types/global';

interface VisualEditTeamsProps {
  data?: TeamData;
}

const VisualEditTeams: React.FC<VisualEditTeamsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <EditableElement
            section="teams"
            field="teamsTitle"
            type="text"
            value={data.teamsTitle || ''}
          >
            <h2 className="text-4xl font-black text-primary mb-4">
              {data.teamsTitle}
            </h2>
          </EditableElement>
          
          <EditableElement
            section="teams"
            field="teamsDescription"
            type="text"
            value={data.teamsDescription || ''}
          >
            <p className="text-lg text-text max-w-3xl mx-auto">
              {data.teamsDescription}
            </p>
          </EditableElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.teamsCardsData?.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <EditableElement
                section="teams"
                field={`teamsCardsData.${index}.avatar`}
                type="image"
                value={member.avatar || ''}
              >
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                ) : (
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-lime-400/20 to-pink-500/20 border-4 border-dashed border-lime-400 flex items-center justify-center">
                    <span className="text-lime-400 text-2xl">👤</span>
                  </div>
                )}
              </EditableElement>
              
              <EditableElement
                section="teams"
                field={`teamsCardsData.${index}.name`}
                type="text"
                value={member.name || ''}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
              </EditableElement>
              
              <EditableElement
                section="teams"
                field={`teamsCardsData.${index}.title`}
                type="text"
                value={member.title || ''}
              >
                <p className="text-primary font-medium mb-2">
                  {member.title}
                </p>
              </EditableElement>
              
              <EditableElement
                section="teams"
                field={`teamsCardsData.${index}.desc`}
                type="text"
                value={member.desc || ''}
              >
                <p className="text-gray-600 text-sm">
                  {member.desc}
                </p>
              </EditableElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualEditTeams;
