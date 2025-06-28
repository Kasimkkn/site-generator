import { useContext, useEffect, useState } from 'react';
import { CiAlignBottom, CiExport } from 'react-icons/ci';
import { GoPeople } from 'react-icons/go';
import { GrServices } from 'react-icons/gr';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import {
    MdOutlineConnectWithoutContact,
    MdOutlineRateReview,
    MdOutlineViewCarousel,
    MdOutlineWebAsset,
    MdOutlineWorkOutline
} from 'react-icons/md';
import { PiNetworkLight } from 'react-icons/pi';
import {
    RxCross2,
    RxDashboard,
    RxHamburgerMenu
} from 'react-icons/rx';
import { LayoutContext } from '@/context/LayoutContext';
import { capitalizeFirstLetter } from '@/utils/features';
import { ThemeSelector } from '@/components/ThemeSelector';
import ChangePageModal from '@/components/settingsPanelComponents/ChangePageModal';
import CommonModal from '@/components/settingsPanelComponents/CommonModal';
import ProjectDetailsModal from '@/components/settingsPanelComponents/ProjectDetailsModal';
import SmallModal from '@/components/settingsPanelComponents/SmallModal';
import toast from 'react-hot-toast';

export const NAV_ITEMS = [
    { id: 'navbar', label: 'Navbar', icon: MdOutlineWebAsset },
    { id: 'hero', label: 'Hero', icon: MdOutlineViewCarousel },
    { id: 'about', label: 'About', icon: GoPeople },
    { id: 'pageheader', label: 'PageHeader', icon: GoPeople },
    { id: 'service', label: 'Service', icon: GrServices },
    { id: 'projects', label: 'Projects', icon: MdOutlineWorkOutline },
    { id: 'teams', label: 'Teams', icon: PiNetworkLight },
    { id: 'reviews', label: 'Reviews', icon: MdOutlineRateReview },
    { id: 'contact', label: 'Contact', icon: MdOutlineConnectWithoutContact },
    { id: 'footer', label: 'Footer', icon: CiAlignBottom },
    { id: 'export', label: 'Export', icon: CiExport },
    { id: 'settings', label: 'settings', icon: LiaExchangeAltSolid },
];


interface NavItemsProps {
    label: string;
    icon: any;
    onClick: () => void
}
const NavItem = ({ label, icon: Icon, onClick }: NavItemsProps) => (
    <button
        onClick={onClick}
        className="group relative flex items-center text-base gap-3 rounded-lg py-3 px-4 font-medium transition-all duration-200 text-text hover:bg-primary hover:text-background focus:outline-none"
    >
        {Icon && <Icon size={20} />}
        <span>{label}</span>
    </button>
);

interface MobileNavbarProps {
    sidebarOpen: boolean;
    handleSidebarOpen: () => void;
}

const MobileNavbar = ({ sidebarOpen, handleSidebarOpen }: MobileNavbarProps) => (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-20 flex h-16 items-center justify-between bg-background px-4 shadow-sm">
        <div className="flex items-center gap-2 font-semibold text-xl">
            <RxDashboard className="h-6 w-6" />
            <span>Dashboard</span>
        </div>
        <button
            onClick={handleSidebarOpen}
            className="rounded-lg p-2 hover:bg-gray-100 focus:outline-none"
        >
            {sidebarOpen ? (
                <RxCross2 className="h-6 w-6" />
            ) : (
                <RxHamburgerMenu className="h-6 w-6" />
            )}
        </button>
    </div>
);


