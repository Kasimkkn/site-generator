
import React, { useContext } from 'react';
import CommonModal from '@/components/settingsPanelComponents/CommonModal';
import { LayoutContext } from '@/context/LayoutContext';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Service from '@/pages/Service';
import SettingAboutUs from '@/pages/settings/SettingAboutUs';
import SettingContactUs from '@/pages/settings/SettingContactUs';
import SettingFooter from '@/pages/settings/SettingFooter';
import SettingHero from '@/pages/settings/SettingHero';
import SettingNavbar from '@/pages/settings/SettingNavbar';
import SettingPageHeader from '@/pages/settings/SettingPageHeader';
import SettingProjects from '@/pages/settings/SettingProjects';
import SettingReviews from '@/pages/settings/SettingReviews';
import SettingService from '@/pages/settings/SettingService';
import SettingTeam from '@/pages/settings/SettingTeam';

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
