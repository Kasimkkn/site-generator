
export interface NavbarData {
  logo?: string;
  buttonText?: string;
  companyName?: string;
  menus?: NavbarLink[];
}

export interface NavbarLink {
  title: string;
  path: string;
}

export interface HeroData {
  heroTitle?: string;
  heroDescription?: string;
  image?: string;
  ctaButton?: {
    text: string;
    url: string;
  };
}

export interface AboutData {
  aboutTitle?: string;
  aboutDescription?: string;
  aboutBtnText?: string;
  image?: string;
  aboutCardsData?: AboutCard[];
}

export interface AboutCard {
  title: string;
  text: string;
  icon?: string;
}

export interface ServiceData {
  serviceTitle?: string;
  serviceDescription?: string;
  serviceCardsData?: ServiceCard[];
}

export interface ServiceCard {
  id?: string | number;
  image?: string;
  title: string;
  description: string;
  text?: string;
  price?: string;
  color?: string;
}

export interface ProjectData {
  projectTitle?: string;
  projectDescription?: string;
  projectsCardsData?: ProjectCard[];
}

export interface ProjectCard {
  id?: string | number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface TeamData {
  teamsTitle?: string;
  teamsDescription?: string;
  teamsCardsData?: TeamCard[];
}

export interface TeamCard {
  id?: string | number;
  avatar: string;
  name: string;
  title: string;
  desc: string;
  linkedin: string;
  twitter: string;
  github: string;
}

export interface ReviewData {
  reviewsTitle?: string;
  reviewsDescription?: string;
  reviewsCardsData?: ReviewCard[];
}

export interface ReviewCard {
  id?: string | number;
  avatar: string;
  name: string;
  title: string;
  review: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

export interface ContactData {
  contactTitle?: string;
  contactDescription?: string;
  contactsData?: ContactCard[];
}

export interface ContactCard {
  title: string;
  contact: string;
  icon?: string;
}

export interface FooterData {
  logo?: string;
  companyName?: string;
  description?: string;
  linksData?: FooterLinkSection[];
}

export interface FooterLinkSection {
  id?: string | number;
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  id?: string | number;
  name: string;
  href: string;
}

export interface PageHeaderData {
  title?: string;
  description?: string;
  image?: string;
}

export interface PageContent {
  navbar?: NavbarData;
  hero?: HeroData;
  pageheader?: PageHeaderData;
  about?: AboutData;
  service?: ServiceData;
  projects?: ProjectData;
  teams?: TeamData;
  reviews?: ReviewData;
  contact?: ContactData;
  footer?: FooterData;
}

export interface PageLayout {
  [key: string]: string;
}

export interface LayoutItem {
  page: string;
  layout: PageLayout;
}

export interface ContentItem {
  id?: string | number;
  page: string;
  content: PageContent;
}

export interface ModalState {
  [key: string]: boolean;
}

export interface OpenDifferentPages {
  home: boolean;
  about: boolean;
  service: boolean;
  contact: boolean;
}

export interface LayoutContextType {
  layout: LayoutItem[];
  setLayout: React.Dispatch<React.SetStateAction<LayoutItem[]>>;
  content: ContentItem[];
  setContent: React.Dispatch<React.SetStateAction<ContentItem[]>>;
  modal: ModalState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
  toggleModal: (modalName: string) => void;
  toggleEditModal: (modalName: string) => void;
  openDifferentPages: OpenDifferentPages;
  setOpenDifferentPages: React.Dispatch<React.SetStateAction<OpenDifferentPages>>;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (page: string, section: string, componentName: string) => void;
}

export interface ThemeContextType {
  theme: {
    primary: string;
    background: string;
    text: string;
  };
  setTheme: (theme: { primary: string; background: string; text: string }) => void;
}

export interface ComponentData {
  [key: string]: any;
}

export interface UpdateContentFunction {
  (section: string, field: string, value: any): void;
}

export interface UpdateArrayContentFunction {
  (section: string, arrayField: string, index: number, value: any): void;
}

export interface DeleteArrayItemFunction {
  (section: string, arrayField: string, index: number): void;
}

export interface HandleImageChangeFunction {
  (e: React.ChangeEvent<HTMLInputElement>, field: string): Promise<void>;
}
