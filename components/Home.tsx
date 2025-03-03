'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Call from '../public/icons/Call'
import Linkedin from '../public/icons/Linkedin'
import Mail from '../public/icons/Mail'
import { Switch } from '@/app/[locale]/switch'
import { useI18n } from '@/locales/client'
import Whatsapp from '@/public/icons/Whatsapp'
import Instagram from '@/public/icons/Instagram'
import { motion } from 'framer-motion';

export default function Home() {
  const t = useI18n();

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='w-full snap-start bg-blackBg'>
      <div className='relative h-screen max-w-[1600px] mx-auto'>
        <div className='absolute top-16 ltr:right-60 rtl:left-60 size-40 rounded-full bg-purpl shadow-purpl shadow-2xl element-wave'></div>
        <div className='absolute bottom-40 ltr:left-80 rtl:right-80 w-60 h-40 rounded-full bg-purpl shadow-purpl shadow-2xl ltr:element-wave-x'></div>
        <div className='absolute h-full w-[100%] bg-blackBg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20'></div>
        <motion.div
          className='absolute z-40 flex items-center px-5 text-white justify-between h-14 w-[50%] top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-white'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          >
          <div className='flex gap-4 group hover:cursor-pointer'>
            <Image 
              className='w-10 object-cover'
              src='/images/logo-white.png'
              alt='logo'
              width={500}
              height={500}
            /> 
            <div className='opacity-0 transition-all z-20 hidden group-hover:inline-block group-hover:absolute bg-clip-padding backdrop-filter  backdrop-blur-3xl bg-black group-hover:opacity-70 pointer-events-none h-screen w-screen left-1/2 transform -translate-x-1/2 -top-10 rounded-3xl object-cover'></div>
            <Image 
              className='scale-0 transition-all z-30 group-hover:scale-100 absolute  left-1/2 transform -translate-x-1/2 top-24 w-[30rem] rounded-[3rem] object-cover'
              src='/images/visit-cart.JPG'
              alt='visit cart'
              width={1000}
              height={1000}
            /> 

          </div>

          <ul className='flex gap-5'>
            <li className='cursor-pointer'>{t('home', { count : 1 })}</li>
            <li className='cursor-pointer' onClick={() => handleScroll('background')}>{t('background', { count : 1 })}</li>
            <li className='cursor-pointer' onClick={() => handleScroll('education')}>{t('education', { count : 1 })}</li>
            <li className='cursor-pointer' onClick={() => handleScroll('business')}>{t('business', { count : 1 })}</li>
          </ul>
          <Switch/>
        </motion.div>


        <motion.div 
          className='absolute flex justify-between text-white mt-14 w-[87%] left-1/2 transform -translate-x-1/2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          >
          <div className=' leading-none mt-24'>
            <p className='text-xl'>{t('dr', { count : 1 })}</p>
            <h1 className='text-[6rem] font-bold bg-gradient-to-r from-purpl to-white bg-clip-text text-transparent rtl:pr-1 rtl:leading-[7rem]'>{t('name', { count : 1 })}</h1>
            <h1 className='text-[6rem] font-bold bg-gradient-to-r from-purpl to-white bg-clip-text text-transparent rtl:pr-1 rtl:leading-[7rem]'>{t('last', { count : 1 })}</h1>
            <div className='flex gap-4 mt-5'>    
              <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"tel:09103060889"}><Call/></Link>
              <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"https://www.linkedin.com/in/arash-aryanik-58b97885?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}><Linkedin/></Link>
              <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"mailto:arash.aryanik@gmail.com"}><Mail/></Link>
              <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"https://wa.me/09103060889"}><Whatsapp/></Link>
              <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"https://www.instagram.com/arasharyanik?igsh=ZjVvc3IwYm1nMG8y"}><Instagram/></Link>
            </div>

          </div>

          <Image 
            className='w-[32%] object-cover border-b-2 border-purpl'
            src='/images/arash.png'
            alt='photo'
            width={1000}
            height={1000}
          />
        </motion.div >


        <div>
        </div>
      </div>
    </div>
  )
}
