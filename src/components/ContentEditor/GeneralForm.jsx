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
import { string, object, func } from 'prop-types'
const GeneralForm = ({
    section,
    content,
    updateContent,
    handleImageChange,
    imagePreview,
    updateArrayContent,
    deleteArrayItem
}) => {
    const formComponents = {
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

GeneralForm.propTypes = {
    section: string.isRequired,
    content: object.isRequired,
    updateContent: func.isRequired,
    handleImageChange: func.isRequired,
    imagePreview: string.isRequired,
    updateArrayContent: func.isRequired,
    deleteArrayItem: func.isRequired
};

export default GeneralForm;