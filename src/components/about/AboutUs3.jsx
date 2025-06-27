import React from 'react';
import { motion } from 'framer-motion';
import { object } from 'prop-types';

const AboutUs3 = ({ data }) => {
    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
    };

    // Animation variants for the image
    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    // Animation variants for the text
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <motion.div
                className="w-full overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <motion.div
                        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                        style={{ backgroundImage: `url(${data?.image})` }}
                        variants={imageVariants}
                    ></motion.div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8">
                        <motion.h1
                            className="text-4xl font-bold text-gray-800 mb-4"
                            variants={textVariants}
                        >
                            {data?.aboutTitle}
                        </motion.h1>
                        <motion.p
                            className="text-gray-600 mb-6"
                            variants={textVariants}
                        >
                            {data?.aboutDescription}
                        </motion.p>

                        {/* Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {data?.aboutCardsData.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    <h2 className="text-3xl font-bold text-primary mb-2">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-600">{card.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Button Section */}
                        <motion.button
                            className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary transition-colors duration-300"
                            variants={textVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {data?.aboutBtnText}
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

AboutUs3.propTypes = {
    data: object,
};

export default AboutUs3;