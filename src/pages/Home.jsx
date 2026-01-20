import React,{useEffect, useState} from 'react'
import { info } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        },200)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className=' w-full h-fit flex flex-col sm:justify-center items-center mt-5 mx-5 lg:mx-20 text-white'>
            <div className={`transition-all duration-700 ease-in-out transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} flex flex-col items-center justify-center text-center h-full`}>
                <h1 className='text-2xl sm:text-3xl'>
                    👋 Hi, I’m <span className='text-[var(--secondary-color)] font-bold'>SEIF ElSAYED</span>
                </h1>
                <p className='text-xl sm:text-2xl mt-3'>
                    Junior Backend Developer | 
                    <span className='text-[var(--secondary-color)] font-semibold'> Full-Stack</span>
                    <span> (MERN)</span>
                </p>

            </div>
            <ul className='my-5'>
                {info.map((ele, index) => {
                    return(
                        <li className={`flex gap-2 items-start sm:items-center mb-3 transition-all duration-700 ease-in-out transform
                            ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                        `} key={index} >
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[var(--secondary-color)]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>
                            <p className='translate--1 text-lg sm:text-2xl'>{ele}</p>
                        </li>
                    )
                })}
            </ul>
            <div className={`flex flex-wrap items-center justify-center gap-3 mb-5 transition-all duration-700 ease-in-out transform
                ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}>
                <div 
                    className='flex items-center gap-2 text-lg sm:text-xl px-5 py-2 border-1 border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] rounded-2xl cursor-pointer duration-200'
                    onClick={() => window.open("https://drive.google.com/file/d/1suNvUvVx2TjA3enmMxgftzlu2jKS4Nfc/view?usp=drive_link", "_blank")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>
                    <span>Resume</span>    
                </div> 
                <div 
                    className='flex items-center gap-2 text-lg sm:text-xl px-5 py-2 border-1 border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] rounded-2xl cursor-pointer duration-200'
                    onClick={() => navigate("/projects")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
                        <circle cx="13" cy="12" r="2"></circle>
                        <path d="M18 19c-2.8 0-5-2.2-5-5v8"></path>
                        <circle cx="20" cy="19" r="2"></circle>
                    </svg>
                    <span>My Projects</span>
                </div>
            </div>
            <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ease-in-out transform
                ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a className='px-4 py-2 border-1 border-[var(--secondary-color)] hover:text-[var(--main-color)] hover:bg-[var(--secondary-color)] rounded-3xl cursor-pointer duration-200'
                    href="https://github.com/seif-el-sayed1" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a className='px-4 py-2 border-1 border-[var(--secondary-color)] hover:text-[var(--main-color)] hover:bg-[var(--secondary-color)] rounded-3xl cursor-pointer duration-200'
                    href="https://www.linkedin.com/in/seif-el-sayed-a8452a31a/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=seifsayed121@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 border border-[var(--secondary-color)] hover:text-[var(--main-color)] hover:bg-[var(--secondary-color)] rounded-3xl cursor-pointer duration-200'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
