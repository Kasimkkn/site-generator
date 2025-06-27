import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import { IoArrowForward } from 'react-icons/io5';
import { FiCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { SiTarom } from 'react-icons/si';

const Hero = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const moveX = clientX - window.innerWidth / 2;
            const moveY = clientY - window.innerHeight / 2;
            setMousePosition({ x: moveX / 30, y: moveY / 30 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black relative px-8 lg:px-16 flex items-center order-2 lg:order-1 py-12 lg:py-0"
            >
                <div className="w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex items-center space-x-2 mb-6"
                    >
                        <div className="relative">
                            <SiTarom className="text-white w-5 h-5 animate-pulse" />
                            <div className="absolute inset-0 bg-white/30 rounded-full blur-md animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
                        </div>
                        <span className="text-sm tracking-[0.2em] text-white font-bold">EXPLORE NOW</span>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-sm text-white/70 px-4 py-2 border border-white/30 rounded-full bg-primary /30 backdrop-blur-md"
                        >
                            <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                            {Math.floor(Math.random() * 200) + 100} people exploring right now
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white"
                    >
                        {data?.heroTitle?.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-4 relative">
                                {word}
                                <motion.span
                                    className="absolute -bottom-[2px] left-0 h-[1px] bg-white rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.6 + (i * 0.1), duration: 0.4 }}
                                />
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg text-white/80 max-w-lg mb-12 font-light backdrop-blur-sm p-4 rounded-lg"
                    >
                        {data?.heroDescription}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-wrap items-center gap-8"
                    >
                        <motion.a
                            href={data?.ctaButton?.url}
                            className="relative group inline-flex items-center"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="absolute inset-0 bg-white rounded"
                                initial={{ y: 8, x: 8 }}
                                animate={{
                                    y: isHovered ? 0 : 8,
                                    x: isHovered ? 0 : 8,
                                    opacity: isHovered ? 0.2 : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span className="relative bg-primary  text-white px-8 py-4 rounded inline-flex items-center gap-3 font-medium border border-primary ">
                                {data?.ctaButton?.text}
                                <motion.div
                                    animate={{ x: isHovered ? 10 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <IoArrowForward />
                                </motion.div>
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>

            <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-full overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-black/40 z-10"
                    animate={{ opacity: [0.4, 0.2, 0.4] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${data?.image})`,
                        backgroundPosition: `calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px)`,
                    }}
                    initial={{ scale: 1.1 }}
                    animate={{
                        scale: isHovered ? 1.15 : 1.1,
                    }}
                    transition={{ duration: 0.8 }}
                />

                {/* Image overlay elements */}
                <motion.div
                    className="absolute bottom-20 right-16 bg-white/10 backdrop-blur-lg p-4 rounded-lg z-20 max-w-xs"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <div className="text-white text-sm">
                        <div className="flex items-center mb-2">
                            <div className="h-1 w-8 bg-primary  mr-2"></div>
                            <span className="text-xs font-bold tracking-wider">FEATURED</span>
                        </div>
                        <h3 className="font-medium mb-1">{data?.featuredText || "Discover our latest collection"}</h3>
                        <p className="text-white/70 text-xs">{data?.featuredDescription || "Limited edition designs available now"}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    data: object
};

export default Hero;