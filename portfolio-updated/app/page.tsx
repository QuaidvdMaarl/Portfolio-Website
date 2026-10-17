"use client";

import Image from "next/image";
import { images } from "./library/imageLoader";
import { tooltip } from "./components/Tooltip";

export default function Home() {
  const { coords, visible, text, HandleMouseMovement, HandleMouseLeave } =
    tooltip();

  return (
    <main>
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2 bg-[url(/backdrop-image.png)] bg-cover bg-local bg-center">
        <div>
          <section className="grid grid-cols-2 md:grid-cols-1">
            <div>
              <p className="pt-5 md:pt-20 pl-5 md:pl-30 text-[30px] md:text-[80px] font-bold">
                Portfolio
              </p>
              <p className="pl-5 md:pl-30 text-[15px] md:text-[25px] italic">
                Quaid van der Maarl
              </p>
            </div>
            <div className="md:hidden pt-2 flex justify-end">
              <Image {...images.DiamondProfile} />
            </div>{" "}
          </section>
          <hr></hr>
          <p className="pt-5 pl-5 md:pl-30 text-[15px] md:text-[30px] font-bold">
            About
          </p>
          <p className="md:pt-5 pl-5 md:pl-30 text-[12px] md:text-[20px]">
            I'm an IT student with an interest in solving practical problems
            with technology. Developing solutions that contribute to society is
            something I'm passionate about. During my studies, I've gained
            experience in C#, typescript and python where I've worked on various
            projects. I've also given workshops to kids where I shared the core
            principles of programming. Right now, I'm looking for opportunities
            to apply my skills and make a positive impact.
          </p>
          <p className="pt-5 md:pt-10 pl-5 md:pl-30 text-[15px] md:text-[30px] font-bold">
            Skills
          </p>
          <section className="grid grid-cols-4 pt-5 pr-90 pl-30">
            <Image
              {...images.cSharp}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <Image
              {...images.Python}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <Image
              {...images.Typescript}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <Image
              {...images.Tailwind}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
          </section>
          <section className="grid grid-cols-4 pt-5 pr-90 pl-30">
            <Image
              {...images.gitlab}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <Image
              {...images.github}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
            <Image
              {...images.agileScrum}
              onMouseMove={HandleMouseMovement}
              onMouseLeave={HandleMouseLeave}
            />
          </section>
          <p className="pt-5 md:pt-30 pl-5 md:pl-30 text-[15px] md:text-[30px] font-bold">
            View my resume
          </p>
          <ul className="list-disc pl-10 md:pl-35 text-[12px] md:text-[20px] underline">
            <li>Resume (Dutch)</li>
            <li>Resume (English)</li>
          </ul>
        </div>

        <div className="relative">
          <Image {...images.DiamondVoorUit} />
          <Image {...images.DiamondProfile} />
          <Image {...images.DiamondTemplate1} />
          <Image {...images.DiamondTemplate2} />
        </div>
        {visible && (
          <p
            className="pointer-events-none fixed rounded-lg border border-gray-300 bg-[#f4f4f4] p-1 text-[20px] shadow-md"
            style={{ left: coords.x + 10, top: coords.y + 10 }}
          >
            {text}
          </p>
        )}
      </section>
    </main>
  );
}
