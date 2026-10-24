"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  // State om bij te houden of de projects dropdown open is
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // We breiden de structuur uit zodat 'projects' sub-items kan hebben
  const Links = [
    { name: "Home", href: "/" },
    {
      name: "projects",
      href: "#",
      isDropdown: true,
      subItems: [
        { name: "BYCS", href: "/library/pages/Projects/BYCS" },
        { name: "The Final Flight", href: "/library/pages/Projects/the-final-flight" },
        { name: "Building this website", href: "/library/pages/Projects/this-website" },
      ],
    },
    { name: "Community & Workshops", href: "/library/pages/Workshop" },
    { name: "Contact", href: "/library/pages/Contact" },
  ];

  return (
    <nav className="grid grid-cols-4 bg-[#232728] relative">
      {Links.map((link) => {
        // Als het een normale link is
        if (!link.isDropdown) {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`pt-3 pb-3 font-bold text-sm md:text-base text-white text-center hover:bg-[#5c6567] cursor-pointer ${
                pathname == link.href && "underline"
              }`}
            >
              {link.name}
            </Link>
          );
        }

        // Als het de dropdown tab is (projects)
        return (
          <div
            key={link.name}
            className="relative text-center"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full h-full pt-3 pb-3 font-bold text-sm md:text-base text-white hover:bg-[#5c6567] cursor-pointer flex items-center justify-center gap-1"
            >
              {link.name} ▾
            </button>

            {/* Het dropdown menu */}
            {dropdownOpen && (
              <div className="absolute left-0 w-full bg-[#232728] shadow-lg border-t border-[#5c6567] flex flex-col z-50">
                {link.subItems?.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className={`py-2 px-4 text-xs md:text-sm text-white text-left hover:bg-[#5c6567] ${
                      pathname == sub.href && "underline"
                    }`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
