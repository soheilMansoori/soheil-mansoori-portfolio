"use client";
import React from 'react'
import Image from 'next/image'
import { useI18n } from '@/locales/client';
import { motion } from 'framer-motion';

export default function Background() {
  const t = useI18n();

  return (
    <div id='background' className='w-full snap-start bg-whiteBg'>
      <div className='relative h-screen max-w-[1600px] mx-auto flex items-center justify-center'>
        <div className='absolute ltr:left-8 rtl:right-8 w-96 h-96 rounded-full bg-indigo-500 shadow-indigo-500 shadow-2xl'></div>
        <div className='absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-[6rem] bg-opacity-40'></div>
        <div className='w-[90%] relative flex flex-row-reverse justify-center gap-20'>
            <motion.div
              className='w-[70%]'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <div className='leading-8 text-justify'>
                <p className='text-indigo-600 font-bold text-3xl mb-2'>{t('WhoAmI', { count : 1 })}</p>
                <div className='relative'>
                  <p>{t('backgroundInfo', { count : 1 })}</p>
                  <Image
                    className='absolute left-1/2 -translate-x-1/2 -top-10 w-9/12 opacity-5 pointer-events-none'
                    alt=''
                    src={"/images/logo-black.png"}
                    width={300}
                    height={500}
                  />
                </div> 
              </div>
              <div className='flex gap-20 mt-10'>
                <div className='flex items-center gap-1'>
                  <div className='bg-indigo-600 w-2 h-14 rounded-sm'></div>
                  <div>
                    <h2 className='font-bold text-4xl'>C2</h2>
                    <div className='flex gap-2 text-sm '>
                      <p>{t('english', { count : 1 })}</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='bg-indigo-600 w-2 h-14 rounded-sm'></div>
                  <div>
                    <h2 className='font-bold text-4xl'>A2</h2>
                    <p>{t('german', { count : 1 })}</p>
                  </div>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='bg-indigo-600 w-2 h-14 rounded-sm'></div>
                  <div>
                    <h2 className='font-bold text-4xl'>A1</h2>
                    <p>{t('french', { count : 1 })}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className='w-[30%] object-cover'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
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
    </div>
  )
}
