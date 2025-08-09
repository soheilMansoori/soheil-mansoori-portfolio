'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SOCIAL_LINKS, SECTIONS } from '@/constants';

export default function Introduction() {
 const t = useTranslations(SECTIONS.INTRODUCTION);

 return (
  <motion.div
   className="static mt-10 md:mt-0 md:absolute w-full flex flex-col-reverse top-0 md:flex-row justify-between items-center text-white md:w-[87%] md:left-1/2 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2"
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   viewport={{ once: false }}
   transition={{ duration: 1 }}
  >
   <div className="w-[90%] mx-auto md:w-full leading-none ltr:mt-10 md:mt-24 rtl:pt-14">
    <p className="text-xl rtl:mb-4 px-4 md:px-0">{t('job')}</p>
    <div className="flex flex-wrap justify-center rtl:gap-2 rtl:flex-row md:w-[60%] flex-row md:flex-col bg-gradient-to-r ltr:from-purpl rtl:from-white ltr:to-white rtl:to-purpl bg-clip-text text-transparent">
     <h1 className="text-[2.5rem] md:text-[6rem] font-bold md:rtl:pr-1 ltr:pr-2 md:px-0 rtl:leading-[2.8rem] md:rtl:leading-[7rem]">{t('name')}</h1>
     <h1 className="text-[2.5rem] md:text-[6rem] font-bold md:rtl:pr-1 rtl:leading-[2.8rem] md:rtl:leading-[7rem]">{t('family')}</h1>
    </div>
    {/* social links wrapper */}
    <div className="flex flex-wrap justify-center md:justify-normal gap-4 mt-10 md:mt-5 md:rtl:mt-8 ">
     {Object.values(SOCIAL_LINKS).map(({ url, Icon }) => (
      <Link key={url} href={url} className="p-2 px-[9px] bg-[#0f0f0f] rounded-full border border-purpl">
       {Icon}
      </Link>
     ))}
    </div>
   </div>

   {/* introduction image */}
   <Image className="w-[70%] mx-auto md:w-[32%] object-cover border-b-2 border-purpl" src="/images/arash.png" alt="photo" width={1000} height={1000} />
  </motion.div>
 );
}