const Sidebar = () => {
    const { toggleModal, exportingTheComponents, layout, activePage } = useContext(LayoutContext);
    const [activePageMenus, setActivePageMenus] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isChangingPageModalOpen, setIsChangingPageModalOpen] = useState(false);
    const [openProjectDetailsModal, setOpenProjectDetailsModal] = useState(false);
    const [projectDetails, setProjectDetails] = useState({
        projectName: '',
        projectPath: '',
    });
    const handleOpenChangePageModal = () => {
        setIsChangingPageModalOpen(!isChangingPageModalOpen)
    };
    const handleSidebarOpen = () => setSidebarOpen((prev) => !prev);


    useEffect(() => {
        if (activePage) {
            let capitalisePageName = capitalizeFirstLetter(activePage);
            const activePageLayout = layout.find((item) => item.page === capitalisePageName)?.layout || {};
            let filteredMenus = NAV_ITEMS.filter((item) => Object.keys(activePageLayout).includes(item.id));
            let lastTwoMenus = NAV_ITEMS.slice(-2);
            filteredMenus = [...filteredMenus, ...lastTwoMenus];
            setActivePageMenus(filteredMenus);
        }
    }, [activePage, layout]);

    const handleExport = () => {
        if (!exportingTheComponents) return
        if (projectDetails.projectName === '' || projectDetails.projectPath === '') {
            toast.error('Please enter project name and path');
            return
        }
        exportingTheComponents(projectDetails.projectName, projectDetails.projectPath);
        setOpenProjectDetailsModal(false);
    }

    const handleOpenProjectDetailsModal = () => {
        setOpenProjectDetailsModal(!openProjectDetailsModal);
    }

    return (
        <div className="relative">
            <MobileNavbar sidebarOpen={sidebarOpen} handleSidebarOpen={handleSidebarOpen} />
            {sidebarOpen && (
                <button
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 w-48 h-screen transform overflow-y-auto 
                    bg-white transition-transform duration-300 border-r border-gray-300 ease-in-out lg:translate-x-0
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="hidden lg:flex h-16 items-center gap-2 px-6 border-b">
                    <div className="flex items-center gap-2 font-semibold text-xl">
                        <RxDashboard className="h-6 w-6" />
                        <span>Dashboard</span>
                    </div>
                </div>

                <div className="flex-1 px-4 py-4">
                    <nav className="flex flex-col gap-1">
                        {activePageMenus.map((item) => (
                            <li key={item.id} className="list-none">
                                {item.id === 'export' && exportingTheComponents ? (
                                    <button
                                        onClick={handleOpenProjectDetailsModal}
                                        className="group relative flex items-center text-base gap-3 rounded-lg py-3 px-4 font-medium transition-all duration-200 text-text hover:bg-primary hover:text-background focus:outline-none"
                                    >
                                        {item.icon && <item.icon size={20} />}
                                        <span>{item.label}</span>
                                    </button>
                                ) :
                                    item.id === 'settings' ? (
                                        <button
                                            onClick={handleOpenChangePageModal}
                                            className="group relative flex items-center text-base gap-3 rounded-lg py-3 px-4 font-medium transition-all duration-200 text-text hover:bg-primary hover:text-background focus:outline-none"
                                        >
                                            {item.icon && <item.icon size={20} />}
                                            <span>{item.label}</span>
                                        </button>
                                    ) :
                                        (

                                            <NavItem
                                                label={item.label}
                                                icon={item.icon}
                                                onClick={() => toggleModal(item.id)}
                                            />
                                        )}
                            </li>
                        ))}
                    </nav>
                </div>
            </aside>

            {isChangingPageModalOpen && (
                <CommonModal width='max-w-7xl' height='h-screen' marginLeft='lg:ml-56' closeModal={handleOpenChangePageModal} >
                    <div className='grid grid-cols-4'>
                        <div className='border-r-2 self-center'>
                            <ChangePageModal />
                        </div>
                        <div className='border-r-2 self-center'>
                            <ThemeSelector />
                        </div>
                    </div>
                </CommonModal>
            )}

            {openProjectDetailsModal && (
                <SmallModal onClose={handleOpenProjectDetailsModal} >
                    <div className='p-2'>
                        <ProjectDetailsModal onSave={handleExport} setProjectDetails={setProjectDetails} projectDetails={projectDetails} />
                    </div>
                </SmallModal>
            )}
        </div>
    );
};

export default Sidebar;
