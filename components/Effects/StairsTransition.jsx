"use client"
import { AnimatePresence,motion } from 'framer-motion';
import { usePathname } from 'next/navigation'
import React from 'react'
import Stairs from './Stairs';

export default function StairAnimate() {
   const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}  className='z-40 h-screen w-screen flex fixed right-0 left-0 top-0 pointer-events-none'>
          <Stairs />
        </div>
    </AnimatePresence>
  )
}
