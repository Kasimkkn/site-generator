
import React, { useContext } from 'react';
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
import { Drawer, DrawerContent } from '@/components/ui/drawer';

const Settings: React.FC = () => {
    const { modal, toggleModal, openDifferentPages } = useContext(LayoutContext);

    return (
        <div className='relative'>
            {openDifferentPages.home && <Home />}
            {openDifferentPages.about && <About />}
            {openDifferentPages.service && <Service />}
            {openDifferentPages.contact && <Contact />}
            
            {/* Modern Bottom Drawer Modals */}
            <Drawer open={modal?.navbar || false} onOpenChange={() => toggleModal('navbar')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingNavbar />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.hero || false} onOpenChange={() => toggleModal('hero')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingHero />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.pageheader || false} onOpenChange={() => toggleModal('pageheader')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingPageHeader />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.about || false} onOpenChange={() => toggleModal('about')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingAboutUs />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.service || false} onOpenChange={() => toggleModal('service')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingService />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.projects || false} onOpenChange={() => toggleModal('projects')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingProjects />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.teams || false} onOpenChange={() => toggleModal('teams')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingTeam />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.reviews || false} onOpenChange={() => toggleModal('reviews')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingReviews />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.contact || false} onOpenChange={() => toggleModal('contact')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingContactUs />
                    </div>
                </DrawerContent>
            </Drawer>

            <Drawer open={modal?.footer || false} onOpenChange={() => toggleModal('footer')}>
                <DrawerContent className="bg-black border-lime-400 border-2">
                    <div className="p-6">
                        <SettingFooter />
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default Settings;
