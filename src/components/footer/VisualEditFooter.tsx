
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { FooterData } from '@/types/global';

interface VisualEditFooterProps {
  data?: FooterData;
}

const VisualEditFooter: React.FC<VisualEditFooterProps> = ({ data }) => {
  if (!data) return null;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <EditableElement
              section="footer"
              field="companyName"
              type="text"
              value={data.companyName || ''}
            >
              <h3 className="text-xl font-black text-lime-400 mb-4">
                {data.companyName || 'COMPANY'}
              </h3>
            </EditableElement>
            
            <EditableElement
              section="footer"
              field="description"
              type="text"
              value={data.description || ''}
            >
              <p className="text-gray-300 mb-4">
                {data.description || 'Company description goes here.'}
              </p>
            </EditableElement>
          </div>

          {/* Links Sections */}
          {data.linksData?.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <EditableElement
                section="footer"
                field={`linksData.${sectionIndex}.title`}
                type="text"
                value={section.title || ''}
              >
                <h4 className="text-lg font-bold mb-4">
                  {section.title}
                </h4>
              </EditableElement>
              
              <ul className="space-y-2">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <EditableElement
                      section="footer"
                      field={`linksData.${sectionIndex}.links.${linkIndex}.name`}
                      type="text"
                      value={link.name || ''}
                    >
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-lime-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </EditableElement>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {data.companyName || 'Company'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VisualEditFooter;
