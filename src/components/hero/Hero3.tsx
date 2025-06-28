
import React from 'react';
import { motion } from 'framer-motion';
import { HeroData } from '@/types/global';

interface HeroProps {
    data?: HeroData;
}

const Hero3: React.FC<HeroProps> = ({ data }) => {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Grid pattern background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            🚀 Next Generation Web Builder
                        </span>
                        
                        <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6">
                            Build
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                                Amazing
                            </span>
                            Websites
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            {data?.heroDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-16"
                    >
                        <motion.a
                            href={data?.ctaButton?.url}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            {data?.ctaButton?.text}
                            <motion.svg
                                className="ml-3 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </motion.svg>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative bg-white rounded-3xl shadow-2xl p-4 max-w-4xl mx-auto">
                            <img 
                                src={data?.image} 
                                alt="Dashboard Preview" 
                                className="w-full rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none rounded-3xl"></div>
                        </div>
                        
                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg"
                        ></motion.div>
                        
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                            className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full shadow-lg"
                        ></motion.div>
                        
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, delay: 2 }}
                            className="absolute bottom-10 left-20 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping animation-delay-1000"></div>
                <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping animation-delay-2000"></div>
            </div>
        </section>
    );
};

export default Hero3;
