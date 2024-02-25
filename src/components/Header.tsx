"use client";

import React from "react";
import Image from "next/image";
import favicon from "@/app/favicon.ico";
import next from "../../public/vercel.svg";
import { headerA } from "./componentfile";
import Link from "next/link";
import { color } from "framer-motion";
import { TbMenu } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import {
  Navbar,
  NavbarContent,
  NavbarMenuItem,
  // NavbarMenuToggle,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Navbar className="border-b   border-gray-700 z-20 fixed top-0 w-full  icon">
      <div className=" gap-x-2 items-center w-full flex">
        <div className="md:flex  hidden">
          <Image
            src={favicon}
            alt="Favicon"
            // width={60}
            // height={10}
            className=" w-20 h-16"
          />
        </div>

        <NavbarContent className=" w-full px-4 md:hidden flex justify-between icon">
          <Image
            src={favicon}
            alt="Favicon"
            // width={60}
            // height={10}
            className="w-20 h-16"
          />
          <button
            onClick={toggleMenu}
            // aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="block text-white md:hidden"
          >
            {isMenuOpen ? (
              <div>
                <span className="text-4xl">
                  <AiOutlineClose />
                </span>
                <NavbarContent className="absolute  h-[40rem] grid  w-full gap-y-0 left-0 gap-x-20 items-center  mt-3 ">
                  {headerA.map((header, index) => (
                    <NavbarMenuItem
                      key={index}
                      className="text-gray-400 list-none"
                    >
                      <Link href={header.Route}>{header.headerName}</Link>
                    </NavbarMenuItem>
                  ))}
                </NavbarContent>
              </div>
            ) : (
              <span className="text-4xl">
                <TbMenu />
              </span> // Display hamburger icon when menu is closed
            )}
          </button>
        </NavbarContent>

        <NavbarContent className=" gap-x-20  md:flex items-center hidden ">
          {headerA.map((header, index) => (
            <NavbarMenuItem key={index} className="text-gray-300 list-none">
              <Link href={header.Route}>{header.headerName}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default Header;
