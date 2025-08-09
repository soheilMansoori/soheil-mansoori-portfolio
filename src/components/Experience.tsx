'use client';
import Location from '@/icons/Location';
import { motion } from 'framer-motion';
import { useWindowWidth } from '@/hooks/UseWindowWidth';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import { SECTIONS } from '@/constants';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

export default function Experience() {
 const t = useTranslations();
 const width = useWindowWidth();
 const skills = (t.raw(SECTIONS.SKILLS) as { id: number; percent: number; name: string }[]) || [];
 const experience = t.raw(SECTIONS.EXPERIENCE) as { id: number; job: string; stack: string; companyName: string; city: string; country: string; startDate: string; endDate: string }[];

 return (
  <div id={SECTIONS.EXPERIENCE} className="w-full snap-start bg-blackBg overflow-hidden">
   <div className="relative h-screen max-w-[1600px] mx-auto">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[40%] rounded-full bg-purpl shadow-purpl shadow-2xl "></div>
    <div className="flex flex-col py-8 justify-around h-full bg-clip-padding backdrop-filter backdrop-blur-[10rem] bg-opacity-20">
     {/* experience wrapper */}
     <motion.div
      className="hidden md:flex h-auto w-[90%] mx-auto gap-6 flex-wrap items-center  text-white pb-4"
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
     >
      {experience.map(({ id, job, stack, companyName, country, city, startDate, endDate }) => (
       <div key={id} className="h-[11em] w-full md:w-[30%] p-2.5 rounded-xl transition-all duration-300 ease-out hover:bg-indigo-600 hover:text-gray-100 cursor-pointer border-b-2 border-indigo-500">
        <div className="flex flex-col justify-between h-full">
         <h1 className="text-lg font-medium text-center">{job}</h1>
         <div className="flex flex-col gap-1 text-center">
          <p className="text-sm">{companyName}</p>
          {stack}
         </div>
         <div className="flex text-sm items-center justify-between">
          <div className="flex gap-1 items-center">
           <Location size="18" />
           <p>{`${country} - ${city}`}</p>
          </div>
          <p className="text-xs">{`${startDate} - ${endDate}`}</p>
         </div>
        </div>
       </div>
      ))}
     </motion.div>

     {/* responsive slider */}
     {width < 500 && (
      <Swiper
       slidesPerView={1}
       modules={[Grid, Pagination]}
       grid={{
        rows: 2,
       }}
       loop={true}
       spaceBetween={20}
       pagination
       className="mySwiper h-[50vh] w-[90%] mx-auto"
      >
       {experience.map(({ id, job, stack, companyName, country, city, startDate, endDate }) => (
        <SwiperSlide
         key={id}
         className="max-h-[10rem] text-white w-full p-2.5 rounded-xl transition-all duration-300 ease-out hover:bg-indigo-600 hover:text-gray-100 cursor-pointer border-b-2 border-indigo-500"
        >
         <div className="flex flex-col justify-between h-full">
          <h1 className="text-lg font-medium text-center">{job}</h1>
          <div className="flex flex-col gap-1 text-center">
           <p className="text-sm">{companyName}</p>
           {stack}
          </div>
          <div className="flex text-sm items-center justify-between">
           <div className="flex gap-1 items-center">
            <Location size="18" />
            <p>{`${country} - ${city}`}</p>
           </div>
           <p className="text-xs">{`${startDate} - ${endDate}`}</p>
          </div>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     )}

     {/* skills progress wrapper */}
     <div style={{ direction: 'ltr' }} className="flex flex-wrap text-white gap-5 w-[90%] justify-between mx-auto text-[17px]">
      {skills.map(({ id, name, percent }) => (
       <motion.div key={id} className="w-full md:w-[45%]" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}>
        <div className="flex justify-between">
         <h1>{name}</h1>
         <h1>{percent}%</h1>
        </div>
        <div className="w-full bg-white rounded-xl h-3 mt-1">
         <div className="bg-indigo-500 h-3 rounded-xl" style={{ width: `${percent}%` }}></div>
        </div>
       </motion.div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}
