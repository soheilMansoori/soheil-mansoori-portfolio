'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SECTIONS } from '@/constants';

export default function About() {
 const t = useTranslations();
 const skills = (t.raw(SECTIONS.SKILLS) as { id: number; name: string; percent: number }[]) || [];
 const marginLeftClasses = ['ml-9', 'ml-6', 'ml-3', 'ml-1'];

 return (
  <div id={SECTIONS.ABOUT} className="w-full snap-start bg-whiteBg overflow-hidden">
   <div className="relative h-screen max-w-[1600px] mx-auto flex items-center justify-center">
    <div className="absolute ltr:left-8 top-10 rtl:right-8 w-96 h-96 rounded-full bg-indigo-500 shadow-indigo-500 shadow-2xl element-wave"></div>
    <div className="absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-[6rem] bg-opacity-40"></div>
    <div className="w-[90%] relative flex flex-col-reverse md:flex-row-reverse justify-evenly md:justify-center gap-5 md:gap-20">
     {/* about wrapper */}
     <motion.div className=" md:w-[70%]" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
      <div className="leading-[18px] md:leading-8 text-justify">
       <p className="text-indigo-600 font-bold text-xl md:text-3xl mb-2">{t('about.title')}</p>
       <div className="relative">
        <p>{t('about.description')}</p>
        <Image
         className="absolute left-1/2 -translate-x-1/2 bottom-20 md:-top-10 w-full md:w-9/12 opacity-10 md:opacity-5 pointer-events-none"
         alt=""
         src={'/images/logo-black.png'}
         width={300}
         height={500}
        />
       </div>
      </div>
      <div className="hidden md:flex gap-20 mt-10">
       {skills.slice(0, 4).map(({ id, name, percent }, index) => {
        const ml = marginLeftClasses[index] || 'ml-0';
        return (
         <div key={id} className={`flex items-center gap-1 ${ml}`}>
          <div className="bg-indigo-600 w-2 h-14 rounded-sm"></div>
          <div>
           <h2 className="font-bold text-4xl">{name}</h2>
           <div className="flex gap-2 text-sm ">
            <p>{percent}%</p>
           </div>
          </div>
         </div>
        );
       })}
      </div>
     </motion.div>

     {/* responsive about wrapper */}
     <motion.div
      className="w-full md:w-[30%] flex justify-between items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
     >
      <div className="flex flex-col md:hidden gap-5 tracking-widest">
       {skills.slice(0, 4).map(({ id, name, percent }, index) => {
        const ml = marginLeftClasses[index] || 'ml-0';
        return (
         <div key={id} className={`flex items-center gap-1 ${ml}`}>
          <div className="bg-indigo-600 w-2 h-12 rounded-sm"></div>
          <div>
           <h2 className="font-bold text-2xl">{name}</h2>
           <div className="flex gap-2">
            <p>{percent}%</p>
           </div>
          </div>
         </div>
        );
       })}
      </div>
      <Image className="w-[60%] object-cover md:w-full border-b-4 rounded-sm border-b-indigo-600" alt="" src={'/images/arash2.png'} width={300} height={500} />
     </motion.div>
    </div>
   </div>
  </div>
 );
}
