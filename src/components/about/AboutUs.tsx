
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AboutData } from '@/types/global';

interface AboutUsProps {
    data?: AboutData;
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="about" className="py-20 px-[10%] md:px-[5%] lg:px-[10%]">
            <div className='flex mb-12 items-center justify-between w-full'>
                <h1 className="text-3xl text-text capitalize pl-4 border-l-4 border-primary">
                    About us
                </h1>
                <a href="#services" className="inline-block px-8 py-2 bg-primary text-background rounded-md transition duration-200 text-lg capitalize">
                    {data?.aboutBtnText}
                </a>
            </div>

            <div className="flex flex-wrap items-center gap-12">
                <div className="flex-1 basis-[30rem]">
                    <img src={data?.image} alt='About us' className="w-full" />
                </div>

                <div className="flex-1 basis-[30rem]">
                    <h3 className="text-4xl text-text capitalize mb-4">
                        {data?.aboutTitle}
                    </h3>
                    <p className="text-light-color text-lg leading-8 py-4">
                        {data?.aboutDescription}
                    </p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {data?.aboutCardsData?.map((item, index) => (
                    <button
                        key={index}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-primary block rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <div className="rounded-2xl h-full w-full p-1 overflow-hidden group-hover:border-slate-700 relative z-50">
                            <div className="relative z-50">
                                <div className="p-2">
                                    <h4 className="text-text text-4xl font-bold tracking-wide">
                                        {item.title}
                                    </h4>
                                    <p className="mt-4 text-base uppercase text-text tracking-wide leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
