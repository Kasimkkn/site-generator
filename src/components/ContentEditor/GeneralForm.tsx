
import React from 'react';
import { AboutForm } from "@/components/ContentEditor/forms/AboutForm";
import { ContactForm } from "@/components/ContentEditor/forms/ContactForm";
import { FooterForm } from "@/components/ContentEditor/forms/FooterForm";
import { HeroForm } from "@/components/ContentEditor/forms/HeroForm";
import { NavbarForm } from "@/components/ContentEditor/forms/NavbarForm";
import { PageHeaderForm } from "@/components/ContentEditor/forms/PageHeaderForm";
import { ProjectsForm } from "@/components/ContentEditor/forms/ProjectsForm";
import { ReviewsForm } from "@/components/ContentEditor/forms/ReviewsForm";
import { ServiceForm } from "@/components/ContentEditor/forms/ServiceForm";
import { TeamsForm } from "@/components/ContentEditor/forms/TeamsForm";
import { ContentData, UpdateContentFunction, UpdateArrayContentFunction, DeleteArrayItemFunction, HandleImageChangeFunction } from '@/components/ContentEditor/types';

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
