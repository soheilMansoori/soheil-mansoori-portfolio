import React from 'react'

export default function Business() {
  return (
    <div className='h-screen relative snap-start bg-whiteBg flex items-center justify-center overflow-hidden'>  
      {/* <div className='absolute top-40 right-60 w-96 h-20 rotate-[110deg] rounded-full bg-purpl shadow-purpl shadow-2xl opacity-80 element-wave'></div> */}
      <div className='absolute top-[40%] left-[10%] w-[30%] h-[40%] rotate-45 rounded-full bg-purple-600 shadow-purpl shadow-2xl'></div>
      <div className='absolute top-[10%] left-[30%] w-[30%] h-[40%] rotate-45 rounded-full bg-yellow-500 shadow-yellow-500 shadow-2xl  element-wave'></div>
      <div className='absolute top-[40%] left-[45%] w-[30%] h-[40%] rotate-45 rounded-full bg-cyan-500 shadow-cyan-500 shadow-2xl'></div>
      <div className='absolute top-[10%] left-[60%] w-[30%] h-[40%] rotate-45 rounded-full bg-red-500 shadow-red-500 shadow-2xl'></div>
      <div className='absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-[6rem] bg-opacity-30'></div>
      {/* <div className='w-[90%] relative h-full p-10 flex flex-col justify-between items-center'> */}
      <div className="w-[90%] gap-4 relative flex flex-wrap justify-center items-center group cursor-pointer">

          <div className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto space-y-3 flex flex-col justify-start [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
            <p className="text-lg font-semibold ">Director of International Relations</p>
            <p className="text-sm mt-3">Managing and planning international relations with business partners and international organizations</p>
            <p className="text-sm mt-3">Identifying and analyzing business partners' needs in foreign markets and planning to meet these needs</p>
            <p className="text-sm mt-3">Establishing and developing business relations with foreign partners and maintaining continuous communication with them</p>
            <p className="text-sm mt-3">Reviewing and implementing international laws and regulations related to company performance and applying them in business activities</p>
            <p className="text-sm mt-3">Preparing and signing international contracts and researching and developing new approaches in the eld of international relations</p>
          </div>
          <div className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto flex flex-col justify-start [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
            <p className="text-lg font-semibold ">Language Instructor</p>
            <p className="text-sm mt-6">Teaching Persian grammar to students at beginner and advanced levels</p>
            <p className="text-sm mt-3">Conducting speaking and listening classes to enhance students' language skills</p>
          </div>
          <div className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto flex flex-col justify-start [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
            <p className="text-lg font-semibold ">Senior Content Producer</p>
            <p className="text-sm mt-6">Preparing and editing content for websites and social media</p>
            <p className="text-sm mt-3">Researching, collecting, and editing new and unique information and content</p>
            <p className="text-sm mt-3">Producing advertising and email marketing content</p>
            <p className="text-sm mt-3">Creating and editing marketing plans and solutions to increase website visits and trac</p>
          </div>


        {/* ردیف دوم */}

        <div className="relative w-[35%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full ">
            <p className="text-lg font-semibold ">Supervisor and CEO</p>
            <p className="text-sm mt-6">Conducting educational sessions and teaching new subjects to students and other board members</p>
            <p className="text-sm mt-5">Designing and developing curriculum outlines for various educational programs</p>
            <p className="text-sm mt-3">Evaluating and grading student records and tests regularly and accurately</p>
            <p className="text-sm mt-3">Managing the education team and coordinating with board members regarding planning and implementation of educational activities</p>
          </div>
          <div className="relative w-[35%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full ">
            <p className="text-lg font-semibold ">Director of Public Relations</p>
            <p className="text-sm mt-3">Managing and planning international relations with business partners and international organizations</p>
          </div>


        {/* ردیف سوم */}

          <div className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full ">
            <p className="text-lg font-semibold ">R&D Manager</p>
            <p className="text-sm mt-3">Managing and planning international relations with business partners and international organizations</p>
          </div>
          <div className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full ">
            <p className="text-lg font-semibold ">Director of International Relations</p>
            <p className="text-sm mt-3">Managing and planning international relations with business partners and international organizations</p>
          </div>
          <div className="relative w-[30%] h-32 p-5 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 transition-all duration-300 group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden hover:h-52 hover:overflow-y-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full ">
            <p className="text-lg font-semibold ">Director of International Relations</p>
            <p className="text-sm mt-3">Managing and planning international relations with business partners and international organizations</p>
          </div>

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
  )
}
