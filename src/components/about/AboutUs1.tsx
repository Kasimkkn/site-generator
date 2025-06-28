import React from "react";
import { AboutData } from '@/types/global';

interface AboutUsProps {
    data?: AboutData;
}

const AboutOne: React.FC<AboutUsProps> = ({ data }) => {
    return (
        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-background ">
            <div className="container px-10">
                <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="flex items-center -mx-3 sm:-mx-4">
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <div className="py-3 sm:py-4">
                                    <img
                                        src={data?.image}
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                                <div className="py-3 sm:py-4">
                                    <img
                                        src={data?.image}
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <div className="relative z-10 my-4">
                                    <img
                                        src={data?.image}
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                            <span className="block mb-4 text-lg font-semibold text-primary">
                                Why Choose Us
                            </span>
                            <h2 className="mb-5 text-3xl font-bold text-dark text-text sm:text-[40px]/[48px]">
                                {data?.aboutTitle}
                            </h2>
                            <p className="mb-5 text-base text-text">
                                {data?.aboutDescription}
                            </p>
                            <button
                                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-background border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                            >
                                {data?.aboutBtnText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutOne;
