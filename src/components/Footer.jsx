import React from 'react'

// import data
import { footerData } from '../data'

// import motion
import { motion } from 'framer-motion'

// import variants
import { fadeIn } from '../variants'

// stagger container
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {

  // destructure footer data
  const {about, links, program, newsletter} = footerData

  return (
    <footer className='section bg-dark'>
      <div className="container mx-auto">
        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          {/* About */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            {/* Title */}
            <div className='font-primary text-xl uppercase tracking-[0.08em]'>
              {about.title}
            </div>
            {/* Subtitle */}
            <div className='leading-relaxed text-[#dbdbdb]'>
              {about.subtitle}
            </div>
            {/* Address, Phone & Email */}
            <div className='flex flex-col gap-y-4 font-semibold text-[#dbdbdb]'>
              {/* Address */}
              <div className='flex items-center gap-x-[10px]'>
                <div>
                  {about.address.icon}
                </div>
                <div>
                  {about.address.name}
                </div>
              </div>
              {/* Phone */}
              <div className='flex items-center gap-x-[10px]'>
                <div>
                  {about.phone.icon}
                </div>
                <div>
                  {about.phone.number}
                </div>
              </div>
              {/* Email */}
              <div className='flex items-center gap-x-[10px]'>
                <div>
                  {about.email.icon}
                </div>
                <div>
                  {about.email.address}
                </div>
              </div>
            </div>
          </motion.div>
          {/* Links */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col xl:items-center'
          >
            <div>
              <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
                {links.title}
              </div>
              <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                {links.items.map((item, index) => {
                  // destructure item data
                  const {href, name} = item;
                  return(
                    <li key={index}>
                      <a className='hover:text-white transition' href={href}>
                        {name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
          {/* Program */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1'
          >
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {program.title}
            </div>
            <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
              {program.items.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#!">{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
          {/* Newsletter */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1'
          >
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {newsletter.title}
            </div>
            <div className='leading-relaxed mb-9 text-[#dbdbdb]'>
              {newsletter.subtitle}
            </div>
            <form className='flex justify-between items-start border-b border-[#b6b6b6]'>
              <input 
                className='outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2' 
                type="text"
                placeholder={newsletter.form.placeholder}
              />
              <button className='text-2xl cursor-pointer' type='submit'>
                {newsletter.form.icon}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer