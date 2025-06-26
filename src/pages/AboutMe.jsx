import React, {useEffect} from 'react'
import { aboutMe } from '../assets/assets'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AboutMe = () => {

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <div className='w-full px-5 mt-4 text-white'>
            <h2 className='text-lg md:text-xl mb-5'>👋 Hi, I'm <span className='text-[var(--secondary-color)] font-bold'>Seif Elsayed Ali</span> — a dedicated <span className='text-[var(--secondary-color)] font-bold'>Full Stack Developer</span> with a passion for crafting smooth, engaging, and efficient digital experiences.</h2>
            <div>
                {aboutMe.map((ele, index) => {
                    return (
                        <div data-aos="fade-up"  
                            data-aos-delay={index * 300} 
                            key={index} 
                            className='mb-5 flex text-lg md:text-xl gap-2 md:items-center items-start'>
                            {ele.icon}
                            <p>{ele.text}</p>
                        </div>
                    )
                })}
            </div>    
        </div>
    )
}
