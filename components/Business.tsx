'use client'
import { useI18n } from '@/locales/client';
import React from 'react'
import { motion } from 'framer-motion';

export default function Business() {

  const t = useI18n();

  return (
    <div id='business' className='w-full snap-start bg-whiteBg'>
      <div className='relative h-screen max-w-[1600px] mx-auto flex items-center justify-center overflow-hidden'>
      {/* <div className='h-screen relative snap-start bg-whiteBg '>   */}
        {/* <div className='absolute top-40 right-60 w-96 h-20 rotate-[110deg] rounded-full bg-purpl shadow-purpl shadow-2xl opacity-80 element-wave'></div> */}
        <div className='absolute top-[40%] left-[10%] w-[30%] h-[40%] rotate-45 rounded-full bg-purple-600 shadow-purpl shadow-2xl'></div>
        <div className='absolute top-[10%] left-[30%] w-[30%] h-[40%] rotate-45 rounded-full bg-yellow-500 shadow-yellow-500 shadow-2xl  element-wave'></div>
        <div className='absolute top-[40%] left-[45%] w-[30%] h-[40%] rotate-45 rounded-full bg-cyan-500 shadow-cyan-500 shadow-2xl'></div>
        <div className='absolute top-[10%] left-[60%] w-[30%] h-[40%] rotate-45 rounded-full bg-red-500 shadow-red-500 shadow-2xl'></div>
        <div className='absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-[6rem] bg-opacity-30'></div>
        {/* <div className='w-[90%] relative h-full p-10 flex flex-col justify-between items-center'> */}
        <div className="w-[90%] gap-4 relative flex flex-wrap justify-center items-center group cursor-pointer">

            <motion.div
              className="relative w-[35%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:blur-sm hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto flex flex-col justify-start [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full"
              initial={{ x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}  
            >
              <p className="text-lg font-semibold ">{t('box1', { count : 1 })}</p>
              <p className="text-sm mt-6">{t('box1_list1', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box1_list2', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box1_list3', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box1_list4', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box1_list5', { count : 1 })}</p>
            </motion.div>
            <motion.div 
              className="relative w-[35%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:blur-sm hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto flex flex-col justify-start [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full"
              initial={{ x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }} 
            >
              <p className="text-lg font-semibold ">{t('box2', { count : 1 })}</p>
              <p className="text-sm mt-6 ">{t('box2_list1', { count : 1 })}</p>
              <p className="text-sm mt-3 rtl:mt-7">{t('box2_list2', { count : 1 })}</p>
            </motion.div>


          {/* ردیف دوم */}

            <motion.div 
              className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter  backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:blur-sm hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto flex flex-col justify-start [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full"
              initial={{ x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }} 
              >
              <p className="text-lg font-semibold ">{t('box3', { count : 1 })}</p>
              <p className="text-sm mt-6">{t('box3_list1', { count : 1 })}</p>
              <p className="text-sm mt-3 rtl:mt-7">{t('box3_list2', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box3_list3', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box3_list4', { count : 1 })}</p>
            </motion.div>
            <motion.div className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full ">
              <p className="text-lg font-semibold ">{t('box4', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box4_list1', { count : 1 })}</p>
              <p className="text-sm mt-5 rtl:mt-7">{t('box4_list2', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box4_list3', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box4_list4', { count : 1 })}</p>
            </motion.div>
            <motion.div 
              className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full "
              initial={{ x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}   
            >
              <p className="text-lg font-semibold ">{t('box5', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box5_list1', { count : 1 })}</p>
            </motion.div>


          {/* ردیف سوم */}

            <motion.div 
              className="relative w-[35%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full "
              initial={{ x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }} 
            >
              <p className="text-lg font-semibold ">{t('box6', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box6_list1', { count : 1 })}</p>
            </motion.div>
            <motion.div 
              className="relative w-[35%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full "
              initial={{ x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }} 
            >
              <p className="text-lg font-semibold ">{t('box7', { count : 1 })}</p>
              <p className="text-sm mt-3">{t('box6_list1', { count : 1 })}</p>
            </motion.div>
        </div>



          {/* <div className='w-9/12 grid grid-cols-2 gap-4'>
            <div className='w-full h-40 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40'>
              <p className='text-lg font-semibold '>Director of International Relations</p>
              <p className='text-sm mt-3'>Managing and planning international relations with business partners and international organizations</p>
            </div>
            <div className='w-full h-40 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40'></div>
          </div>


          <div className='grid grid-cols-3 gap-4 justify-between'>
            <div className='w-full h-40 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40'>
              <p className='text-lg font-semibold '>Director of International Relations</p>
              <p className='text-sm mt-3'>Managing and planning international relations with business partners and international organizations</p>
            </div>
            <div className='w-full h-40 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40'></div>
            <div className='w-full h-40 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40'></div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}
