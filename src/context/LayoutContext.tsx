
import { createContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import intialData from '../data/intialData';

interface PageLayout {
    page: string;
    layout: {
        [key: string]: string;
    };
}

interface ContentPage {
    id?: string;
    page: string;
    content: any;
}

interface UsedComponent {
    name: string;
    path: string;
    parentName: string;
}

interface OpenPages {
    home: boolean;
    about: boolean;
    service: boolean;
    contact: boolean;
}

interface ModalState {
    navbar: boolean;
    hero: boolean;
    pageheader: boolean;
    about: boolean;
    service: boolean;
    projects: boolean;
    teams: boolean;
    reviews: boolean;
    contact: boolean;
    footer: boolean;
}

interface LayoutContextType {
    layout: PageLayout[];
    setLayout: React.Dispatch<React.SetStateAction<PageLayout[]>>;
    content: ContentPage[];
    setContent: React.Dispatch<React.SetStateAction<ContentPage[]>>;
    modal: ModalState;
    editModal: ModalState;
    toggleModal: (modalName: keyof ModalState) => void;
    toggleEditModal: (modalName: keyof ModalState) => void;
    handleChange: (page: string, section: string, value: string) => void;
    exportingTheComponents: (projectName?: string, projectPath?: string) => Promise<void>;
    openDifferentPages: OpenPages;
    setOpenDifferentPages: React.Dispatch<React.SetStateAction<OpenPages>>;
    activePage: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const LayoutContext = createContext<LayoutContextType>({} as LayoutContextType);

interface LayoutProviderProps {
    children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
    const [usedComponents, setUsedComponents] = useState<UsedComponent[]>([]);

    const [layout, setLayout] = useState<PageLayout[]>([
        {
            page: 'Home',
            layout: {
                navbar: 'Navbar',
                hero: 'Hero',
                about: 'AboutUs',
                service: 'Service',
                projects: 'Projects',
                teams: 'Teams',
                reviews: 'Reviews',
                contact: 'ContactUs1',
                footer: 'Footer'
            }
        },
        {
            page: 'About',
            layout: {
                navbar: 'Navbar',
                pageheader: 'PageHeader',
                about: 'AboutUs',
                service: 'Service',
                teams: 'Teams',
                footer: 'Footer'
            }
        },
        {
            page: 'Service',
            layout: {
                navbar: 'Navbar',
                pageheader: 'PageHeader',
                service: 'Service',
                footer: 'Footer'
            }
        },
        {
            page: 'Contact',
            layout: {
                navbar: 'Navbar',
                pageheader: 'PageHeader',
                contact: 'ContactUs1',
                footer: 'Footer'
            }
        }
    ]);

    const [activePage, setActivePage] = useState<string>('home');

    const [openDifferentPages, setOpenDifferentPages] = useState<OpenPages>({
        home: true,
        about: false,
        service: false,
        contact: false
    });

    const [content, setContent] = useState<ContentPage[]>(intialData);

    const [modal, setModal] = useState<ModalState>({
        navbar: false,
        hero: false,
        pageheader: false,
        about: false,
        service: false,
        projects: false,
        teams: false,
        reviews: false,
        contact: false,
        footer: false
    });

    const [editModal, setEditModal] = useState<ModalState>({
        navbar: false,
        hero: false,
        pageheader: false,
        about: false,
        service: false,
        projects: false,
        teams: false,
        reviews: false,
        contact: false,
        footer: false
    });

    useEffect(() => {
        const allComponents = layout.flatMap((page) =>
            Object.entries(page.layout).map(([key, value]) => ({
                name: value,
                path: `K:/divine-dev-hub/custom-site-generator/src/components/${key}/${value}.jsx`,
                parentName: key
            }))
        );

        const uniqueComponents = Array.from(
            new Map(allComponents.map((comp) => [comp.name, comp])).values()
        );

        setUsedComponents(uniqueComponents);
    }, [layout]);

    const exportingTheComponents = async (projectName = "divine-dev-hub", projectPath = "K:/divine-dev-hub/"): Promise<void> => {
        try {
            const appTheme = JSON.parse(localStorage.getItem("app-theme") || "{}");

            const formattedContent = content.map((pageData) => {
                const pageLayout = layout.find((item) => item.page === pageData.page)?.layout || {};

                return {
                    id: pageData.id,
                    page: pageData.page,
                    content: JSON.stringify(pageData.content),
                    layout: JSON.stringify(pageLayout),
                };
            });

            toast.promise(
                fetch("http://localhost:3000/generate-project", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        projectName: projectName,
                        projectPath: projectPath,
                        componentsList: usedComponents,
                        styles: {
                            primary: appTheme.primary || "#3B82F6",
                            background: appTheme.background || "#FFFFFF",
                            text: appTheme.text || "#111827",
                        },
                        content: formattedContent,
                    })

                }).then((res) => res.json()),
                {
                    loading: "Generating project...",
                    success: "Project generated successfully!",
                    error: "Failed to generate project",
                }
            );
        } catch (error) {
            console.log('error', error);
            toast.error("Error generating project: " + (error as Error).message);
        }
    };

    const handleChange = (page: string, section: string, value: string): void => {
        console.log('page', page, 'section', section, 'value', value);
        setLayout((prev) =>
            prev.map(pageLayout =>
                pageLayout.page.toLowerCase() === page.toLowerCase()
                    ? {
                        ...pageLayout,
                        layout: {
                            ...pageLayout.layout,
                            [section]: value
                        }
                    }
                    : pageLayout
            )
        );
    };

    const toggleModal = (modalName: keyof ModalState): void => {
        setModal(prev => ({
            ...prev,
            [modalName]: !prev[modalName]
        }));
    };

    const toggleEditModal = (modalName: keyof ModalState): void => {
        setEditModal(prev => ({
            ...prev,
            [modalName]: !prev[modalName]
        }));
    };

    const contextValue = useMemo(() => ({
        layout,
        setLayout,
        content,
        setContent,
        modal,
        editModal,
        toggleModal,
        toggleEditModal,
        handleChange,
        exportingTheComponents,
        openDifferentPages,
        setOpenDifferentPages,
        activePage,
        setActivePage,
    }), [
        layout,
        content,
        modal,
        editModal,
        openDifferentPages,
        activePage,
    ]);

    return (
        <LayoutContext.Provider value={contextValue}>
            <Toaster />
            {children}
        </LayoutContext.Provider>
    );
};

export { LayoutContext, LayoutProvider };
export type { LayoutContextType };
