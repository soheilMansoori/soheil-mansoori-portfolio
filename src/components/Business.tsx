'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Business() {
 const t = useTranslations();
 const skills = t.raw('skills') as {
  id: number;
  percent: number;
  name: string;
  title: string;
  description: string;
 }[];

 return (
  <div id="business" className="w-full snap-start bg-whiteBg overflow-hidden">
   <div className="relative h-screen max-w-[1600px] mx-auto flex items-center justify-center overflow-hidden">
    <div className="absolute top-[40%] left-[10%] w-[30%] h-[40%] rotate-45 rounded-full bg-purple-600 shadow-purpl shadow-2xl"></div>
    <div className="absolute top-[10%] left-[30%] w-[30%] h-[40%] rotate-45 rounded-full bg-yellow-500 shadow-yellow-500 shadow-2xl  element-wave"></div>
    <div className="absolute top-[40%] left-[45%] w-[30%] h-[40%] rotate-45 rounded-full bg-cyan-500 shadow-cyan-500 shadow-2xl"></div>
    <div className="absolute top-[10%] left-[60%] w-[30%] h-[40%] rotate-45 rounded-full bg-red-500 shadow-red-500 shadow-2xl"></div>
    <div className="absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-[6rem] bg-opacity-30"></div>
    <div className="w-[90%] h-[80vh] md:h-auto overflow-y-scroll overflow-x-hidden gap-4 relative flex flex-wrap justify-center items-center group cursor-pointer [&::-webkit-scrollbar]:w-2 md:[&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
     {skills.map(({ id, name, title, description }) => (
      <motion.div
       key={id}
       className="relative w-full md:w-[30%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto flex flex-col justify-start "
       initial={{ x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: false }}
       transition={{ duration: 0.7 }}
      >
       <div className="flex justify-between flex-col gap-3">
        <p className="text-lg font-semibold ">{name}</p>
        <p className="text-sm font-semibold">{title}</p>
       </div>
       <p className="text-sm mt-1 rtl:mt-3 ">{description}</p>
      </motion.div>
     ))}
    </div>
   </div>
  </div>
 );
}
