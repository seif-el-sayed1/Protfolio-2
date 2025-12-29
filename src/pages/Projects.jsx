import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../assets/assets';

export const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, once: true });
    }, []);

    return (
        <div className='mt-5 mb-5 px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {projects.slice().reverse().map((project, index) => (
                <div
                    key={index}
                    data-aos="flip-left"
                    className='relative overflow-hidden border border-[var(--secondary-color)] rounded-xl shadow-md flex flex-col'
                >
                    {project.type && (
                        <div className="absolute top-3 left-70 w-20 h-20  z-10 pointer-events-none">
                            <div className="absolute top-3 right-[-26px] w-36 bg-red-600 text-white text-xs font-bold text-center py-2 leading-tight shadow-lg transform rotate-45">
                                {project.type}
                            </div>
                        </div>
                    )}

                    {project.contribution && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md z-20">
                            🚀 Contribution
                        </div>
                    )}

                    {project.inProgress && (
                        <div className="absolute top-12 left-2 bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md z-20">
                            ⌛ In Progress
                        </div>
                    )}

                    <img
                        className='mb-5 rounded-t-xl h-52 w-full object-cover hover:scale-110 hover:rotate-2 duration-200'
                        src={project.image}
                        alt={project.title}
                    />

                    <div className='mb-5 px-3 flex-1'>
                        <h2 className='mb-2 text-[var(--secondary-color)] text-2xl font-bold'>{project.title}</h2>
                        {project.description && <p className='text-white text-lg'>{project.description}</p>}
                    </div>

                    {project.skills.length > 0 && (
                        <div className='px-2 mx-2 mb-5 flex justify-center flex-wrap items-center gap-3 border border-[var(--secondary-color)] rounded-lg py-2'>
                            {project.skills.map((skill, index) => (
                                <img className='w-7' key={index} src={skill} alt={`${project.title} Skills`} />
                            ))}
                        </div>
                    )}

                    <div className='mb-5 px-2 flex flex-wrap justify-center items-center gap-3'>
                        {/* GitHub Link */}
                        {project.github && (
                            <div className={`flex items-center gap-3 px-5 py-2 text-white border border-[var(--secondary-color)] rounded-2xl cursor-pointer duration-200
                                ${project.repoPrivate ? 'hover:bg-red-500' : 'hover:bg-[var(--secondary-color)]'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                {project.repoPrivate ? <span>Private</span> : <a href={project.github} target='_blank' rel='noreferrer'>Source Code</a>}
                            </div>
                        )}

                        {/* Website */}
                        {project.link && (
                            <div className={`flex items-center gap-3 px-5 py-2 text-white border border-[var(--secondary-color)] rounded-2xl cursor-pointer duration-200
                                ${project.projectPrivate ? 'hover:bg-red-500' : 'hover:bg-[var(--secondary-color)]'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                {project.projectPrivate ? <span>Private</span> : <a href={project.link} target='_blank' rel='noreferrer'>View</a>}
                            </div>
                        )}

                        {/* Demo */}
                        {project.demo && (
                            <div className={`flex items-center gap-3 px-5 py-2 text-white border border-[var(--secondary-color)] rounded-2xl cursor-pointer duration-200
                                ${project.demoPrivate ? 'hover:bg-red-500' : 'hover:bg-[var(--secondary-color)]'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <a href={project.demo} target='_blank' rel='noreferrer'>Demo</a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}