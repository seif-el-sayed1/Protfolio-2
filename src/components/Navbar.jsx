import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { navLinks } from '../assets/assets'

export const Navbar = () => {
    const navigate = useNavigate()
    const {sideBar, setSideBar} = useContext(AppContext)

    return (
        <div className='flex items-center justify-between mt-4 py-3 border-1 rounded-lg border-white px-4
            mx-5 md:mx-15 '>
                <div className='flex items-center  gap-2'>
                {!sideBar ? (<svg onClick={() => setSideBar(!sideBar)}
                    className='md:hidden cursor-pointer  text-[var(--secondary-color)]' 
                    stroke="currentColor" fill="currentColor"  viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path></svg>)
                    : (<svg onClick={() => setSideBar(!sideBar)}
                        className='md:hidden cursor-pointer text-[var(--secondary-color)]'
                        stroke="currentColor" fill="currentColor"  viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>)}
                <p className='font-bold text-lg tracking-wide text-white'>SEIF ElSAYED</p>
            </div>
            <ul className='hidden md:flex items-center gap-5 mt'>
            {navLinks.map((nav, index) => {
                const isActive = window.location.pathname === nav.path;
                return (
                    <li onClick={() => navigate(nav.path)}
                        key={index} className={`cursor-pointer  hover:text-[var(--secondary-color)] duration-200
                            ${isActive ? "text-[var(--secondary-color)] font-semibold" : "text-white"}  `}>{nav.label}</li>
                )
            })}
            </ul>
        </div>
    )
}
