'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Call from '../public/icons/Call'
import Linkedin from '../public/icons/Linkedin'
import Mail from '../public/icons/Mail'
import { Switch } from '@/app/[locale]/switch'


export default function Home() {


  return (
    <div className='relative h-screen w-full snap-start bg-blackBg  '>
      {/* <div className='absolute bottom-40 left-80 w-60 h-40 rounded-full bg-purpl shadow-purpl shadow-2xl'></div> */}
      {/* <div className='absolute top-16 right-60 size-40 rounded-full bg-purpl shadow-purpl shadow-2xl'></div> */}
      {/* <div className='absolute h-full w-[100%] bg-blackBg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20'></div> */}
      <nav className='absolute z-40 flex items-center px-5 text-white justify-between h-14 w-[50%] top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-white'>
        <div className='flex gap-4  '>
          <Image 
            className='w-10 object-cover'
            src='/images/logo-white.png'
            alt='logo'
            width={500}
            height={500}
          /> 
          <Switch/>
        </div>

        <ul className='flex gap-5'>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>Background</li>
          <li>Education</li>
          <li>Business</li>
        </ul>
      </nav>


      <div className='absolute flex justify-between text-white mt-20 w-[87%] left-1/2 transform -translate-x-1/2'>
        <div className=' leading-none mt-20'>
          <p className='text-xl mb-5'>Hi I'm</p>
          <h1 className='text-[6rem] font-bold bg-gradient-to-r from-purpl to-white bg-clip-text text-transparent'>ARASH</h1>
          <h1 className='text-[6rem] font-bold bg-gradient-to-r from-purpl to-white bg-clip-text text-transparent'>ARYANIK</h1>
          <div className='flex gap-4 mt-5'>        
            <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"/"}><Call/></Link>
            <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"/"}><Linkedin/></Link>
            <Link className='p-2 bg-[#0f0f0f] rounded-full border border-purpl' href={"/"}><Mail/></Link>
          </div>

        </div>
          <Image 
            className='w-[29%] object-cover border-b-2 border-purpl '
            src='/images/arash.png'
            alt='logo'
            width={500}
            height={500}
          />
      </div>

      <div>
      </div>
    </div>
  )
}
