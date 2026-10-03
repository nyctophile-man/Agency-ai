import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({ theme }) => {
  const logoSrc = theme === 'dark' ? assets.logo_dark : assets.logo

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 } }
    whileInView={{ opacity: 1, y: 0 } }
    transition={{ duration: 0.8 } }
    viewport={{ once: true } }
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      {/* footer top */}
      <div className='flex flex-col gap-10'>
        <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 } }
        viewport={{ once: true } }
        className='flex flex-col items-start gap-6'>
          <img src={logoSrc} className='w-32 sm:w-44' alt="Logo" />
          <p className='max-w-md text-gray-700 dark:text-white'>From Strategy to execution we craft digital solutions that move your business forward.</p>
        <ul className='flex flex-wrap gap-6 text-sm text-gray-700 dark:text-white'>
          <li><a  href='#hero'>Home</a></li>
          <li><a  href='#services'>Services</a></li>
          <li><a  href='#our-work'>Our Work</a></li>
          <li><a  href='#contact-us'>Contact Us</a></li>
        </ul>
        </motion.div>
      </div>
      <motion.div
      initial={{ opacity: 0, x: 30 } }
      whileInView={{ opacity: 1, x: 0 } }
      transition={{ duration: 0.6, delay: 0.3 } }
      viewport={{ once: true }}
      className='text-gray-900 dark:text-white mt-10 text-right'>
         <h3 className='font-semibold'>Subscribe to our newsletter</h3>
         <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources sent to your inbox weekly.</p>
       <div className='flex flex-col sm:flex-row sm:items-center justify-end gap-2 text-sm'>
         <input type="email"  placeholder='Enter your email' className='w-full sm:w-56 h-10 px-3 py-2 text-sm outline-none rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'/>
         <button className='bg-primary text-white rounded h-10 px-6 py-2'>Subscribe</button>
       </div>
      </motion.div>
      <hr className=' border-gray-300 dark:border-gray-600 my-6'/>

      {/* footer bottom */}
      <motion.div
      initial={{opacity:0}}
      whileInView={{ opacity: 1 } }
      transition={{ duration: 0.5, delay: 0.4 } }
      viewport={{ once: true }}
      className='pb-6 text-sm text-gray-500 flex'>
        <div className='flex items-center justify-between gap-4'> 
            <img src={assets.facebook_icon}/>
            <img src={assets.twitter_icon}/>
            <img src={assets.instagram_icon}/>
            <img src={assets.linkedin_icon}/>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer