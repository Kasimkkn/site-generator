
export interface CardInitialData {
    [key: string]: any;
    id?: string;
    title?: string;
    text?: string;
    description?: string;
    color?: string;
    image?: string;
    link?: string;
    avatar?: string;
    name?: string;
    desc?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    review?: string;
    path?: string;
}

export const getInitialCardData = (section: string): CardInitialData => {
    const initialData: Record<string, CardInitialData> = {
        navbar: { title: '', path: '' },
        about: { title: '', text: '' },
        service: { title: '', description: '', color: 'primary' },
        projects: { 
            id: Date.now().toString(), 
            title: '', 
            description: '', 
            image: '', 
            link: '#' 
        },
        teams: {
            avatar: '',
            name: '',
            title: '',
            desc: '',
            linkedin: '#',
            twitter: '#',
            github: '#'
        },
        reviews: {
            id: Date.now().toString(),
            avatar: '',
            name: '',
            title: '',
            review: '',
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    };

    return initialData[section] || {};
};
