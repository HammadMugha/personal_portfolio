import React from 'react'
import {animate, motion} from "framer-motion"


const stairsAnimation = {
    initial:{
        top: "0%"
    },
    animate:{
        top: "100%"
    },
    exist:{
        top: ["100%","0%"]
    },
}


const reverseIndex = (index)=>{
    const totalSteps = 6;
    return totalSteps - index - 1
}



export default function Stairs() {

  return (
    <>
    {[...Array(6)].map((_,index)=> (
        <motion.div variants={stairsAnimation} key={index} initial="initial"
        animate="animate" exit="exist" transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
        }}
        className='h-full w-full bg-green relative'
        />
        
    ))}
    </>
  )
}
