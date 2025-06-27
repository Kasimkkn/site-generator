import { node } from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import intialData from '../data/intialData';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {

    const [usedComponents, setUsedComponents] = useState([]);

    const [layout, setLayout] = useState([
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

    const [activePage, setActivePage] = useState('home');

    const [openDifferentPages, setOpenDifferentPages] = useState({
        home: true,
        about: false,
        service: false,
        contact: false
    });

    const [content, setContent] = useState(intialData);

    const [modal, setModal] = useState({
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

    const [editModal, setEditModal] = useState({
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

    const exportingTheComponents = async (projectName = "divine-dev-hub", projectPath = "K:/divine-dev-hub/") => {
        try {
            const appTheme = JSON.parse(localStorage.getItem("app-theme")) || {};

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
            toast.error("Error generating project: " + error.message);
        }
    };

    const handleChange = (page, section, value) => {
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

    const toggleModal = (modalName) => {
        setModal(prev => ({
            ...prev,
            [modalName]: !prev[modalName]
        }));
    };

    const toggleEditModal = (modalName) => {
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
    ]);

    return (
        <LayoutContext.Provider value={contextValue}>
            <Toaster />
            {children}
        </LayoutContext.Provider>
    );
};

LayoutProvider.propTypes = {
    children: node
};

export { LayoutContext, LayoutProvider };

