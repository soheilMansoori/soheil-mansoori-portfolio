"use client";
import { useI18n } from "@/locales/client";
import React from "react";
import { motion } from "framer-motion";

export default function Business() {
  const t = useI18n();
  

  return (
    <div id="business" className="w-full snap-start bg-whiteBg overflow-hidden">
      <div className="relative h-screen max-w-[1600px] mx-auto flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[10%] w-[30%] h-[40%] rotate-45 rounded-full bg-purple-600 shadow-purpl shadow-2xl"></div>
        <div className="absolute top-[10%] left-[30%] w-[30%] h-[40%] rotate-45 rounded-full bg-yellow-500 shadow-yellow-500 shadow-2xl  element-wave"></div>
        <div className="absolute top-[40%] left-[45%] w-[30%] h-[40%] rotate-45 rounded-full bg-cyan-500 shadow-cyan-500 shadow-2xl"></div>
        <div className="absolute top-[10%] left-[60%] w-[30%] h-[40%] rotate-45 rounded-full bg-red-500 shadow-red-500 shadow-2xl"></div>
        <div className="absolute h-full w-[100%] bg-whiteBg bg-clip-padding backdrop-filter backdrop-blur-[6rem] bg-opacity-30"></div>
        <div className="w-[90%] h-[80vh] md:h-auto overflow-y-scroll overflow-x-hidden gap-4 relative flex flex-wrap justify-center items-center group cursor-pointer [&::-webkit-scrollbar]:w-2 md:[&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">

          <motion.div
            className="relative w-full md:w-[35%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto flex flex-col justify-start "
            initial={{ x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between ltr:flex-col rtl:flex-row ltr:gap-3">
              <p className="text-lg font-semibold ">{t("box2", { count: 1 })}</p>
              <p className="text-sm">{t("box2_place", { count: 1 })}</p>
            </div>
            <p className="text-sm mt-1 rtl:mt-3 ">{t("box2_list1", { count: 1 })}</p>
          </motion.div>
          <motion.div
            className="relative w-full md:w-[35%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto flex flex-col justify-start "
            initial={{ x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between ltr:flex-col rtl:flex-row ltr:gap-3">
              <p className="text-lg font-semibold">
                {t("box1", { count: 1 })}
              </p>
              <p className="text-sm">{t("box1_place", { count: 1 })}</p>
            </div>
            <p className="text-sm mt-1 rtl:mt-3">{t("box1_list1", { count: 1 })}</p>
          </motion.div>

          {/* ردیف دوم */}

          <motion.div
            className="relative w-full md:w-[30%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter  backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto flex flex-col justify-start "
            initial={{ x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between ltr:flex-col rtl:flex-row md:ltr:gap-3">
              <p className="text-lg font-semibold ">{t("box3", { count: 1 })}</p>
              <p className="text-sm">{t("box3_place", { count: 1 })}</p>
            </div>
            <p className="text-sm md:mt-2.5">{t("box3_list1", { count: 1 })}</p>
          </motion.div>
          <motion.div className="relative w-full md:w-[30%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto ">
            <div className="flex justify-between ltr:flex-col rtl:flex-row ltr:gap-3">
              <p className="text-lg font-semibold ">{t("box4", { count: 1 })}</p>
              <p className="text-sm">{t("box4_place", { count: 1 })}</p>
            </div>
            <p className="text-sm mt-1 rtl:mt-3">{t("box4_list1", { count: 1 })}</p>
          </motion.div>
          <motion.div
            className="relative w-full md:w-[30%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto "
            initial={{ x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between ltr:flex-col rtl:flex-row ltr:gap-3">
              <p className="text-lg font-semibold ">{t("box5", { count: 1 })}</p>
              <p className="text-sm">{t("box5_place", { count: 1 })}</p>
            </div>
            <p className="text-sm mt-1 rtl:mt-3">{t("box5_list1", { count: 1 })}</p>
          </motion.div>

          {/* ردیف سوم */}

          <motion.div
            className="relative w-full md:w-[35%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto "
            initial={{ x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between ltr:flex-col rtl:flex-row ltr:gap-3 ">
              <p className="text-lg font-semibold ">{t("box6", { count: 1 })}</p>
              <p className="text-sm">{t("box6_place", { count: 1 })}</p>
            </div>

            <p className="text-sm mt-1 rtl:mt-3">{t("box6_list1", { count: 1 })}</p>
          </motion.div>
          <motion.div
            className="relative w-full md:w-[35%] h-32 px-5 py-3 bg-whiteBg rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 group-hover:transition-all group-hover:duration-300 md:group-hover:blur-sm group-hover: hover:!blur-none overflow-hidden md:hover:h-52 hover:overflow-y-auto "
            initial={{ x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between ltr:flex-col rtl:flex-row ltr:gap-3">
              <p className="text-lg font-semibold ">{t("box7", { count: 1 })}</p>
              <p className="text-sm">{t("box7_place", { count: 1 })}</p>
            </div>
            <p className="text-sm mt-1 rtl:mt-3">{t("box7_list1", { count: 1 })}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
