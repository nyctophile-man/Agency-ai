import React, { useState } from 'react'
import { motion } from "motion/react"


const Servicecard = ({servics,index}) => {
    const [position, setPosition] = useState({x: 0, y: 0 })
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }
  return (
    

<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.2 } }
viewport={{ once: true } }
className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border-2 border-transparent hover:border-sky-400 transition-colors' onMouseMove={handleMouseMove}>
   
<div className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute transition-opacity duration-500 mix-blend-lighten opacity-70' style={{top:position.y - 150 , left:position.x - 150}}/>

    <div className='flex items-center gap-10 p-8 hover:p-6 hover:m-1 transition-all rounded-[10px] bg-white dark:bg-gray-900 relative'>
        <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
            <img src={servics.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2'/>
        </div>
        <div className='flex-1'>
          <h3 className='font-bold text-gray-900 dark:text-white'>{servics.title}</h3>
          <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>{servics.description}</p>
        </div>
    </div>

    
</motion.div>
  )
}

export default Servicecard