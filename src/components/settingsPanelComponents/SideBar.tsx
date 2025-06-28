import { useContext, useEffect, useState } from 'react';
import { CiAlignBottom, CiExport } from 'react-icons/ci';
import { GoPeople } from 'react-icons/go';
import { GrServices } from 'react-icons/gr';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { MdOutlineConnectWithoutContact, MdOutlineRateReview, MdOutlineViewCarousel, MdOutlineWebAsset, MdOutlineWorkOutline } from 'react-icons/md';
import { PiNetworkLight } from 'react-icons/pi';
import { RxCross2, RxDashboard, RxHamburgerMenu } from 'react-icons/rx';
import { LayoutContext } from '@/context/LayoutContext';
import { capitalizeFirstLetter } from '@/utils/features';
import { ThemeSelector } from '@/components/ThemeSelector';
import ChangePageModal from '@/components/settingsPanelComponents/ChangePageModal';
import ProjectDetailsModal from '@/components/settingsPanelComponents/ProjectDetailsModal';
import toast from 'react-hot-toast';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const NAV_ITEMS = [{
  id: 'navbar',
  label: 'Navbar',
  icon: MdOutlineWebAsset
}, {
  id: 'hero',
  label: 'Hero',
  icon: MdOutlineViewCarousel
}, {
  id: 'about',
  label: 'About',
  icon: GoPeople
}, {
  id: 'pageheader',
  label: 'PageHeader',
  icon: GoPeople
}, {
  id: 'service',
  label: 'Service',
  icon: GrServices
}, {
  id: 'projects',
  label: 'Projects',
  icon: MdOutlineWorkOutline
}, {
  id: 'teams',
  label: 'Teams',
  icon: PiNetworkLight
}, {
  id: 'reviews',
  label: 'Reviews',
  icon: MdOutlineRateReview
}, {
  id: 'contact',
  label: 'Contact',
  icon: MdOutlineConnectWithoutContact
}, {
  id: 'footer',
  label: 'Footer',
  icon: CiAlignBottom
}, {
  id: 'export',
  label: 'Export',
  icon: CiExport
}, {
  id: 'settings',
  label: 'Settings',
  icon: LiaExchangeAltSolid
}];

interface NavItemsProps {
  label: string;
  icon: any;
  onClick: () => void;
}

const NavItem = ({ label, icon: Icon, onClick }: NavItemsProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        onClick={onClick}
        className="flex items-center justify-center w-12 h-12 bg-black text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-200 border-2 border-lime-400 hover:border-pink-500 transform hover:rotate-2 focus:outline-none relative"
      >
        <Icon size={20} />
      </button>
    </TooltipTrigger>
    <TooltipContent
      side="right"
      className="bg-black text-lime-400 border-2 border-lime-400 font-black uppercase tracking-wide shadow-lg"
      sideOffset={20}
      style={{ zIndex: 10000 }}
    >
      {label}
    </TooltipContent>
  </Tooltip>
);

interface MobileNavbarProps {
  sidebarOpen: boolean;
  handleSidebarOpen: () => void;
}

const MobileNavbar = ({ sidebarOpen, handleSidebarOpen }: MobileNavbarProps) => (
  <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex h-16 items-center justify-between bg-black px-4 border-b-2 border-lime-400">
    <div className="flex items-center gap-2 font-black text-xl text-lime-400">
      <RxDashboard className="h-6 w-6" />
    </div>
    <button
      onClick={handleSidebarOpen}
      className="p-2 bg-black text-lime-400 border-2 border-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-200 transform hover:rotate-2"
    >
      {sidebarOpen ? <RxCross2 className="h-6 w-6" /> : <RxHamburgerMenu className="h-6 w-6" />}
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
    projectPath: ''
  });

  const handleOpenChangePageModal = () => {
    setIsChangingPageModalOpen(!isChangingPageModalOpen);
  };

  const handleSidebarOpen = () => setSidebarOpen(prev => !prev);

  useEffect(() => {
    if (activePage) {
      let capitalisePageName = capitalizeFirstLetter(activePage);
      const activePageLayout = layout.find(item => item.page === capitalisePageName)?.layout || {};
      let filteredMenus = NAV_ITEMS.filter(item => Object.keys(activePageLayout).includes(item.id));
      let lastTwoMenus = NAV_ITEMS.slice(-2);
      filteredMenus = [...filteredMenus, ...lastTwoMenus];
      setActivePageMenus(filteredMenus);
    }
  }, [activePage, layout]);

  const handleExport = () => {
    if (!exportingTheComponents) return;
    if (projectDetails.projectName === '' || projectDetails.projectPath === '') {
      toast.error('Please enter project name and path');
      return;
    }
    exportingTheComponents(projectDetails.projectName, projectDetails.projectPath);
    setOpenProjectDetailsModal(false);
  };

  const handleOpenProjectDetailsModal = () => {
    setOpenProjectDetailsModal(!openProjectDetailsModal);
  };

  return (
    <div className="relative">
      <MobileNavbar sidebarOpen={sidebarOpen} handleSidebarOpen={handleSidebarOpen} />

      {sidebarOpen && (
        <button
          className="fixed inset-0 z-30 bg-black bg-opacity-80 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-20 h-screen transform 
                bg-black transition-transform duration-300 border-r-2 border-lime-400 ease-in-out lg:translate-x-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Header */}
        <div className="hidden lg:flex h-16 items-center justify-center border-b-2 border-lime-400 bg-black">
          <RxDashboard className="h-8 w-8 text-lime-400" />
        </div>

        <div className="flex justify-center items-start pt-4 md:h-[calc(100vh-4rem)]">
          <TooltipProvider delayDuration={300}>
            <nav className="flex flex-col gap-2 items-center max-h-full overflow-y-auto px-2">
              {activePageMenus.map(item => (
                <div key={item.id} className="relative">
                  {item.id === 'export' && exportingTheComponents ? (
                    <Drawer open={openProjectDetailsModal} onOpenChange={setOpenProjectDetailsModal}>
                      <DrawerTrigger asChild>
                        <NavItem
                          label={item.label}
                          icon={item.icon}
                          onClick={() => { }}
                        />
                      </DrawerTrigger>
                      <DrawerContent className="bg-black border-lime-400 border-2">
                        <div className="p-6">
                          <ProjectDetailsModal
                            onSave={handleExport}
                            setProjectDetails={setProjectDetails}
                            projectDetails={projectDetails}
                          />
                        </div>
                      </DrawerContent>
                    </Drawer>
                  ) : item.id === 'settings' ? (
                    <Drawer open={isChangingPageModalOpen} onOpenChange={setIsChangingPageModalOpen}>
                      <DrawerTrigger asChild>
                        <NavItem
                          label={item.label}
                          icon={item.icon}
                          onClick={() => { }}
                        />
                      </DrawerTrigger>
                      <DrawerContent className="bg-black border-lime-400 border-2">
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border-r-2 border-lime-400 pr-6">
                            <ChangePageModal />
                          </div>
                          <div>
                            <ThemeSelector />
                          </div>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  ) : (
                    <NavItem
                      label={item.label}
                      icon={item.icon}
                      onClick={() => toggleModal(item.id)}
                    />
                  )}
                </div>
              ))}
            </nav>
          </TooltipProvider>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;