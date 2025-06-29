
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { ContactData } from '@/types/global';

interface VisualEditContactProps {
  data?: ContactData;
}

const VisualEditContact: React.FC<VisualEditContactProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <EditableElement
            section="contact"
            field="contactTitle"
            type="text"
            value={data.contactTitle || ''}
          >
            <h2 className="text-4xl font-black text-primary mb-4">
              {data.contactTitle}
            </h2>
          </EditableElement>
          
          <EditableElement
            section="contact"
            field="contactDescription"
            type="text"
            value={data.contactDescription || ''}
          >
            <p className="text-lg text-text max-w-3xl mx-auto">
              {data.contactDescription}
            </p>
          </EditableElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.contactsData?.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-primary text-3xl mb-4">
                {contact.icon || '📞'}
              </div>
              
              <EditableElement
                section="contact"
                field={`contactsData.${index}.title`}
                type="text"
                value={contact.title || ''}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
              </EditableElement>
              
              <EditableElement
                section="contact"
                field={`contactsData.${index}.contact`}
                type="text"
                value={contact.contact || ''}
              >
                <p className="text-gray-600">
                  {contact.contact}
                </p>
              </EditableElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualEditContact;
