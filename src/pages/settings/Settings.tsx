
import React, { useContext } from 'react';
import CommonModal from '../../components/settingsPanelComponents/CommonModal';
import { LayoutContext } from '../../context/LayoutContext';
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import Service from '../Service';
import SettingAboutUs from './SettingAboutUs';
import SettingContactUs from './SettingContactUs';
import SettingFooter from './SettingFooter';
import SettingHero from './SettingHero';
import SettingNavbar from './SettingNavbar';
import SettingPageHeader from './SettingPageHeader';
import SettingProjects from './SettingProjects';
import SettingReviews from './SettingReviews';
import SettingService from './SettingService';
import SettingTeam from './SettingTeam';

const Settings: React.FC = () => {
    const { modal, toggleModal, openDifferentPages } = useContext(LayoutContext);
    
    return (
        <div className='relative'>
            {openDifferentPages.home && (
                <Home />
            )}
            {openDifferentPages.about && (
                <About />
            )}
            {openDifferentPages.service && (
                <Service />
            )}
            {openDifferentPages.contact && (
                <Contact />
            )}
            {modal?.navbar && (
                <CommonModal closeModal={() => toggleModal('navbar')}>
                    <SettingNavbar />
                </CommonModal>
            )}
            {modal?.hero && (
                <CommonModal closeModal={() => toggleModal('hero')}>
                    <SettingHero />
                </CommonModal>
            )}
            {modal?.pageheader && (
                <CommonModal closeModal={() => toggleModal('pageheader')}>
                    <SettingPageHeader />
                </CommonModal>
            )}
            {modal?.about && (
                <CommonModal closeModal={() => toggleModal('about')}>
                    <SettingAboutUs />
                </CommonModal>
            )}
            {modal?.service && (
                <CommonModal closeModal={() => toggleModal('service')}>
                    <SettingService />
                </CommonModal>
            )}
            {modal?.projects && (
                <CommonModal closeModal={() => toggleModal('projects')}>
                    <SettingProjects />
                </CommonModal>
            )}
            {modal?.teams && (
                <CommonModal closeModal={() => toggleModal('teams')}>
                    <SettingTeam />
                </CommonModal>
            )}
            {modal?.reviews && (
                <CommonModal closeModal={() => toggleModal('reviews')}>
                    <SettingReviews />
                </CommonModal>
            )}
            {modal?.contact && (
                <CommonModal closeModal={() => toggleModal('contact')}>
                    <SettingContactUs />
                </CommonModal>
            )}
            {modal?.footer && (
                <CommonModal closeModal={() => toggleModal('footer')}>
                    <SettingFooter />
                </CommonModal>
            )}
        </div>
    );
};

export default Settings;
