
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { AboutData } from '@/types/global';

interface VisualEditAboutProps {
  data?: AboutData;
}

const VisualEditAbout: React.FC<VisualEditAboutProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 px-[10%] md:px-[5%] lg:px-[10%] bg-background">
      <div className="text-center mb-12">
        <EditableElement
          section="about"
          field="aboutTitle"
          type="text"
          value={data.aboutTitle || ''}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {data.aboutTitle}
          </h2>
        </EditableElement>
        
        <EditableElement
          section="about"
          field="aboutDescription"
          type="text"
          value={data.aboutDescription || ''}
        >
          <p className="text-lg text-text max-w-3xl mx-auto">
            {data.aboutDescription}
          </p>
        </EditableElement>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <EditableElement
            section="about"
            field="image"
            type="image"
            value={data.image || ''}
          >
            {data.image ? (
              <img src={data.image} alt="About Us" className="w-full rounded-xl shadow-lg" />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-lime-400/20 to-pink-500/20 border-4 border-dashed border-lime-400 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lime-400 text-6xl mb-4">🖼️</div>
                  <p className="text-gray-400">Click to add about image</p>
                </div>
              </div>
            )}
          </EditableElement>
        </div>

        <div className="space-y-6">
          {data.aboutCardsData?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-lg shadow-md"
            >
              <EditableElement
                section="about"
                field={`aboutCardsData.${index}.title`}
                type="text"
                value={item.title || ''}
              >
                <div className="text-primary text-4xl font-bold">{item.title}</div>
              </EditableElement>
              
              <EditableElement
                section="about"
                field={`aboutCardsData.${index}.text`}
                type="text"
                value={item.text || ''}
              >
                <p className="text-lg text-text">{item.text}</p>
              </EditableElement>
            </motion.div>
          ))}
          
          <EditableElement
            section="about"
            field="aboutBtnText"
            type="button"
            value={data.aboutBtnText || ''}
          >
            <button className="inline-block mt-4 px-12 py-4 bg-primary text-background rounded-md text-xl capitalize hover:bg-pink-500 hover:text-white transition-all duration-300">
              {data.aboutBtnText || 'Learn More'}
            </button>
          </EditableElement>
        </div>
      </div>
    </section>
  );
};

export default VisualEditAbout;
