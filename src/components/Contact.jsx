import React from 'react'

// import contact data
import { contactData } from '../data'

// import motion
import { motion } from 'framer-motion'

// import variants
import { fadeIn } from '../variants' 

const Contact = () => {

  // destructure contact data
  const {title, info, form} = contactData

  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* Text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.4}}
            className='flex-1'
          >
            {/* Title */}
            <h2 className='h2 max-w-[490px]'>
              {title}
            </h2>
            {/* Info items */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {info.map((item, index) => {
                // destructure item
                const {title, subtitle, address, phone, email, link} = item
                return (
                  // item
                  <div key={index}>
                    {/* Title */}
                    <div className='font-primary uppercase font-medium text-xl mb-3'>
                      {title}
                    </div>
                    {/* Subtitle */}
                    <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
                      {subtitle}
                    </div>
                    {/* Address, phone & email */}
                    <div className='flex flex-col gap-y-3 mb-8'>
                      {/* Address */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{address.icon}</div>
                        <div className='font-medium'>{address.name}</div>
                      </div>
                      {/* Phone */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{phone.icon}</div>
                        <div className='font-medium'>{phone.number}</div>
                      </div>
                      {/* Email */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{email.icon}</div>
                        <div className='font-medium'>{email.address}</div>
                      </div>
                    </div>
                    {/* Link */}
                    <a className='font-medium border-b border-dark pb-[5px]' href="#!">
                      {link}
                    </a>
                  </div>
                )
              })}
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.4}}
            className='flex-1 xl:pl-[40px] flex justify-center items-center'
          >
            <form className='flex flex-col gap-y-10 w-full'>

              <input 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
                placeholder={form.name}  
                type="text" 
              />

              <input 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
                placeholder={form.email}  
                type="text" 
              />

              <input 
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' 
                placeholder={form.message}  
                type="text" 
              />

              {/* Button */}
              <button className='btn btn-sm btn-dark self-start'>{form.btnText}</button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact