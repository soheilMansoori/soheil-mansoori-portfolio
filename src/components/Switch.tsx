'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LOCALE } from '@/constants';

export function Switch() {
 const router = useRouter();
 const { locale } = useParams();
 const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

 return (
  <>
   <div className="flex items-center gap-4">
    <div onClick={() => setIsDropDownOpen(!isDropDownOpen)} className="flex cursor-pointer gap-1 relative rtl:flex-row-reverse items-center">
     {locale === LOCALE.EN ? (
      <>
       <Image className="w-6 h-5 object-cover" src="/images/usa.png" width={100} height={100} alt="Logo" />
       <p className=" mr-1 uppercase">{LOCALE.EN}</p>
      </>
     ) : (
      <>
       <Image className="w-6 h-5 object-cover" src="/images/iran.png" width={100} height={100} alt="Logo" />
       <p className=" mr-1 uppercase">{LOCALE.FA}</p>
      </>
     )}
     {isDropDownOpen && (
      <div className="absolute z-50 w-28 border text-sm rounded-2xl top-10 transition-all md:left-[-25px] rtl:left-[-55px] text-white justify-between  bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border-white">
       <div onClick={() => router.push('/fa')} className="flex justify-between cursor-pointer gap-2 items-center px-5 py-2 rounded-t-2xl hover:bg-white hover:bg-opacity-10">
        <Image className="size-6 rounded-full" src="/images/iran.png" width={100} height={100} alt="Logo" />
        <p>{LOCALE.FA}</p>
       </div>
       <div className="w-full h-[1px] bg-white"></div>
       <div onClick={() => router.push('/en')} className="flex justify-between cursor-pointer gap-2 items-center px-5 py-2 rounded-b-2xl hover:bg-white hover:bg-opacity-10">
        <Image className="size-6 rounded-full" src="/images/usa.png" width={100} height={100} alt="Logo" />
        <p>{LOCALE.EN}</p>
       </div>
      </div>
     )}
    </div>
   </div>
  </>
 );
}
