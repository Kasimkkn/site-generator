import React from 'react';
import { object } from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project1 = ({ data }) => {
    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            id="projects"
        >
            <div
                className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-[-1]"
            ></div>

            <div className="container max-w-6xl mx-auto px-4 xl:px-0 ">
                <div className={`mb-12  transition-all duration-700`}>
                    <h2 className="text-3xl font-extrabold leading-tight text-text mb-1">{data?.projectTitle}</h2>
                    <p className="section-description mx-auto">{data?.projectDescription}</p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {data?.projectsCardsData.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card group h-full flex flex-col overflow-hidden transition-all duration-700`}
                            style={{ transitionDelay: `${(index % 3) * 200}ms` }}
                        >
                            <div className="relative h-56 md:h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                                <p className="mb-5 text-muted-foreground line-clamp-3 flex-grow">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="group inline-flex items-center text-sm font-medium text-primary mt-auto"
                                >
                                    View project
                                    <FaExternalLinkAlt className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="/"
                        className="group inline-flex items-center rounded-full border border-primary bg-transparent px-7 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        View all projects
                        <BsArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};

Project1.propTypes = {
    data: object,
};

export default Project1;