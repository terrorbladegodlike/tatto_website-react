import React from 'react'

// import motion
import { motion } from 'framer-motion'

const Copyright = () => {
  return (
    <div className='bg-dark text-[#dbdbdb] py-6 border-t border-[#2b2b2b]'>
      <div className="container mx-auto">
        <motion.div
          initial={{y: 40, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{
            type: 'tween',
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{once: false, amount: 0}}
          className='tracking=[0.02em] text-base'
        >
          &copy; 2023 
          <span className='font-semibold text-white'>The Void Tatto.</span>
          All rights reserved.
        </motion.div>
      </div>
    </div>
  )
}

export default Copyright