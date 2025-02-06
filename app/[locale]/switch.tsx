'use client';

import Image from 'next/image';
import { useChangeLocale } from '../../locales/client';
import { useState } from 'react';

export function Switch() {
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

  const [langOpen, setLangOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<string>('en');

  const handleEn = (() => {
    changeLocale('en')
    setLang('en')
  })
  const handleFa = (() => {
    changeLocale('fa')
    setLang('fa')
  })

  return (
    <>
        <div className="flex items-center gap-4">
          <div onClick={() => setLangOpen(!langOpen)} className="flex gap-1 relative rtl:flex-row-reverse items-center">
            {lang === 'en' ? (
                <>
                  <Image
                    className="w-5 h-5 object-cover rounded"
                    src="/images/usa.png"
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                  <p className=" mr-1 uppercase">en</p>
                </>
              ) : (
                <>
                  <Image
                    className="w-5 h-5 object-cover rounded"
                    src="/images/iran.png"
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                  <p className=" mr-1 uppercase">fa</p>
                </>
              )
            }
            {langOpen && (
              <div className="absolute z-50 w-28 border text-sm rounded-2xl top-10 left-[-25px]">
                <div
                  onClick={handleFa}
                  className="flex justify-between cursor-pointer gap-2 items-center px-5 py-2 rounded-t-2xl "
                >
                  <Image
                    className="size-6 rounded-full"
                    src="/images/iran.png"
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                  <p>FA</p>
                </div>
                <div className="w-full h-[1px] bg-white"></div>
                <div
                  onClick={handleEn}
                  className="flex justify-between cursor-pointer gap-2 items-center px-5 py-2 rounded-b-2xl"
                >
                  <Image
                    className="size-6 rounded-full"
                    src="/images/usa.png"
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                  <p>EN</p>
                </div>
              </div>
            )}
          </div>


        </div>
    </>
  );
}