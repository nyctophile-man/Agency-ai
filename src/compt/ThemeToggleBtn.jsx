import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(()=>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])
    
  return (
    <>
      <button 
        type="button" 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        className='cursor-pointer hover:opacity-70 transition-opacity'
      >
        {theme === 'dark' ? (
            <img onClick={()=>setTheme('light')} src={assets.sun_icon} alt="Switch to light mode" className='size-8 p-1 border border-gray-500 rounded-full' />
        ):(
            <img  onClick={()=>setTheme('dark')} src={assets.moon_icon} alt="Switch to dark mode" className='size-8 p-1 border border-gray-500 rounded-full'/>
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn