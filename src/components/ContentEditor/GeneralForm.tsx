
import React from 'react';
import { AboutForm } from "./forms/AboutForm";
import { ContactForm } from "./forms/ContactForm";
import { FooterForm } from "./forms/FooterForm";
import { HeroForm } from "./forms/HeroForm";
import { NavbarForm } from "./forms/NavbarForm";
import { PageHeaderForm } from "./forms/PageHeaderForm";
import { ProjectsForm } from "./forms/ProjectsForm";
import { ReviewsForm } from "./forms/ReviewsForm";
import { ServiceForm } from "./forms/ServiceForm";
import { TeamsForm } from "./forms/TeamsForm";
import { ContentData, UpdateContentFunction, UpdateArrayContentFunction, DeleteArrayItemFunction, HandleImageChangeFunction } from './types';

interface GeneralFormProps {
    section: string;
    content: ContentData;
    updateContent: UpdateContentFunction;
    handleImageChange: HandleImageChangeFunction;
    imagePreview: string;
    updateArrayContent: UpdateArrayContentFunction;
    deleteArrayItem: DeleteArrayItemFunction;
}

const GeneralForm: React.FC<GeneralFormProps> = ({
    section,
    content,
    updateContent,
    handleImageChange,
    imagePreview,
    updateArrayContent,
    deleteArrayItem
}) => {
    const formComponents: Record<string, React.ComponentType<any>> = {
        navbar: NavbarForm,
        hero: HeroForm,
        pageheader: PageHeaderForm,
        about: AboutForm,
        service: ServiceForm,
        projects: ProjectsForm,
        teams: TeamsForm,
        reviews: ReviewsForm,
        contact: ContactForm,
        footer: FooterForm,
    };

    const FormComponent = formComponents[section];

    if (!FormComponent) return null;

    return (
        <FormComponent
            content={content}
            updateContent={updateContent}
            handleImageChange={handleImageChange}
            imagePreview={imagePreview}
            updateArrayContent={updateArrayContent}
            deleteArrayItem={deleteArrayItem}
        />
    );
};

export default GeneralForm;
