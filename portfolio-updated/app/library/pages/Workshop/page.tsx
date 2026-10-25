"use client";

import Link from "next/link";

import Image from "next/image";
import { images } from "../../../data/workshop-data";
import { tooltip } from "@/app/components/Tooltip";

export default function CommunityWorkshops() {
    const { coords, visible, text, HandleMouseMovement, HandleMouseLeave } =
      tooltip();
      
  return (
    <main>
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-[70%_30%] bg-[url(/backdrop-image.png)] bg-cover bg-local bg-center">
        <div>
          <p className="pt-5 pl-5 md:pl-10 md:pt-10 text-[30px] md:text-[70px] font-bold underline">
            COMMUNITY & WORKSHOPS
          </p>
          <section className="grid grid-cols-4 gap-5 md:pt-10">
            <div className="bg-[#6f77b1] p-2">
              <p className="flex justify-center">Parachute Guys</p>
            </div>

            <div className="bg-[#969dcf] p-2">
              <p className="flex justify-center">Computer Workshops</p>
            </div>

            <div className="bg-[#b9bfe8] p-2">
              <p className="flex justify-center">Typing Lessons</p>
            </div>

            <div className="bg-[#d4d8f3] p-2">
              <p className="flex justify-center">Big Events</p>
            </div>
          </section>
          <hr className="border-[2px] border-[#232728]" />

          <section className="grid grid-cols-2 pt-5 pl-5 pr-5 md:pl-5 md:pr-5 gap-5">
            <div>
              <p className="pt-5 pl-5 md:pl-10 text-[14px] md:text-[30px] font-bold">
                PARACHUTE GUYS
              </p>
              <p className="pt-5 pl-5 md:pl-10 text-[10px] md:text-[15px]">
                This was a project where I made a game with kids to show them
                what it's like to be a developer. Kids were allowed to fully
                craft something they wanted.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                {...images.ParachuteGuys}
                onMouseMove={HandleMouseMovement}
                onMouseLeave={HandleMouseLeave}
              />
            </div>
          </section>
        </div>
        <div>
          <p className="pt-5 pl-5 md:pl-10 text-[14px] md:text-[30px] font-bold">
            SKILLS USED
          </p>
          <section className="grid grid-cols-2 pt-5 pl-5 pr-5 md:pl-5 md:pr-5 gap-5">
            <Image
              {...images.Scratch}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <Image
              {...images.Gitlab}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
          </section>

          <div className="pl-5 pt-40 grid grid-cols-[30%_70%] gap-5">
            <Image
              {...images.Scratch}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <p className="pb-50">
              Scratch was used to learn kids the fundamentals of programming
            </p>

            <Image
              {...images.Scratch}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <p>Hello</p>
          </div>
        </div>
      </section>
    </main>
  );
}
