import React from 'react';
import { object } from 'prop-types';
const Hero1 = ({ data }) => {
    return (
        <div className="bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center">
                <div className="flex-1 pr-0 lg:pr-8 mb-12 lg:mb-0">
                    <div className="flex items-center space-x-4 text-gray-500 mb-8">
                        <span className="font-semibold">XLS</span>
                        <span className="text-gray-300">✈</span>
                        <div className="border-b border-dotted border-gray-300 flex-grow"></div>
                        <span className="font-semibold">RNW</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                        {data?.heroTitle}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-700 mb-8">
                        {data?.heroDescription}
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="flex-1 lg:max-w-lg">
                    <div className="relative">
                        <div className="bg-gray-100 rounded-full p-1 shadow-xl">
                            <div className="bg-white rounded-full p-6 shadow-sm">
                                <img
                                    src={data?.image}
                                    alt="Dashboard Preview"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Banner */}
            <div className="w-full bg-white pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Awards Section */}
                        <div className="flex items-center space-x-4 mb-6 md:mb-0">
                            <div className="flex items-center">
                                <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-medium">4.9 out of 5 stars</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                            <div className="flex items-center space-x-8">
                                <img src="https://1000logos.net/wp-content/uploads/2024/08/Vercel-Logo.jpg" alt="Vercel Logo" className="h-20" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--TG8CsCWeWP7qMuFz7mZfTfR8U7GqTYmrg&s" alt="Netlify Logo" className="h-20" />
                            </div>

                            <div className="bg-yellow-500 rounded-lg py-4 px-6 text-center flex items-center justify-between min-w-[230px]">
                                <span className="text-2xl font-bold text-black">{data?.ctaButton?.text}</span>
                                <div className="bg-black rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hero1.propTypes = {
    data: object,
}

export default Hero1;