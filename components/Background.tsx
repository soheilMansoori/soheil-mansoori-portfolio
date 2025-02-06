"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function Background() {


  return (
    <div className='relative flex items-center justify-center h-screen snap-start bg-whiteBg text-black'>
      <div className='absolute top-40 right-60 w-96 h-20 rotate-[110deg] rounded-full bg-purpl shadow-purpl shadow-2xl opacity-80'></div>
      <div className='absolute top-40 left-0 w-96 h-20 rotate-45 rounded-full bg-purpl shadow-purpl shadow-2xl'></div>
      <div className='absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30'></div>
      <div className='w-[90%] relative flex justify-center gap-20'>
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
              I believe that a decades-long experience in education and coaching, as well as strong management skills, has signicantly
              contributed to the academic and practical advancement of my eld of work. Eciency, commitment, enthusiasm, and high
              motivation are my main characteristics. My ability to establish effective communication with colleagues and students, problemsolving skills, exceptional management techniques, and performance evaluation capabilities have paved the way for success in the
              elds of education, coaching, and management. With over 20 years of teaching experience in English teaching, I am currently
              working as a freelancer in the eld of business administration, and also teaching English as an <span className='font-medium inline'>IELTS/TOEFL</span> instructor and language
              teacher. After two years of work and study in Germany and receiving the CELTA certicate from Cambridge University in Frankfurt, I
              am now pursuing a PhD in English teaching in Tehran.
            </div>
            <div className='flex gap-20 mt-10'>
              <div className='flex items-center gap-1'>
                <div className='bg-purpl w-2 h-14 rounded-sm  '></div>
                <div>
                  <h2 className='font-bold text-4xl'>C2</h2>
                  <div className='flex gap-2 text-sm '>
                    <p>English</p>
                    <p>IELTS 8.5</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-1 mr-7'>
                <div className='bg-purpl w-2 h-14 rounded-sm  '></div>
                <div>
                  <h2 className='font-bold text-4xl'>A2</h2>
                  <p className='text-sm '>German</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <div className='bg-purpl w-2 h-14 rounded-sm  '></div>
                <div>
                  <h2 className='font-bold text-4xl'>A1</h2>
                  <p className='text-sm '>French</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='w-[28%] object-cover'
            initial={{opacity: 0, scale: 0.5}}
            animate={{
                opacity: 1,
                scale: 1,
            transition:{duration:.5}
            }}

          >
            <Image
              className=' rounded-xl bg-gradient-to-tr from-whiteBg via-purple-200 to-whiteBg  '
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
