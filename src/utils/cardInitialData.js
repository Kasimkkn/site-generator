export const getInitialCardData = (section) => {
    const initialData = {
        navbar: { title: '', path: '' },
        about: { title: '', text: '' },
        service: { title: '', description: '', color: 'primary' },
        projects: { id: Date.now().toString(), title: '', description: '', image: '', link: '#' },
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
