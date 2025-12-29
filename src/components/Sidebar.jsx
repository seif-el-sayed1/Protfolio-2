import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { sideLinks } from '../assets/assets'

export const Sidebar = () => {
    const navigate = useNavigate()
    const {sideBar} = useContext(AppContext)

    return (
        <div className={`ml-5 h-130 rounded-lg px-3  md:ml-15 absolute md:hidden 
                border-1 border-white duration-500 ${sideBar ? "left-0" :  " -left-30" }`}>
            <ul className='flex flex-col items-start gap-4 text-white text-lg mt-3'>
                {sideLinks.map((link, index) => {
                    const isActive = window.location.pathname === link.path;
                    return (
                        <li key={index} onClick={() => navigate(link.path)}
                            className={`cursor-pointer hover:text-[var(--secondary-color)] duration-200
                                ${isActive ? "text-[var(--secondary-color)] font-bold" : "text-white"}`}
                        >{link.icon}
                        </li>
                    )    
                })}
            </ul>
        </div>
    )
}
