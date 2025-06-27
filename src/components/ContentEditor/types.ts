
export interface SelectFieldOption {
    value: string;
    label: string;
}

export interface CardData {
    id?: string;
    title?: string;
    description?: string;
    text?: string;
    image?: string;
    icon?: string;
    color?: string;
    link?: string;
    name?: string;
    avatar?: string;
    desc?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    review?: string;
    path?: string;
}

export interface ContentData {
    [key: string]: {
        [key: string]: any;
        aboutCardsData?: CardData[];
        serviceCardsData?: CardData[];
        projectsCardsData?: CardData[];
        teamsCardsData?: CardData[];
        reviewsCardsData?: CardData[];
        contactsData?: CardData[];
    };
}

export interface UpdateContentFunction {
    (section: string, field: string, value: any): void;
}

export interface UpdateArrayContentFunction {
    (section: string, arrayField: string, index: number, value: CardData): void;
}

export interface DeleteArrayItemFunction {
    (section: string, arrayField: string, index: number): void;
}

export interface HandleImageChangeFunction {
    (e: React.ChangeEvent<HTMLInputElement>, field: string): Promise<void>;
}
