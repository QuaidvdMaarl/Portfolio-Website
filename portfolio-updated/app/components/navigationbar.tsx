"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

const Links = [
  { name: "Home", href: "/" },
  { name: "projects", href: "/pages/project1" },
  { name: "Community & Workshops", href: "/pages/workshops" },
  { name: "Contact", href: "/pages/contact" },
]

//   { name: "Smart Grocery Planner", href: "/pages/project1" },
  // { name: "The Final Flight", href: "/pages/project2" },
  // { name: "Building this website", href: "/pages/project3" },

return (
        <nav className="grid grid-cols-4 bg-[#232728]">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pt-3 pb-3 font-bold text-[20px] text-white text-center hover:bg-[#5c6567] cursor-pointer ${
                pathname == link.href && "underline"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav> 
    );
}