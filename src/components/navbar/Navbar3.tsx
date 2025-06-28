import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarData } from '@/types/global';

interface NavbarProps {
    data?: NavbarData;
}

const Navbar3: React.FC<NavbarProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-background backdrop-blur-md border-b border-background'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0"
                    >
                        <img
                            src={data?.logo}
                            alt="Logo"
                            className="h-10 w-auto rounded-lg"
                        />
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {data?.menus?.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.path}
                                    className="relative px-4 py-2 text-text hover:text-primary transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10">{item.title}</span>
                                    <motion.div
                                        className="absolute inset-0 bg-background rounded-lg backdrop-blur-sm"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-primary to-primary text-background px-6 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm border border-white/20"
                        >
                            {data?.buttonText}
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <div className="w-6 h-6 relative">
                                <motion.span
                                    className="absolute w-full h-0.5 bg-text rounded-full"
                                    style={{ top: '25%' }}
                                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                />
                                <motion.span
                                    className="absolute w-full h-0.5 bg-text rounded-full"
                                    style={{ top: '50%' }}
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                />
                                <motion.span
                                    className="absolute w-full h-0.5 bg-text rounded-full"
                                    style={{ top: '75%' }}
                                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {data?.menus?.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.path}
                                    className="block px-4 py-3 text-text hover:text-primary hover:bg-white/10 rounded-lg transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: data?.menus?.length ? data.menus.length * 0.1 : 0 }}
                                className="w-full mt-4 bg-gradient-to-r from-primary to-blue-600 text-background px-6 py-3 rounded-lg font-medium"
                            >
                                {data?.buttonText}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar3;