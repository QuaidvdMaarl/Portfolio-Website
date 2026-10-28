"use client";

import Link from "next/link";

import Image from "next/image";
import { images, workshopDetails } from "../../../data/workshop-data";
import { useState } from "react";

export default function CommunityWorkshops() {
  const [activeTab, setActiveTab] = useState<keyof typeof workshopDetails>("Game-workshops");
  const currentData = workshopDetails[activeTab];
  

  const tabs: { id: keyof typeof workshopDetails; label: string; bg: string }[] = [
    { id: "Game-workshops", label: "Game Workshops", bg: "bg-[#6f77b1]" },
    { id: "computer-workshops", label: "Computer Workshops", bg: "bg-[#969dcf]", },
    { id: "typing-lessons", label: "Typing Lessons", bg: "bg-[#b9bfe8]" },
    { id: "big-events", label: "Big Events", bg: "bg-[#d4d8f3]" },
  ];
      
  return (
    <main>
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-[80%_20%] bg-[url(/backdrop-image.png)] bg-cover bg-local bg-center">
        <div>
          <p className="pt-5 pl-5 md:pl-10 md:pt-10 text-[30px] md:text-[70px] font-bold underline">
            COMMUNITY & WORKSHOPS
          </p>

          {/* Klikbare kopjes / tabs */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:pt-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onPointerDown={() => setActiveTab(tab.id)}
                type="button"
                className={`${tab.bg} p-3 rounded transition-transform active:scale-95 touch-manipulation select-none text-left md:text-center cursor-pointer`}
              >
                <span className="flex justify-center text-center text-xs md:text-base">
                  {tab.label}
                </span>
              </button>
            ))}
          </section>

          <hr className="border-[2px] border-[#232728]" />

          <section className="grid grid-cols-2 pt-5 pl-5 pr-5 md:pl-5 md:pr-5 gap-5">
            <div>
              <p className="pt-5 pl-5 md:pl-10 text-[14px] md:text-[30px] font-bold">
                {currentData.title}
              </p>
              <p className="pt-5 pl-5 md:pl-10 text-[10px] md:text-[15px] whitespace-pre-line">
                {currentData.description}
              </p>
            </div>

            <div className="flex justify-center">
              {images[currentData.mainImage as keyof typeof images] && (
                <Image
                  {...images[currentData.mainImage as keyof typeof images]}
                  alt={currentData.title}
                />
              )}
            </div>
          </section>
        </div>
        <div>
          <p className="pt-5 pl-5 md:pl-10 text-[14px] md:text-[30px] font-bold">
            SKILLS USED
          </p>
          <section className="grid grid-cols-2 pt-5 pl-5 pr-5 md:pl-5 md:pr-5 gap-5">
            <Image {...images.Scratch} />
            <Image {...images.Gitlab} />
          </section>

          <div className="pl-5 pt-30 pr-5 grid grid-cols-[30%_70%] gap-5">
            {currentData.skills.map((skill, index) => (
              <div key={index} className="contents">
                {images[skill.image as keyof typeof images] && (
                  <Image
                    {...images[skill.image as keyof typeof images]}
                    alt="Skill icon"
                  />
                )}
                <p className={index === 0 ? "pb-10" : ""}>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
