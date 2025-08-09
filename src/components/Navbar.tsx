import Image from 'next/image';
import Berger from '@/icons/Berger';
import ArrowRight from '@/icons/ArrowRight';
import { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Switch } from '@/components/Switch';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SECTIONS } from '@/constants';

type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export default function Navbar({ children }: PropsWithChildren) {
 const t = useTranslations('navbar');
 const [drawerOpen, setDrawerOpen] = useState(false);

 const scrollToSection = (id: SectionId) => {
  const section = document.getElementById(id);
  if (section) {
   section.scrollIntoView({ behavior: 'smooth' });
  }
 };

 return (
  <div className="w-full snap-start bg-blackBg overflow-hidden">
   <div className="relative h-screen max-w-[1600px] mx-auto overflow-hidden">
    <div className="absolute top-0 md:top-16 rtl:left-0 md:ltr:right-60 md:rtl:left-60 size-40 rounded-full bg-purpl shadow-purpl shadow-2xl element-wave "></div>
    <div className="absolute bottom-0 md:bottom-40 right-0 md:ltr:left-80 md:rtl:right-80 md:top-1/2 transform md:-translate-y-1/2 w-60 h-40 rounded-full bg-purpl shadow-purpl shadow-2xl ltr:element-wave-x"></div>
    <div className="absolute h-full w-[100%] bg-blackBg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20"></div>
    {/* navbar */}
    <motion.div
     className="absolute hidden  md:flex z-40 items-center px-5 text-white justify-between h-14 w-[50%] top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-white"
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: false }}
     transition={{ duration: 0.8 }}
    >
     <div className="flex gap-4 group hover:cursor-pointer">
      <Image className="w-10 object-cover" src="/images/logo-white.png" alt="logo" width={400} height={400} />
      <div className="opacity-0 transition-all z-20 hidden group-hover:inline-block group-hover:absolute bg-clip-padding backdrop-filter  backdrop-blur-3xl bg-black group-hover:opacity-70 pointer-events-none h-screen w-screen left-1/2 transform -translate-x-1/2 -top-10 rounded-3xl object-cover"></div>
      <Image
       className="scale-0 transition-all z-30 group-hover:scale-100 absolute  left-1/2 transform -translate-x-1/2 top-24 w-[30rem] rounded-[3rem] object-cover"
       src="/images/visit-cart.JPG"
       alt="visit cart"
       width={1000}
       height={1000}
      />
     </div>

     <ul className="flex gap-5">
      <li className="cursor-pointer">{t(SECTIONS.INTRODUCTION)}</li>
      <li className="cursor-pointer" onClick={() => scrollToSection(SECTIONS.ABOUT)}>
       {t('about')}
      </li>
      <li className="cursor-pointer" onClick={() => scrollToSection(SECTIONS.EXPERIENCE)}>
       {t('projects')}
      </li>
      <li className="cursor-pointer" onClick={() => scrollToSection(SECTIONS.SKILLS)}>
       {t('experience')}
      </li>
     </ul>
     <Switch />
    </motion.div>

    {/* responsive navbar */}
    <motion.div
     className="relative flex justify-between items-center h-12 pt-4 md:hidden w-[80%] mx-auto z-10 "
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: false }}
     transition={{ duration: 0.8 }}
    >
     <Image className="w-10 object-cover " src="/images/logo-white.png" alt="logo" width={500} height={500} />
     <div onClick={() => setDrawerOpen(true)}>
      <Berger />
     </div>
    </motion.div>

    {/* introduction content */}
    {children}

    {/* responsive hamburger menu */}
    <div
     className={`flex flex-col text-2xl gap-2 text-white px-5 py-20 md:hidden absolute h-screen w-[75%] bg-blackBg  top-0 transition-all duration-300 z-20 ${
      drawerOpen ? 'ltr:left-0 rtl:right-0' : 'ltr:left-[-75%] rtl:right-[-75%]'
     }`}
    >
     <div className="cursor-pointer flex justify-between">
      <p>{t('introduction')}</p>
      <div className="rtl:rotate-180">
       <ArrowRight />
      </div>
     </div>
     <div className="cursor-pointer flex justify-between" onClick={() => scrollToSection(SECTIONS.ABOUT)}>
      <p>{t('about')}</p>
      <div className="rtl:rotate-180">
       <ArrowRight />
      </div>
     </div>
     <div className="cursor-pointer flex justify-between" onClick={() => scrollToSection(SECTIONS.EXPERIENCE)}>
      <p>{t('projects')}</p>
      <div className="rtl:rotate-180">
       <ArrowRight />
      </div>
     </div>
     <div className="cursor-pointer flex justify-between mb-5" onClick={() => scrollToSection(SECTIONS.SKILLS)}>
      <p>{t('experience')}</p>
      <div className="rtl:rotate-180">
       <ArrowRight />
      </div>
     </div>
     <Switch />
    </div>

    {/* responsive hide menu shadow */}
    <div
     onClick={() => setDrawerOpen(false)}
     className={`flex flex-col md:hidden p-3 absolute h-screen w-[25%] bg-black opacity-50 top-0 transition-all duration-300 z-20 ${
      drawerOpen ? 'ltr:right-0 rtl:left-0' : 'ltr:right-[-25%] rtl:left-[-25%]'
     }`}
    />
   </div>
  </div>
 );
}
