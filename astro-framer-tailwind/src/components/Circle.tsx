import React from 'react'
import { motion } from "framer-motion"

const Circle = () => {
  return (
    <motion.div className='absolute bg-white h-60 w-60 rounded-full blur-[200px] opacity-80 top-[50%] left-[30%]'
    initial={{
      x: 0,
      y: 0
    }}
    animate={{
      x: 40,
      y: 300
    }}
    transition={{
      delay: 0.5,
      repeat: Infinity,
      
    }}
    >
    </motion.div>
  )
}

export default Circle
