
import AboutUs from './about/AboutUs';
import AboutOne from './about/AboutUs1';
import AboutUs3 from './about/AboutUs3';
import AboutUs2 from './about/AboutUs2';
import AboutUs4 from './about/AboutUs4';
import ContactUs1 from './contact/ContactUs1';
import ContactUs2 from './contact/ContactUs2.tsx';
import Footer from './footer/Footer.tsx';
import Footer1 from './footer/Footer1.tsx';
import Hero from './hero/Hero';
import Hero1 from './hero/Hero1.tsx';
import Hero2 from './hero/Hero2.tsx';
import Hero3 from './hero/Hero3.tsx';
import Navbar from './navbar/Navbar.tsx';
import Navbar1 from './navbar/Navbar1.tsx';
import Projects from './projects/Projects.tsx';
import Projects1 from './projects/Projects1.tsx';
import Reviews from './reviews/Reviews.tsx';
import Reviews2 from './reviews/Reviews2.tsx';
import Service from './service/Service.tsx';
import Service1 from './service/Service1.tsx';
import Service2 from './service/Service2.tsx';
import Teams from './teams/Teams';
import PageHeader from './pageheader/PageHeader.tsx';

export const componentMap: { [key: string]: React.ComponentType<any> } = {
    Navbar,
    Navbar1,
    Hero,
    Hero1,
    Hero2,
    Hero3,
    AboutUs,
    AboutOne,
    PageHeader,
    AboutUs2,
    AboutUs3,
    AboutUs4,
    Service,
    Service1,
    Service2,
    Projects,
    Projects1,
    Teams,
    Reviews,
    Reviews2,
    ContactUs1,
    ContactUs2,
    Footer,
    Footer1,
};
