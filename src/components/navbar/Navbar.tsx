import React from 'react';

import { NavbarData } from '@/types/global';

interface HeroProps {
    data?: NavbarData;
}

const Navbar: React.FC<HeroProps> = ({ data }) => {
    return (
        <header>
            <div className="bg-background text-text border-b border-text">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="/" title="" className="flex">
                                <img className="w-auto h-8 lg:h-10 rounded-md" src={data.logo} alt="logo" />
                            </a>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            {data?.menus?.map((item, idx) => (
                                <a key={idx + 1} href={item.path} title="" className="text-base font-medium text-text">{item.title}</a>
                            )
                            )}
                        </div>

                        <button type="button" className="flex items-center justify-center ml-auto text-text bg-background rounded-full w-9 h-9 lg:hidden">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>

                        <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                    </nav>
                </div>
            </div>

            <nav className="py-4 bg-background lg:hidden">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold tracking-widest text-text uppercase">Menu</p>

                        <button type="button" className="inline-flex p-2 text-text transition-all duration-200 rounded-md focus:bg-background">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col space-y-2">
                            {
                                data?.menus?.map((item, idx) => (
                                    <a key={idx + 1} href={item.path} title="" className="py-2 text-base font-medium text-text transition-all duration-200 focus:text-primary">{item.title}</a>
                                ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};


export default Navbar;