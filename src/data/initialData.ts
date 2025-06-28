
import { LayoutItem, ContentItem } from '@/types/global';

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

const HomeData = {
    navbar: {
        logo: "https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg",
        menus: [
            { title: "Home", path: "/" },
            { title: "About Us", path: "/about" },
            { title: "Services", path: "/service" },
            { title: "Contact Us", path: "/contact" }
        ],
        buttonText: 'Contact Us'
    },
    hero: {
        image: 'https://img.freepik.com/free-vector/3d-geometric-cubic-grid-layout-vector-design_1017-47107.jpg?semt=ais_hybrid',
        heroTitle: 'Build your SaaS exactly how you want',
        heroDescription: '                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
        ctaButton: {
            text: 'Get started',
            url: '#'
        }
    },
    about: {
        image: 'https://images.stockcake.com/public/5/1/0/510569fc-8155-459b-b879-a185d45da6b3_large/digital-grid-sphere-stockcake.jpg',
        aboutTitle: 'We will provide you the best work which you dreamt for!',
        aboutDescription: 'At Software Company, we harness the power of technology to create innovative solutions that drive business success. From dynamic websites to transformative mobile apps and cutting-edge AI, were your partners innavigating the digital landscape',
        aboutBtnText: 'Read More',
        aboutCardsData: [
            { title: "15+", text: "years of experience" },
            { title: "1500+", text: "project completed" },
            { title: "790+", text: "satisfied clients" },
            { title: "100+", text: "active developers" }
        ]
    },
    service: {
        serviceTitle: 'Our Services',
        serviceDescription: 'Here is a few of the awesome Services we provide.',
        serviceCardsData: [
            {
                id: 1,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FXVeXoG8CGEqTTVn9ZmDQQWWavi46x0KYw&s",
                title: "APP Development",
                description: "A decentralized application (app) is an application built on a decentralized network that combines a smart contract and a frontend user interface."
            },
            {
                id: 2,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rodvePAaRHuilr1xk-MY7uKimhnl2ecuIg&s",
                title: "Web 3.0 Development",

                description: "Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web."
            },
            {
                id: 4,
                image: "https://longreads.com/wp-content/uploads/2024/03/Hacking-RL-final.jpg",
                title: "Hacking / RE",

                description: "A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network."
            }
        ]
    },
    projects: {
        projectTitle: 'Our Recent Projects',
        projectDescription: 'We developed some awesome projects for our clients.',
        projectsCardsData: [
            {
                id: "1",
                image: "https://images.unsplash.com/photo-1600522907071-85ea3bd6f625?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
                title: "Smart Home Automation System",
                description: "An IoT-based home automation solution that enables users to control lighting, temperature, and security systems through a mobile app. Features include voice control, scheduling, and energy usage analytics.",
                link: "#",
            },
            {
                id: "2",
                image: "https://images-platform.99static.com//_yK4HccHgorFH8W3OTKSEwcO3bE=/0x0:1440x1440/fit-in/500x500/99designs-contests-attachments/100/100826/attachment_100826845",
                title: "E-Commerce Analytics Dashboard",
                description: "A comprehensive analytics platform for online retailers to track sales metrics, customer behavior, and inventory management. Includes real-time reporting and predictive analysis features.",
                link: "#",
            },
            {
                id: "3",
                image: "https://cdn.dribbble.com/userupload/17580612/file/original-7480d8971fbb0cea5d3b76d3bd72bd49.png?resize=400x0",
                title: "Health & Fitness Tracking App",
                description: "A mobile application that helps users monitor their fitness goals, track workouts, and maintain nutrition logs. Includes integration with wearable devices and personalized workout recommendations.",
                link: "#",
            },
        ]
    },
    teams: {
        teamsTitle: 'Meet our talent team',
        teamsDescription: 'Our talented team of professionals.',
        teamsCardsData: [
            {
                id: 1,
                avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
                name: "Martiana dialan",
                title: "Product designer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
            {
                id: 2,
                avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
                name: "Micheal colorand",
                title: "Software engineer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
            {
                id: 3,
                avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                name: "Daniel martin",
                title: "Product designer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
            {
                id: 4,
                avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                name: "Vicky tanson",
                title: "Product manager",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
        ]
    },
    reviews: {
        reviewsTitle: 'What our clients say',
        reviewsDescription: '',
        reviewsCardsData: [
            {
                id: "2", // Also change to string
                avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
                name: 'Jane Doe',
                title: 'Marketing Director',
                review: 'A phenomenal service that propelled our marketing efforts to new heights.',
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            },
            {
                id: "3", // Change to string
                avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
                name: 'Michael Smith',
                title: 'Product Manager',
                review: 'Incredible results after using this service. It has changed the way we work.',
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            },
            {
                id: "4", // Change to string
                avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
                name: 'Samantha Johnson',
                title: 'Operations Lead',
                review: 'The team behind this product is very supportive. Had a great experience!',
                facebook: "#",
                twitter: "#",
                linkedin: "#"
            }
        ]
    },
    contact: {
        contactTitle: 'GET IN TOUCH WITH US',
        contactDescription: 'We’re here to help and answer any question you might have, We look forward to hearing from you .',
        contactsData: [
            {
                contact: "Mountain View, California, United State.",
                title: "Our office",

            },
            {
                contact: "+1 (555) 000-000",
                title: "Phone"
            },
            {
                contact: "Support@example.com",
                title: "Email"
            },
        ]
    },
    footer: {
        logo: 'https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg',
        description: 'We are a creative team of designers and developers, working together to create digital products for our clients.',
        companyName: 'Devs Company',
        linksData: [
            {
                id: 1,
                title: "Company",
                links: [
                    {
                        href: '#',
                        name: 'Partners'
                    },
                    {
                        href: '#',
                        name: 'Blog'
                    },
                    {
                        href: '#',
                        name: 'Team'
                    },
                    {
                        href: '#',
                        name: 'Careers'
                    },
                ],
            },
            {
                id: 2,
                title: "Resources",
                links: [
                    {
                        href: '#',
                        name: 'contact'
                    },
                    {
                        href: '#',
                        name: 'Support'
                    },
                    {
                        href: '#',
                        name: 'Docs'
                    },
                    {
                        href: '#',
                        name: 'Pricing'
                    },
                ],
            },
            {
                id: 3,
                title: "About",
                links: [
                    {
                        href: '#',
                        name: 'Terms'
                    },
                    {
                        href: '#',
                        name: 'License'
                    },
                    {
                        href: '#',
                        name: 'Privacy'
                    },
                    {
                        href: '#',
                        name: 'About US'
                    },
                ]
            }
        ],
        icons: []
    }
};

const AboutData = {
    navbar: {
        logo: "https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg",
        menus: [
            { title: "Home", path: "/" },
            { title: "About Us", path: "/about" },
            { title: "Services", path: "/service" },
            { title: "Contact Us", path: "/contact" }
        ],
        buttonText: 'Contact Us'
    },
    pageheader: {
        title: 'About Us',
        description: 'We are a creative team of designers and developers, working together to create digital products for our clients.',
        image: 'https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg'
    },
    about: {
        image: 'https://i.ibb.co/gFb3ns6/image-1.jpg',
        aboutTitle: 'We will provide you the best work which you dreamt for!',
        aboutDescription: 'At Software Company, we harness the power of technology to create innovative solutions that drive business success. From dynamic websites to transformative mobile apps and cutting-edge AI, were your partners innavigating the digital landscape',
        aboutBtnText: 'Read More',
        aboutCardsData: [
            { title: "15+", text: "years of experience" },
            { title: "1500+", text: "project completed" },
            { title: "790+", text: "satisfied clients" },
            { title: "100+", text: "active developers" }
        ]
    },
    service: {
        serviceTitle: 'Our Services',
        serviceDescription: 'Here is a few of the awesome Services we provide.',
        serviceCardsData: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "DAPP Development",
                description: "A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface."
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Web 3.0 Development",

                description: "Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web."
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Project Audit",

                description: "A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld."
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Hacking / RE",

                description: "A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network."
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Bot/Script Development",

                description: "Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process."
            }
        ]
    },
    teams: {
        teamsTitle: 'Meet our talent team',
        teamsDescription: 'Our talented team of professionals.',
        teamsCardsData: [
            {
                id: 1,
                avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
                name: "Martiana dialan",
                title: "Product designer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
            {
                id: 2,
                avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
                name: "Micheal colorand",
                title: "Software engineer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
            {
                id: 3,
                avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                name: "Daniel martin",
                title: "Product designer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
            {
                id: 4,
                avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                name: "Vicky tanson",
                title: "Product manager",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
                linkedin: "#",
                twitter: "#",
                github: "#"
            },
        ]
    },
    footer: {
        logo: 'https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg',
        description: 'We are a creative team of designers and developers, working together to create digital products for our clients.',
        companyName: 'Devs Company',
        linksData: [
            {
                id: 1,
                title: "Company",
                links: [
                    {
                        href: '#',
                        name: 'Partners'
                    },
                    {
                        href: '#',
                        name: 'Blog'
                    },
                    {
                        href: '#',
                        name: 'Team'
                    },
                    {
                        href: '#',
                        name: 'Careers'
                    },
                ],
            },
            {
                id: 2,
                title: "Resources",
                links: [
                    {
                        href: '#',
                        name: 'contact'
                    },
                    {
                        href: '#',
                        name: 'Support'
                    },
                    {
                        href: '#',
                        name: 'Docs'
                    },
                    {
                        href: '#',
                        name: 'Pricing'
                    },
                ],
            },
            {
                id: 3,
                title: "About",
                links: [
                    {
                        href: '#',
                        name: 'Terms'
                    },
                    {
                        href: '#',
                        name: 'License'
                    },
                    {
                        href: '#',
                        name: 'Privacy'
                    },
                    {
                        href: '#',
                        name: 'About US'
                    },
                ]
            }
        ],
        icons: []
    }
}

const ServiceData = {
    navbar: {
        logo: "https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg",
        menus: [
            { title: "Home", path: "/" },
            { title: "About Us", path: "/about" },
            { title: "Services", path: "/service" },
            { title: "Contact Us", path: "/contact" }
        ],
        buttonText: 'Contact Us'
    },
    pageheader: {
        title: 'Services',
        description: 'We are a creative team of designers and developers, working together to create digital products for our clients.',
        image: 'https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg'
    },
    service: {
        serviceTitle: 'Our Services',
        serviceDescription: 'Here is a few of the awesome Services we provide.',
        serviceCardsData: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "DAPP Development",
                description: "A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface."
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Web 3.0 Development",

                description: "Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web."
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Project Audit",

                description: "A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld."
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Hacking / RE",

                description: "A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network."
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Bot/Script Development",

                description: "Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process."
            }
        ]
    },
    footer: {
        logo: 'https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg',
        description: 'We are a creative team of designers and developers, working together to create digital products for our clients.',
        companyName: 'Devs Company',
        linksData: [
            {
                id: 1,
                title: "Company",
                links: [
                    {
                        href: '#',
                        name: 'Partners'
                    },
                    {
                        href: '#',
                        name: 'Blog'
                    },
                    {
                        href: '#',
                        name: 'Team'
                    },
                    {
                        href: '#',
                        name: 'Careers'
                    },
                ],
            },
            {
                id: 2,
                title: "Resources",
                links: [
                    {
                        href: '#',
                        name: 'contact'
                    },
                    {
                        href: '#',
                        name: 'Support'
                    },
                    {
                        href: '#',
                        name: 'Docs'
                    },
                    {
                        href: '#',
                        name: 'Pricing'
                    },
                ],
            },
            {
                id: 3,
                title: "About",
                links: [
                    {
                        href: '#',
                        name: 'Terms'
                    },
                    {
                        href: '#',
                        name: 'License'
                    },
                    {
                        href: '#',
                        name: 'Privacy'
                    },
                    {
                        href: '#',
                        name: 'About US'
                    },
                ]
            }
        ],
        icons: []
    }
}

const ContactData = {
    navbar: {
        logo: "https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg",
        menus: [
            { title: "Home", path: "/" },
            { title: "About Us", path: "/about" },
            { title: "Services", path: "/service" },
            { title: "Contact Us", path: "/contact" }
        ],
        buttonText: 'Contact Us'
    },
    pageheader: {
        title: 'Contact Us',
        description: 'We are a creative team of designers and developers, working together to create digital products for our clients.',
        image: 'https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg'
    },
    contact: {
        contactTitle: 'GET IN TOUCH WITH US',
        contactDescription: 'We’re here to help and answer any question you might have, We look forward to hearing from you .',
        contactsData: [
            {
                contact: "Mountain View, California, United State.",
                title: "Our office"
            },
            {
                contact: "+1 (555) 000-000",
                title: "Phone"
            },
            {
                contact: "Support@example.com",
                title: "Email"
            },
        ]
    },
    footer: {
        logo: 'https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg',
        description: 'We are a creative team of designers and developers, working together to create digital products for our clients.',
        companyName: 'Devs Company',
        linksData: [
            {
                id: 1,
                title: "Company",
                links: [
                    {
                        href: '#',
                        name: 'Partners'
                    },
                    {
                        href: '#',
                        name: 'Blog'
                    },
                    {
                        href: '#',
                        name: 'Team'
                    },
                    {
                        href: '#',
                        name: 'Careers'
                    },
                ],
            },
            {
                id: 2,
                title: "Resources",
                links: [
                    {
                        href: '#',
                        name: 'contact'
                    },
                    {
                        href: '#',
                        name: 'Support'
                    },
                    {
                        href: '#',
                        name: 'Docs'
                    },
                    {
                        href: '#',
                        name: 'Pricing'
                    },
                ],
            },
            {
                id: 3,
                title: "About",
                links: [
                    {
                        href: '#',
                        name: 'Terms'
                    },
                    {
                        href: '#',
                        name: 'License'
                    },
                    {
                        href: '#',
                        name: 'Privacy'
                    },
                    {
                        href: '#',
                        name: 'About US'
                    },
                ]
            }
        ],
        icons: []
    }
}

const intialData: ContentItem[] = [{

    id: "1",
    page: 'Home',
    content: HomeData
}, {

    id: "2",
    page: 'About',
    content: AboutData
}, {

    id: "3",
    page: 'Service',
    content: ServiceData
}, {

    id: "4",
    page: 'Contact',
    content: ContactData
}];


export default intialData

