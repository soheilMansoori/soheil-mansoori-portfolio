"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Call from "../public/icons/Call";
import Linkedin from "../public/icons/Linkedin";
import Mail from "../public/icons/Mail";
import { Switch } from "@/app/[locale]/switch";
import { useI18n } from "@/locales/client";
import Whatsapp from "@/public/icons/Whatsapp";
import Instagram from "@/public/icons/Instagram";
import { motion } from "framer-motion";
import Berger from "@/public/icons/Berger";
import ArrowRight from "@/public/icons/ArrowRight";

export default function Home() {
  const t = useI18n();

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="w-full snap-start bg-blackBg overflow-hidden">
      <div className="relative h-screen max-w-[1600px] mx-auto overflow-hidden">
        <div className="absolute top-0 md:top-16 rtl:left-0 md:ltr:right-60 md:rtl:left-60 size-40 rounded-full bg-purpl shadow-purpl shadow-2xl element-wave "></div>
        <div className="absolute bottom-0 md:bottom-40 right-0 md:ltr:left-80 md:rtl:right-80 md:top-1/2 transform md:-translate-y-1/2 w-60 h-40 rounded-full bg-purpl shadow-purpl shadow-2xl ltr:element-wave-x"></div>
        <div className="absolute h-full w-[100%] bg-blackBg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20"></div>
        <motion.div
          className="absolute hidden  md:flex z-40 items-center px-5 text-white justify-between h-14 w-[50%] top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-4 group hover:cursor-pointer">
            <Image
              className="w-10 object-cover"
              src="/images/logo-white.png"
              alt="logo"
              width={500}
              height={500}
            />
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
            <li className="cursor-pointer">{t("home", { count: 1 })}</li>
            <li
              className="cursor-pointer"
              onClick={() => handleScroll("background")}
            >
              {t("background", { count: 1 })}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleScroll("education")}
            >
              {t("education", { count: 1 })}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleScroll("business")}
            >
              {t("business", { count: 1 })}
            </li>
          </ul>
          <Switch />
        </motion.div>

        <motion.div
          className="relative flex justify-between items-center h-12 pt-4 md:hidden w-[80%] mx-auto z-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Image
            className="w-10 object-cover "
            src="/images/logo-white.png"
            alt="logo"
            width={500}
            height={500}
          />
          <div onClick={() => setDrawerOpen(true)}>
            <Berger />
          </div>
        </motion.div>

        <motion.div
          className="static mt-10 md:mt-0 md:absolute w-full flex flex-col-reverse top-0 md:flex-row justify-between items-center text-white md:w-[87%] md:left-1/2 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="w-[90%] mx-auto md:w-full leading-none ltr:mt-10 md:mt-24 rtl:pt-14">
            <p className="text-xl rtl:mb-4 px-4 md:px-0">
              {t("dr", { count: 1 })}
            </p>
            <div className="flex justify-center rtl:gap-2 rtl:flex-row md:w-[60%] flex-row md:flex-col bg-gradient-to-r ltr:from-purpl rtl:from-white ltr:to-white rtl:to-purpl bg-clip-text text-transparent">
              <h1 className="text-[2.5rem] md:text-[6rem] font-bold md:rtl:pr-1 ltr:pr-2 md:px-0 rtl:leading-[2.8rem] md:rtl:leading-[7rem]">
                {t("name", { count: 1 })}
              </h1>
              <h1 className="text-[2.5rem] md:text-[6rem] font-bold md:rtl:pr-1 rtl:leading-[2.8rem] md:rtl:leading-[7rem]">
                {t("last", { count: 1 })}
              </h1>
            </div>
            <div className="flex justify-center md:justify-normal gap-4 mt-10 md:mt-5 md:rtl:mt-8 ">
              <Link
                className="p-2 px-[9px] bg-[#0f0f0f] rounded-full border border-purpl"
                href={"tel:09103060889"}
              >
                <Call />
              </Link>
              <Link
                className="p-2  bg-[#0f0f0f] rounded-full border border-purpl"
                href={
                  "https://www.linkedin.com/in/arash-aryanik-58b97885?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
              >
                <Linkedin />
              </Link>
              <Link
                className="p-2 px-[9px] bg-[#0f0f0f] rounded-full border border-purpl"
                href={"mailto:arash.aryanik@gmail.com"}
              >
                <Mail />
              </Link>
              <Link
                className="p-2 px-[9px] bg-[#0f0f0f] rounded-full border border-purpl"
                href={"https://wa.me/09103060889"}
              >
                <Whatsapp />
              </Link>
              <Link
                className="p-2 px-[9px] bg-[#0f0f0f] rounded-full border border-purpl"
                href={
                  "https://www.instagram.com/arasharyanik?igsh=ZjVvc3IwYm1nMG8y"
                }
              >
                <Instagram />
              </Link>
            </div>
          </div>

          <Image
            className="w-[70%] mx-auto md:w-[32%] object-cover border-b-2 border-purpl"
            src="/images/arash.png"
            alt="photo"
            width={1000}
            height={1000}
          />
        </motion.div>

        <div
          className={`flex flex-col text-2xl gap-2 text-white px-5 py-20 md:hidden absolute h-screen w-[75%] bg-blackBg  top-0 transition-all duration-300 z-20 ${
            drawerOpen ? "ltr:left-0 rtl:right-0" : "ltr:left-[-75%] rtl:right-[-75%]"
          }`}
        >
          <div className="cursor-pointer flex justify-between">
            <p>{t("home", { count: 1 })}</p>
            <div className="rtl:rotate-180">
              <ArrowRight />
            </div>
          </div>
          <div
            className="cursor-pointer flex justify-between"
            onClick={() => handleScroll("background")}
          >
            <p>{t("background", { count: 1 })}</p>
            <div className="rtl:rotate-180">
              <ArrowRight />
            </div>
          </div>
          <div
            className="cursor-pointer flex justify-between"
            onClick={() => handleScroll("education")}
          >
            <p>{t("education", { count: 1 })}</p>
            <div className="rtl:rotate-180">
              <ArrowRight />
            </div>
          </div>
          <div
            className="cursor-pointer flex justify-between mb-5"
            onClick={() => handleScroll("business")}
          >
            <p>{t("business", { count: 1 })}</p>
            <div className="rtl:rotate-180">
              <ArrowRight />
            </div>
          </div>
          <Switch />
        </div>
        <div
          onClick={() => setDrawerOpen(false)}
          className={`flex flex-col md:hidden p-3 absolute h-screen w-[25%] bg-black opacity-50 top-0 transition-all duration-300 z-20 ${
            drawerOpen ? "ltr:right-0 rtl:left-0" : "ltr:right-[-25%] rtl:left-[-25%]"
          }`}
        >
        </div>
      </div>
    </div>
  );
}
