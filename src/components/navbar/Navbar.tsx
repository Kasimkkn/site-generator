import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { NavbarData } from '@/types/global';

interface HeroProps {
    data?: NavbarData;
}

const Navbar: React.FC<HeroProps> = ({ data }) => {
    const [state, setState] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        // Close menu when clicking outside
        document.onclick = (e) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".menu-btn") && !target.closest(".nav-menu")) {
                setState(false);
            }
        };

        // Detect scroll for styling changes
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.onclick = null;
        };
    }, []);

    if (!data?.logo) return null;

    return (
        <header className={`w-full transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                <Brand data={data} setState={setState} state={state} />
            </div>
            <nav
                ref={navRef}
                className={`md:text-sm ${state
                    ? "absolute top-0 z-50 inset-x-0 bg-background shadow-xl rounded-b-2xl border-b border-primary/20 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
                    : ""
                    } ${scrolled ? "shadow-md bg-background/80 backdrop-blur-lg" : ""}`}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8"
                >
                    <Brand data={{ logo: data.logo }} setState={setState} state={state} />

                    <AnimatePresence>
                        {(state || window.innerWidth >= 768) && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex-1 items-center mt-8 md:mt-0 md:flex nav-menu`}
                            >
                                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-8 md:space-y-0">
                                    {data?.menus?.map((item, idx) => {
                                        return (
                                            <motion.li
                                                key={idx + 1}
                                                custom={idx}
                                                variants={{
                                                    hidden: { opacity: 0, y: 20 },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            delay: idx * 0.1,
                                                            duration: 0.5,
                                                            ease: [0.6, 0.01, -0.05, 0.95]
                                                        }
                                                    },
                                                    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="relative"
                                                onMouseEnter={() => setActiveItem(idx)}
                                                onMouseLeave={() => setActiveItem(null)}
                                            >
                                                <a
                                                    href={item.path}
                                                    className="block py-2 px-4 text-text text-xl hover:text-primary transition-colors duration-300 relative"
                                                >
                                                    {item.title}
                                                    {activeItem === idx && (
                                                        <motion.span
                                                            layoutId="underline"
                                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "100%" }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    )}
                                                </a>
                                            </motion.li>
                                        );
                                    })}
                                </ul>

                                <motion.div
                                    custom={data?.menus?.length}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.1,
                                                duration: 0.5,
                                                ease: [0.6, 0.01, -0.05, 0.95]
                                            }
                                        },
                                        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                                    }} initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="items-center justify-end space-y-6 md:flex md:space-y-0 md:space-x-4 md:mt-0"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center gap-x-1 py-2 px-5 text-background font-medium bg-primary rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20 md:inline-flex"
                                    >
                                        {data?.buttonText}
                                        <motion.svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                clipRule="evenodd"
                                            />
                                        </motion.svg>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </nav>
        </header>
    );
};

interface BrandProps {
    data: NavbarData
    setState: (state: boolean) => void;
    state: boolean;
}
const Brand = ({ data, setState, state }: BrandProps) => (
    <div className="flex items-center justify-between py-4 md:py-0 md:block">
        <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.img
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                src={data.logo}
                alt="Brand Logo"
                className='w-16 h-16 object-cover rounded-lg'
            />
        </motion.a>
        <div className="md:hidden">
            <motion.button
                className="menu-btn text-text p-2 rounded-full bg-background/50 backdrop-blur-sm border border-gray-200"
                onClick={() => setState(!state)}
                whileTap={{ scale: 0.9 }}
            >
                {state ? (
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </motion.svg>
                ) : (
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        initial={{ rotate: 180 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </motion.svg>
                )}
            </motion.button>
        </div>
    </div>
);


export default Navbar;