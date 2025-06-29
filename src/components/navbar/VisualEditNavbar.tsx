
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { NavbarData } from '@/types/global';

interface VisualEditNavbarProps {
  data?: NavbarData;
}

const VisualEditNavbar: React.FC<VisualEditNavbarProps> = ({ data }) => {
  if (!data) return null;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Company Name */}
          <div className="flex items-center">
            {data.logo ? (
              <EditableElement
                section="navbar"
                field="logo"
                type="image"
                value={data.logo || ''}
              >
                <img src={data.logo} alt="Logo" className="h-8 w-auto" />
              </EditableElement>
            ) : (
              <EditableElement
                section="navbar"
                field="companyName"
                type="text"
                value={data.companyName || ''}
              >
                <span className="text-xl font-black text-primary">
                  {data.companyName || 'COMPANY'}
                </span>
              </EditableElement>
            )}
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {data.menus?.map((menu, index) => (
              <EditableElement
                key={index}
                section="navbar"
                field={`menus.${index}.title`}
                type="text"
                value={menu.title || ''}
              >
                <a
                  href={menu.path}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {menu.title}
                </a>
              </EditableElement>
            ))}
          </div>

          {/* CTA Button */}
          <EditableElement
            section="navbar"
            field="buttonText"
            type="button"
            value={data.buttonText || ''}
          >
            <button className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/80 transition-colors">
              {data.buttonText || 'Get Started'}
            </button>
          </EditableElement>
        </div>
      </div>
    </nav>
  );
};

export default VisualEditNavbar;
