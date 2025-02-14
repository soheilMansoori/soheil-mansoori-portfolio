'use client'
import { useI18n } from '@/locales/client';
import Location from '@/public/icons/Location'
import React from 'react'

interface EducationTypes {
  id: number
  title : string
  list : string[]
  location : string
  time: string
}

export default function Education() {

  const t = useI18n();

  const educationList : EducationTypes[] = [
    {
      id : 1,
      title : 'title',
      list : ['list_1', 'list_2'],
      location : 'location',
      time: 'time'
    },
    {
      id : 2,
      title : 'title2',
      list : ['Branch: Post DBA', 'Institute/University: Allameh Tabatabai University'],
      location : 'Tehran, Iran',
      time : '2023 - 2024'
    },
    {
      id : 3,
      title : 'title2',
      list : ['Branch: Post DBA', 'Institute/University: Allameh Tabatabai University'],
      location : 'Tehran, Iran',
      time : '2023 - 2024'
    },
    {
      id : 4,
      title : 'title2',
      list : ['Branch: Post DBA', 'Institute/University: Allameh Tabatabai University'],
      location : 'Tehran, Iran',
      time : '2023 - 2024'
    },
    {
      id : 5,
      title : 'title2',
      list : ['Branch: Post DBA', 'Institute/University: Allameh Tabatabai University'],
      location : 'Tehran, Iran',
      time : '2023 - 2024'
    },
    {
      id : 6,
      title : 'title2',
      list : ['Branch: Post DBA', 'Institute/University: Allameh Tabatabai University'],
      location : 'Tehran, Iran',
      time : '2023 - 2024'
    }
  ]


  return (
    <div className='w-full relative h-screen snap-start bg-gray-900 '>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 rounded-full bg-purpl shadow-purpl shadow-2xl '></div>
      <div className='flex flex-col py-8 justify-between h-full bg-clip-padding backdrop-filter backdrop-blur-[10rem] bg-opacity-20'>
        <div className='w-[90%] mx-auto flex gap-6 flex-wrap items-center justify-between text-white pb-4'>
          {educationList.map((e) => (    
            <div
              key={e.id}
              className="h-[11em] w-[30%] p-2.5 rounded-xl transition-all duration-300 ease-out hover:bg-indigo-600 hover:text-gray-100 cursor-pointer border-b-2 border-indigo-500"
            >
              <div className='flex flex-col justify-between h-full'>
                <h1 className="text-lg font-medium text-center">{t(e.title as keyof typeof t, { count : 1 })}</h1>
                <div className='flex flex-col gap-1 text-center'>
                  {e.list.map((i, index) => (
                    <p key={index} className="text-sm">{t(i as keyof typeof t, { count : 1 })}</p>
                  ))}
                </div>
                <div className='flex text-sm items-center justify-between'>
                  <div className='flex gap-1 items-center'>
                    <Location size='18'/>
                    <p>{t(e.location as keyof typeof t, { count : 1 })}</p>
                  </div>
                  <p className='text-xs'>{t(e.time as keyof typeof t, { count : 1 })}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
        {/* <div className='flex w-[90%] justify-between mx-auto '>
          <div className="h-[7em] w-[23%] bg-gray-400 rounded-b-xl rounded-t bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2">
            <div className="w-full bg-lime-100 rounded rounded-b-none h-4 mb-4 ">
              <div className="bg-lime-500 h-4 rounded rounded-b-none" style={{width: '45%'}}></div>
            </div>
          </div>
          <div className="h-[7em] w-[23%] bg-gray-400 rounded-b-xl rounded-t bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2">
            <div className="w-full bg-green-100 rounded rounded-b-none h-4 mb-4 ">
              <div className="bg-green-400 h-4 rounded rounded-b-none" style={{width: '60%'}}></div>
            </div>
          </div>
          <div className="h-[7em] w-[23%] bg-gray-400 rounded-b-xl rounded-t bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2">
            <div className="w-full bg-green-200 rounded rounded-b-none h-4 mb-4 ">
              <div className="bg-green-500 h-4 rounded rounded-b-none" style={{width: '70%'}}></div>
            </div>
          </div>
          <div className="h-[7em] w-[23%] bg-gray-400 rounded-b-xl rounded-t bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2">
            <div className="w-full bg-green-200 rounded rounded-b-none h-4 mb-4 ">
              <div className="bg-green-600 h-4 rounded rounded-b-none" style={{width: '90%'}}></div>
            </div>
          </div>
        </div> */}
        <div className='flex flex-wrap text-white gap-5 w-[90%] justify-between mx-auto text-[17px]'>
          <div className='w-[45%]'>
            <div className='flex justify-between'>
              <h1>Business administration</h1>
              <h1>45%</h1>
            </div>
            <div className="w-full bg-white rounded-xl h-3 mt-1">
              <div className="bg-indigo-500 h-3 rounded-xl" style={{width: '45%'}}></div>
            </div>
          </div>
          <div className='w-[45%]'>
            <div className='flex justify-between'>
              <h1>Business administration</h1>
              <h1>60%</h1>
            </div>
            <div className="w-full bg-white rounded-xl h-3 mt-1">
              <div className="bg-indigo-500 h-3 rounded-xl" style={{width: '60%'}}></div>
            </div>
          </div>
          <div className='w-[45%]'>
            <div className='flex justify-between'>
              <h1>Business administration</h1>
              <h1>80%</h1>
            </div>
            <div className="w-full bg-white rounded-xl h-3 mt-1">
              <div className="bg-indigo-500 h-3 rounded-xl" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className='w-[45%]'>
            <div className='flex justify-between'>
              <h1>Business administration</h1>
              <h1>95%</h1>
            </div>
            <div className="w-full bg-white rounded-xl h-3 mt-1">
              <div className="bg-indigo-500 h-3 rounded-xl" style={{width: '95%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}