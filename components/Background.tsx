"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { useI18n } from '@/locales/client';

export default function Background() {
  const t = useI18n();

  return (
    <div className='relative flex items-center justify-center h-screen snap-start bg-whiteBg text-black'>
      <div className='absolute top-[20%] left-[2%] w-48 h-40 rounded-full bg-indigo-500 shadow-indigo-500 shadow-2xl  element-wave'></div>
      <div className='absolute top-[50%] left-[5%] w-80 h-40 rounded-full bg-indigo-500 shadow-indigo-500 shadow-2xl'></div>
      <div className='absolute top-[20%] left-[15%] w-48 h-40 rounded-full bg-indigo-500 shadow-indigo-500 shadow-2xl'></div>
      <div className='absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-[6rem] bg-opacity-40'></div>
      <div className='w-[90%] relative flex flex-row-reverse justify-center gap-20'>
          <motion.div
            className='w-[70%]'
            initial={{opacity: 0, scale : 0.5}}
            animate={{
                opacity: 1,
                scale: 1,
            transition:{duration:0.5}
            }}

          >
            <div className='leading-8 text-justify'>
              <p className='text-indigo-600 font-bold text-3xl mb-2'>Who am I?</p>
              {t('backgroundInfo', { count : 1 })} 
                         </div>
            <div className='flex gap-20 mt-10'>
              <div className='flex items-center gap-1'>
                <div className='bg-indigo-600 w-2 h-14 rounded-sm  '></div>
                <div>
                  <h2 className='font-bold text-4xl'>C2</h2>
                  <div className='flex gap-2 text-sm '>
                    <p>English</p>
                    <p>IELTS 8.5</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-1 mr-7'>
                <div className='bg-indigo-600 w-2 h-14 rounded-sm  '></div>
                <div>
                  <h2 className='font-bold text-4xl'>A2</h2>
                  <p className='text-sm '>German</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <div className='bg-indigo-600 w-2 h-14 rounded-sm  '></div>
                <div>
                  <h2 className='font-bold text-4xl'>A1</h2>
                  <p className='text-sm '>French</p>
                </div>
              </div>
            </div>


            {/* <div className='flex  text-white gap-4 mt-10'>
              <div className='p-4 py-1 text-center bg-indigo-600 rounded-xl'>
                <h2 className='font-bold text-4xl '>C2</h2>
                <div className=' text-sm '>
                  <p>English</p>
                  <p>IELTS 8.5</p>
                </div>
              </div>
              <div className='p-4 py-1 text-center bg-indigo-600 rounded-xl'>
                <h2 className='font-bold text-4xl'>A2</h2>
                <p className='text-sm mt-2'>German</p>
              </div>
              <div className='p-4 py-1 text-center bg-indigo-600 rounded-xl'>
                <h2 className='font-bold text-4xl'>A1</h2>
                <p className='text-sm mt-2'>French</p>
              </div>
            </div> */}


            {/* <div className='flex gap-20 mt-10'>
              <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle ">C2</div>
                <div className="notibody flex gap-2">
                  <p>English</p>
                  <p>IELTS 8.5</p>
                </div>
              </div>
              <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle ">A2</div>
                <div className="notibody">
                  <p>German</p>
                </div>
              </div>
              <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle ">A1</div>
                <div className="notibody">
                  <p>French</p>
                </div>
              </div>
            </div> */}
          </motion.div>
          <motion.div
            className='w-[30%] object-cover'
            initial={{opacity: 0, scale: 0.5}}
            animate={{
                opacity: 1,
                scale: 1,
            transition:{duration:.5}
            }}

          >
            <Image
              className='w-full border-b-4 rounded-sm border-b-indigo-600'
              alt=''
              src={"/images/arash2.png"}
              width={300}
              height={500}
            />
          </motion.div>
      </div>
    </div>
  )
}
