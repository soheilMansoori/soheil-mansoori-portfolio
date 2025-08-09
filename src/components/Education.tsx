'use client';
import Location from '@/icons/Location';
import { motion } from 'framer-motion';
import { useWindowWidth } from '../hooks/UseWindowWidth';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { useTranslations } from 'next-intl';

interface EducationTypes {
 id: number;
 title: string;
 list: string[];
 location: string;
 time: string;
}

export default function Education() {
 const t = useTranslations();
 const width = useWindowWidth();
 const skills = (t.raw('skills') as { id: number; percent: number; name: string }[]) || [];

 const educationList: EducationTypes[] = [
  {
   id: 1,
   title: 'title',
   list: ['list_1', 'list_2'],
   location: 'location',
   time: 'time',
  },
  {
   id: 2,
   title: 'title2',
   list: ['list2_1', 'list2_2'],
   location: 'location2',
   time: 'time2',
  },
  {
   id: 3,
   title: 'title3',
   list: ['list3_1', 'list3_2'],
   location: 'location3',
   time: 'time3',
  },
  {
   id: 4,
   title: 'title4',
   list: ['list4_1', 'list4_2'],
   location: 'location4',
   time: 'time4',
  },
  {
   id: 5,
   title: 'title5',
   list: ['list5_1', 'list5_2'],
   location: 'location5',
   time: 'time5',
  },
  {
   id: 6,
   title: 'title6',
   list: ['list6_1'],
   location: 'location6',
   time: 'time6',
  },
 ];

 return (
  <div id="education" className="w-full snap-start bg-blackBg overflow-hidden">
   <div className="relative h-screen max-w-[1600px] mx-auto">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[40%] rounded-full bg-purpl shadow-purpl shadow-2xl "></div>
    <div className="flex flex-col py-8 justify-around h-full bg-clip-padding backdrop-filter backdrop-blur-[10rem] bg-opacity-20">
     <motion.div
      className="hidden md:flex h-auto w-[90%] mx-auto gap-6 flex-wrap items-center justify-evenly text-white pb-4"
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
     >
      {educationList.map((e) => (
       <div key={e.id} className="h-[11em] w-full md:w-[30%] p-2.5 rounded-xl transition-all duration-300 ease-out hover:bg-indigo-600 hover:text-gray-100 cursor-pointer border-b-2 border-indigo-500">
        <div className="flex flex-col justify-between h-full">
         <h1 className="text-lg font-medium text-center">{t(e.title as keyof typeof t, { count: 1 })}</h1>
         <div className="flex flex-col gap-1 text-center">
          {e.list.map((i, index) => (
           <p key={index} className="text-sm">
            {t(i as keyof typeof t, { count: 1 })}
           </p>
          ))}
         </div>
         <div className="flex text-sm items-center justify-between">
          <div className="flex gap-1 items-center">
           <Location size="18" />
           <p>{t(e.location as keyof typeof t, { count: 1 })}</p>
          </div>
          <p className="text-xs">{t(e.time as keyof typeof t, { count: 1 })}</p>
         </div>
        </div>
       </div>
      ))}
     </motion.div>

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
       {educationList.map((e) => (
        <SwiperSlide
         key={e.id}
         className="max-h-[10rem] text-white w-full p-2.5 rounded-xl transition-all duration-300 ease-out hover:bg-indigo-600 hover:text-gray-100 cursor-pointer border-b-2 border-indigo-500"
        >
         <div className="flex flex-col justify-between h-full">
          <h1 className="text-lg font-medium text-center">{t(e.title as keyof typeof t, { count: 1 })}</h1>
          <div className="flex flex-col gap-1 text-center">
           {e.list.map((i, index) => (
            <p key={index} className="text-sm">
             {t(i as keyof typeof t, { count: 1 })}
            </p>
           ))}
          </div>
          <div className="flex text-sm items-center justify-between">
           <div className="flex gap-1 items-center">
            <Location size="18" />
            <p>{t(e.location as keyof typeof t, { count: 1 })}</p>
           </div>
           <p className="text-xs">{t(e.time as keyof typeof t, { count: 1 })}</p>
          </div>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     )}

     {/* skills progress wrapper */}
     <div className="flex flex-wrap text-white gap-5 w-[90%] justify-between mx-auto text-[17px]">
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
