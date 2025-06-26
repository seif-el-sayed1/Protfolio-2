import React, { useState, useEffect } from 'react';
import { frontendSkills, backendSkills, additionalSkills } from '../assets/assets';

export const Skills = () => {
    const [show, setShow] = useState(false);
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setShow(true);
            },200)
    
            return () => clearTimeout(timer);
        }, [])

    return (
        <div className={`px-5 mb-5 w-full ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all duration-800 ease-in-out`}>
            <div className='mt-5'>
                <h2 className='text-[var(--secondary-color)] text-2xl font-bold text-center sm:text-start mb-8'>Frontend Skills :</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {frontendSkills.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="cursor-pointer overflow-hidden relative group w-full h-32 py-4 rounded-2xl transition-all duration-300"
                                style={{
                                    backgroundColor: skill.bgColor,
                                    boxShadow: "0 0 0 rgba(0,0,0,0)"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = skill.shadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                                }}
                            >
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 duration-500 group-hover:top-10"
                                    src={skill.icon}
                                    alt={skill.label}
                                />
                                <span
                                    style={{ color: skill.textColor }}
                                    className="text-lg font-bold text-nowrap absolute duration-500 sm:top-[70%] top-[80%] opacity-100 sm:opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    {skill.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='text-[var(--secondary-color)] text-2xl font-bold text-center sm:text-start mb-8'>Backend Skills :</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {backendSkills.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="cursor-pointer overflow-hidden relative group w-full h-32 py-4 rounded-2xl transition-all duration-300"
                                style={{
                                    backgroundColor: skill.bgColor,
                                    boxShadow: "0 0 0 rgba(0,0,0,0)"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = skill.shadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                                }}
                            >
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 duration-500 group-hover:top-10"
                                    src={skill.icon}
                                    alt={skill.label}
                                />
                                <span
                                    style={{ color: skill.textColor }}
                                    className="text-lg font-bold text-nowrap absolute duration-500 sm:top-[70%] top-[80%] opacity-100 sm:opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    {skill.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='text-[var(--secondary-color)] text-2xl font-bold text-center sm:text-start mb-8'>Additional Skills :</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {additionalSkills.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="cursor-pointer overflow-hidden relative group w-full h-32 py-4 rounded-2xl transition-all duration-300"
                                style={{
                                    backgroundColor: skill.bgColor,
                                    boxShadow: "0 0 0 rgba(0,0,0,0)"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = skill.shadow;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                                }}
                            >
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 duration-500 group-hover:top-10"
                                    src={skill.icon}
                                    alt={skill.label}
                                />
                                <span
                                    style={{ color: skill.textColor }}
                                    className="text-lg font-bold text-nowrap absolute duration-500 sm:top-[70%] top-[80%] opacity-100 sm:opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    {skill.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};