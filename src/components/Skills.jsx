import React, {useState, useEffect} from 'react'

// useInView hook
import { useInView } from 'react-intersection-observer'

// import circular
import {CircularProgressbar} from 'react-circular-progressbar'

// import circular style css
import 'react-circular-progressbar/dist/styles.css'

// import motion
import {motion} from 'framer-motion'

// import variants
import {fadeIn} from '../variants'

const Skills = () => {

  // destructure useInView hook
  const {ref, inView} = useInView({
    threshold: 0.2,
  });

  // full body tatoo state
  const [fullBody, setFullBody] = useState(0)

  // safety piercing state
  const [piercing, setPiercing] = useState(0)

  // full color tatto state
  const [fullColor, setFullColor] = useState(0)

  // temporary tatto state
  const [temporary, setTemporary] = useState(0)

  useEffect(() => {
    if(inView){
      setTimeout(() => {
        if (fullBody < 90){
          setFullBody(fullBody + 1)
        }
        if (piercing < 80){
          setPiercing(piercing + 1)
        }
        if (fullBody < 75){
          setFullColor(fullBody + 1)
        }
        if (temporary < 95){
          setTemporary(temporary + 1)
        }
      }, 50)
    } else {
      setFullBody(0)
      setFullColor(0)
      setPiercing(0)
      setTemporary(0)
    }
  }, [inView, fullBody, piercing, fullColor, temporary])

  // circular progressbar styles
  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#eeeeee',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <motion.section 
      className='section font-primary' 
      ref={ref}
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.1}}
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>

          {/* Circular Item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={1} 
              value={fullBody} 
              styles={styles}
              text={`${fullBody}%`}
            />
            {/* Text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>Full Body Tattoo</div>
          </div>

          {/* Circular Item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={1} 
              value={piercing} 
              styles={styles}
              text={`${piercing}%`}
            />
            {/* Text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Safely Piercing
            </div>
          </div>

          {/* Circular Item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={1} 
              value={fullColor} 
              styles={styles}
              text={`${fullColor}%`}
            />
            {/* Text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>Full Color Tattoo</div>
          </div>

          {/* Circular Item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={1} 
              value={temporary} 
              styles={styles}
              text={`${temporary}%`}
            />
            {/* Text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>Temporary Tattoo</div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Skills