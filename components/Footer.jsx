import React from 'react'
import Container from './Container'
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa6";
import { social_Icons } from '@/constants/data';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='py-[40px]'>
        <Container>
            <div className="FlexBetween">
                <h4 className='text-[15px] text-black'>
                ©2024 Hammad Mughal
                </h4>
                <div className="flex items-center gap-2">
                   {social_Icons.map((item,i)=>(
                    <Link className='text-green transition hover:opacity-70 cursor-pointer' key={i} href={item.path}>{item.icon}</Link>
                   ))}
                </div>
            </div>
        </Container>
    </div>
  )
}
