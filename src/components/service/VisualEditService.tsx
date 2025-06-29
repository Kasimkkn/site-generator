
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { ServiceData } from '@/types/global';

interface VisualEditServiceProps {
  data?: ServiceData;
}

const VisualEditService: React.FC<VisualEditServiceProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <EditableElement
            section="service"
            field="serviceTitle"
            type="text"
            value={data.serviceTitle || ''}
          >
            <h2 className="text-4xl font-black text-primary mb-4">
              {data.serviceTitle}
            </h2>
          </EditableElement>
          
          <EditableElement
            section="service"
            field="serviceDescription"
            type="text"
            value={data.serviceDescription || ''}
          >
            <p className="text-lg text-text max-w-3xl mx-auto">
              {data.serviceDescription}
            </p>
          </EditableElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.serviceCardsData?.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border-2 border-lime-400 rounded-lg p-6 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <EditableElement
                section="service"
                field={`serviceCardsData.${index}.title`}
                type="text"
                value={service.title || ''}
              >
                <h3 className="text-xl font-bold text-lime-400 mb-4">
                  {service.title}
                </h3>
              </EditableElement>
              
              <EditableElement
                section="service"
                field={`serviceCardsData.${index}.text`}
                type="text"
                value={service.text || ''}
              >
                <p className="text-gray-300 mb-6">
                  {service.text}
                </p>
              </EditableElement>
              
              <EditableElement
                section="service"
                field={`serviceCardsData.${index}.price`}
                type="text"
                value={service.price || ''}
              >
                <div className="text-2xl font-black text-pink-500">
                  {service.price}
                </div>
              </EditableElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualEditService;
