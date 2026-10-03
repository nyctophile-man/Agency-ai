import React from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"
const Nav = ({ theme, setTheme }) => {
    return (
        <motion.div
        initial={{opacity:0,y: -50}}
        animate={{ opacity:1,y:0}}
        transition={{duration: 0.6 ,ease: 'easeOut'}}
        className={`flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium ${theme === 'dark' ? 'bg-slate-800/90 text-white' : 'bg-white/70 text-gray-700'}`}>
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" className="w-32 sm:w-40" />
            <div className="text-gray-700 dark:text-white sm:text-sm flex gap-5">
                <a href="#">Home</a>
                <a href="#services">Services</a>
                <a href="#our-work">Our Work</a>
                <a href="#contact-us">Contact Us</a>
            </div>
        <div className='flex items-center gap-3'>
                <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                <a href='#contact-us' className='text-sm flex items-center gap-2 bg-blue-600 text-white px-6 py-2 border-2 rounded-full cursor-pointer hover:scale-105 hover:bg-blue-700 transition-all'>
                    connect <img src={assets.arrow_icon} width={14} alt='' />
                </a>
            </div>
        </motion.div>
    )
}

export default Nav