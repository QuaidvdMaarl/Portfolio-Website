"use client";

import Image from "next/image";
import { images } from "./library/imageLoader";
import {tooltip} from "./components/Tooltip";

export default function Home() {
  const { coords, visible, text, HandleMouseMovement, HandleMouseLeave } = tooltip();
  
  return (
    <main> 
      <section className="bg-[url(/backdrop-image.png)] bg-local bg-cover bg-center min-h-screen grid grid-cols-2">
        <div>
          <p className="pt-20 pl-30 font-bold text-[80px]" >Portfolio</p>
          <p className="pl-30 italic text-[25px]">Quaid van der Maarl</p>
          <hr></hr>
          <p className="pt-5 pl-30 font-bold text-[30px]" >About</p>
          <p className="pt-5 pl-30 text-[20px]">I'm an IT student with an interest in solving practical problems with technology. Developing solutions that contribute to society is something I'm passionate about. During my studies, I've gained experience in C#, typescript and python where I've worked on various projects. I've also given workshops to kids where I shared the core principles of programming. Right now, I'm looking for opportunities to apply my skills and make a positive impact.</p>
          <p className="pt-10 pl-30 font-bold text-[30px]" >Skills</p>
            <section className="pl-30 pr-90 pt-5 grid grid-cols-4">
                <Image 
                  {...images.cSharp} onMouseMove={HandleMouseMovement} onMouseLeave={HandleMouseLeave} />
                <Image {...images.Python} onMouseMove={HandleMouseMovement} onMouseLeave={HandleMouseLeave} />
                <Image {...images.Typescript} onMouseMove={HandleMouseMovement} onMouseLeave={HandleMouseLeave} />
                <Image {...images.Tailwind} onMouseMove={HandleMouseMovement} onMouseLeave={HandleMouseLeave} />
              </section>
              <section className="pl-30 pr-90 pt-5 grid grid-cols-4">
                <Image {...images.gitlab} onMouseMove={HandleMouseMovement} onMouseLeave={HandleMouseLeave} />
                <Image {...images.github} onMouseMove={HandleMouseMovement} onMouseLeave={HandleMouseLeave} />
                <Image {...images.agileScrum} onMouseMove={HandleMouseMovement} onMouseLeave={HandleMouseLeave} />
              </section>
          <p className="pt-30 pl-30 font-bold text-[30px]" >View my resume</p>
          <ul className="list-disc pl-35 underline text-[20px]" ><li>Resume (Dutch)</li><li>Resume (English)</li></ul>
        </div>

        <div className="relative">
          <Image {...images.DiamondVoorUit} />
          <Image {...images.DiamondProfile} />
          <Image {...images.DiamondTemplate1} />
          <Image {...images.DiamondTemplate2} />
        </div>
          {visible && (
            <p className="text-[20px] fixed pointer-events-none bg-[#f4f4f4] rounded-lg p-1 shadow-md border border-gray-300"
              style={{ left: coords.x + 10, top: coords.y + 10 }}>
              {text}
            </p>
          )}
      </section>
    </main>
  );
}
