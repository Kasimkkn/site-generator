
import { LayoutItem, ContentItem } from '../types/global';

export const initialLayout: LayoutItem[] = [
    {
        page: "Home",
        layout: {
            navbar: "Navbar",
            hero: "Hero",
            about: "AboutUs",
            service: "Service",
            projects: "Projects",
            teams: "Teams",
            reviews: "Reviews",
            contact: "ContactUs1",
            footer: "Footer",
        },
    },
    {
        page: "About",
        layout: {
            navbar: "Navbar",
            pageheader: "PageHeader",
            about: "AboutUs",
            teams: "Teams",
            footer: "Footer",
        },
    },
    {
        page: "Service",
        layout: {
            navbar: "Navbar",
            pageheader: "PageHeader",
            service: "Service",
            footer: "Footer",
        },
    },
    {
        page: "Contact",
        layout: {
            navbar: "Navbar",
            pageheader: "PageHeader",
            contact: "ContactUs1",
            footer: "Footer",
        },
    },
];

export const initialContent: ContentItem[] = [
    {
        page: "Home",
        content: {
            navbar: {
                logo: "https://flowbite.com/docs/images/logo.svg",
                companyName: "Flowbite",
                navbarData: [
                    { title: "Home", path: "/" },
                    { title: "About", path: "/about" },
                    { title: "Services", path: "/service" },
                    { title: "Contact", path: "/contact" },
                ],
            },
            hero: {
                heroTitle: "We invest in the world's potential",
                heroDescription: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
                image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
                ctaButton: {
                    text: "Get started",
                    url: "#",
                },
            },
            about: {
                aboutTitle: "We didn't reinvent the wheel",
                aboutDescription: "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.",
                aboutBtnText: "Learn More",
                image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png",
                aboutCardsData: [
                    { title: "10", text: "Years experience" },
                    { title: "2", text: "Years experience" },
                    { title: "4", text: "Years experience" },
                    { title: "5", text: "Years experience" },
                ],
            },
            service: {
                serviceTitle: "Our Services",
                serviceDescription: "We provide the best services for your business",
                serviceCardsData: [
                    { title: "Web Development", description: "We build modern web applications", color: "primary" },
                    { title: "Mobile Development", description: "We build mobile applications", color: "primary" },
                    { title: "UI/UX Design", description: "We design beautiful user interfaces", color: "primary" },
                    { title: "SEO", description: "We optimize your website for search engines", color: "primary" },
                ],
            },
            projects: {
                projectTitle: "Our Projects",
                projectDescription: "Check out our latest projects",
                projectsCardsData: [
                    {
                        id: "1",
                        title: "Project 1",
                        description: "This is project 1",
                        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
                        link: "#",
                    },
                    {
                        id: "2",
                        title: "Project 2",
                        description: "This is project 2",
                        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
                        link: "#",
                    },
                ],
            },
            teams: {
                teamsTitle: "Our Team",
                teamsDescription: "Meet our amazing team",
                teamsCardsData: [
                    {
                        id: "1",
                        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
                        name: "Karen Nelson",
                        title: "CEO",
                        desc: "Karen is the CEO of our company",
                        linkedin: "#",
                        twitter: "#",
                        github: "#",
                    },
                ],
            },
            reviews: {
                reviewsTitle: "What our customers say",
                reviewsDescription: "Read what our customers have to say about us",
                reviewsCardsData: [
                    {
                        id: "1",
                        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
                        name: "Karen Nelson",
                        title: "CEO",
                        review: "Great service!",
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                    },
                ],
            },
            contact: {
                contactTitle: "Contact Us",
                contactDescription: "Get in touch with us",
                contactsData: [
                    { title: "Email", contact: "contact@company.com", icon: "📧" },
                    { title: "Phone", contact: "+1 234 567 890", icon: "📞" },
                ],
            },
            footer: {
                logo: "https://flowbite.com/docs/images/logo.svg",
                companyName: "Flowbite",
                description: "Flowbite is a library of components built on top of the utility-first Tailwind CSS framework.",
                linksData: [
                    {
                        id: "1",
                        title: "Company",
                        links: [
                            { id: "1", title: "About", url: "/about" },
                            { id: "2", title: "Careers", url: "/careers" },
                        ],
                    },
                ],
            },
        },
    },
    // ... repeat similar structure for other pages
];
