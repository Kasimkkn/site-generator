import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { getInitialCardData } from "../../utils/cardInitialData";
import { AboutCardFields } from "./cards/AboutCardFields";
import { ProjectCardFields } from "./cards/ProjectCardFields";
import { ReviewCardFields } from "./cards/ReviewCardFields";
import { TeamCardFields } from "./cards/TeamCardFields";
import { ServiceCardFields } from "./cards/ServiceCardFields";
import { ContactCardFields } from "./cards/ContactCardFields";
import { string, object, func } from 'prop-types';
import { useState } from "react";
import ConfirmModal from "../settingsPanelComponents/ConfirmModal";

const CardsForm = ({
    section,
    content,
    updateArrayContent,
    handleImageChange,
    deleteArrayItem
}) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        indexToDelete: null
    });

    const getCardsData = () => {
        const cardsDataMap = {
            about: content.about?.aboutCardsData,
            service: content.service?.serviceCardsData,
            projects: content.projects?.projectsCardsData,
            teams: content.teams?.teamsCardsData,
            reviews: content.reviews?.reviewsCardsData,
            contact: content.contact?.contactsData
        };

        Object.keys(cardsDataMap).forEach((key) => {
            if (cardsDataMap[key] && cardsDataMap[key].length > 0) {
                cardsDataMap[key] = cardsDataMap[key].filter((card) => card.title || card.description || card.icon);
            }
        });

        return cardsDataMap[section];
    };

    const cardComponents = {
        about: AboutCardFields,
        service: ServiceCardFields,
        projects: ProjectCardFields,
        teams: TeamCardFields,
        reviews: ReviewCardFields,
        contact: ContactCardFields
    };

    const cardsData = getCardsData();
    if (!cardsData) return null;

    const CardFields = cardComponents[section];
    if (!CardFields) return null;

    const openConfirmModal = (index) => {
        setModalState({
            isOpen: true,
            indexToDelete: index
        });
    };

    const closeConfirmModal = () => {
        setModalState({
            isOpen: false,
            indexToDelete: null
        });
    };

    const handleDeleteConfirm = () => {
        if (modalState.indexToDelete !== null) {
            deleteArrayItem(section, `${section}CardsData`, modalState.indexToDelete);
            closeConfirmModal();
        }
    };

    const scrollToMessage = (index) => {
        setTimeout(() => {
            const element = document.getElementById(`card-${index}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    return (
        <>
            <div className="space-y-4 mt-4 flex flex-col">
                <button
                    onClick={() => {
                        updateArrayContent(section, `${section}CardsData`, -1, getInitialCardData(section))
                        scrollToMessage(cardsData.length);
                    }}
                    className="self-end flex items-center px-3 py-2 text-sm font-medium text-background bg-primary rounded-md "
                >
                    <FiPlusCircle className="h-4 w-4 mr-2" />
                    Add {section.charAt(0).toUpperCase().concat(section.slice(1))}
                </button>
                {cardsData.map((card, index) => (
                    <div id={`card-${index}`} key={card.id || index} className="border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium">{section.charAt(0).toUpperCase().concat(section.slice(1))} {index + 1}</h3>
                            <button
                                onClick={() => openConfirmModal(index)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                            >
                                <FiTrash2 className="h-5 w-5" />
                            </button>
                        </div>
                        <CardFields
                            card={card}
                            index={index}
                            updateArrayContent={updateArrayContent}
                            handleImageChange={handleImageChange}
                        />
                    </div>
                ))}
            </div>
            <ConfirmModal
                isOpen={modalState.isOpen}
                message="Are you sure you want to delete this item?"
                onConfirm={handleDeleteConfirm}
                onCancel={closeConfirmModal}
            />
        </>
    );
};

CardsForm.propTypes = {
    section: string.isRequired,
    content: object.isRequired,
    updateArrayContent: func.isRequired,
    handleImageChange: func.isRequired,
    deleteArrayItem: func.isRequired
};

export default CardsForm;