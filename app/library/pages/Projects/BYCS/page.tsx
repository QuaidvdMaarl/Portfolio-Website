"use client";

import Image from "next/image";
import { images, workshopDetails } from "../../../../data/workshopData";
import { useState } from "react";

export default function Project1() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof workshopDetails>("Game-workshops");
  const currentData = workshopDetails[activeTab];

  const tabs: {
    id: keyof typeof workshopDetails;
    label: string;
    bg: string;
  }[] = [
    { id: "Game-workshops", label: "Game Workshops", bg: "bg-[#6f77b1]" },
    {
      id: "computer-workshops",
      label: "Computer Workshops",
      bg: "bg-[#969dcf]",
    },
    { id: "typing-lessons", label: "Typing Lessons", bg: "bg-[#b9bfe8]" },
    { id: "big-events", label: "Big Events", bg: "bg-[#d4d8f3]" },
  ];

  return (
    <main>
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-[80%_20%] bg-[url(/backdrop-image.png)] bg-cover bg-local bg-center">
        <div className="p-5 md:p-0">
          <p className="pt-2 md:pt-10 md:pl-10 text-[24px] md:text-[70px] font-bold underline text-center md:text-left">
            COMMUNITY & WORKSHOPS
          </p>

          <section className="grid grid-cols-4 gap-2 pt-2 md:gap-5 md:pt-10 md:pl-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onPointerDown={() => setActiveTab(tab.id)}
                type="button"
                className={`${tab.bg} py-1.5 px-2 md:p-3 rounded transition-transform active:scale-95 touch-manipulation select-none text-center cursor-pointer flex items-center justify-center`}
              >
                <span className="text-center text-[10px] md:text-base leading-tight">
                  {tab.label}
                </span>
              </button>
            ))}
          </section>

          <hr className="border-[1px] md:border-[2px] border-[#232728] my-3 md:ml-10" />

          <section className="grid grid-cols-1 md:grid-cols-2 pt-2 pl-2 pr-2 md:pl-10 md:pr-5 gap-5">
            <div>
              <p className="text-[14px] md:text-[30px] font-bold">
                {currentData.title}
              </p>
              <p className="pt-3 md:pt-5 text-[12px] md:text-[15px] whitespace-pre-line">
                {currentData.description}
              </p>
            </div>

            <div className="flex justify-center items-start">
              {images[currentData.mainImage as keyof typeof images] && (
                <Image
                  {...images[currentData.mainImage as keyof typeof images]}
                  alt={currentData.title}
                />
              )}
            </div>
          </section>

          <div className="block md:hidden pt-8 px-2">
            <p className="text-[14px] font-bold pb-3">SKILLS USED</p>
            <div className="hidden md:block grid grid-cols-2 gap-3 pb-5">
              <Image {...images.Scratch} />
              <Image {...images.Gitlab} />
            </div>
            <div className="grid grid-cols-[30%_70%] gap-3 items-center">
              {currentData.skills.map((skill, index) => (
                <div key={index} className="contents">
                  {images[skill.image as keyof typeof images] && (
                    <Image
                      {...images[skill.image as keyof typeof images]}
                      alt="Skill icon"
                    />
                  )}
                  <p>{skill.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block p-0 pt-10 pr-5">
          <p className="text-[30px] font-bold pl-5">SKILLS USED</p>
          <div className="grid grid-cols-2 pt-5 pl-5 gap-5">
            <Image {...images.Scratch} />
            <Image {...images.Gitlab} />
          </div>

          <div className="pt-30 pl-5 grid grid-cols-[30%_70%] gap-5 items-center">
            {currentData.skills.map((skill, index) => (
              <div key={index} className="contents">
                {images[skill.image as keyof typeof images] && (
                  <Image
                    {...images[skill.image as keyof typeof images]}
                    alt="Skill icon"
                  />
                )}
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
