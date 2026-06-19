import React from 'react'
import assets from '../assets/assets'
const Nav = ({ theme, setTheme }) => {
    return (
        <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-4 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
            <img src={theme === 'dark' ? assets.darkLogo : assets.lightLogo} alt="Logo" className="w-32 lm:w-40" />
        </div>
    )
}

export default Nav