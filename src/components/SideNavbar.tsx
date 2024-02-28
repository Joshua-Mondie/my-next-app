"use client";
import React, { useState } from "react";
import Link from "next/link";
import { sideNavbar } from "@/components/componentfile";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";

const SideNavbar = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleOpen = (index: any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" bg-white">
      <div className="   w-full   md:w-0 z-50 md:mt-0">
        <Dropdown className=" mt-8 w-full  md:hidden  ">
          <DropdownTrigger className=" border-b border-gray-600 absolute w-full py-2 z-30 bg-black ">
            <Button className=" md:hidden  text-white">Open Menu</Button>
          </DropdownTrigger>
          <DropdownMenu className="  overflow-y-scroll bg-white w-64 h-[40rem] lg:h-[36.4rem] -ml-16 lg:ml-0  md:w-[25.8rem] lg:pl-4 -mt-[2.4rem] left- ">
            <DropdownSection className=" w-full border-white p-8 md:p-0">
              <DropdownItem className=" w-full ">
                <div className=" grid gap-y-7 w-full ">
                  {sideNavbar.map((item: any, index: number) => (
                    <div key={index} className="  ">
                      {item.content ? (
                        <>
                          <div
                            className=" cursor-pointer text-gray-400  hover:text-white text-sm"
                            onClick={() => toggleOpen(index)}
                          >
                            {item.name}
                          </div>

                          {openIndex === index && (
                            <div className="">
                              {item.content.map(
                                (subItem: any, subIndex: number) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.link}
                                    className="text-gray-400 text-sm"
                                  >
                                    {subItem.subName}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.link}
                          className="text-gray-400  hover:text-white text-sm "
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        {/* <div className="h-[10rem] text-white w-20 border">
        Hello
      </div> */}
      </div>

      <div className=" md:h-[98vh]  hidden  md:grid grid-cols-1 px-16      overflow-y-scroll  md:w-[15rem] md:pt-10   ">
        <div className=" ">
          <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
          {sideNavbar.map((item: any, index: number) => (
            <div key={index} className=" md:mt-10">
              {item.content ? (
                <>
                  <div
                    className=" cursor-pointer md:flex gap-4  text-gray-400  hover:text-blue-500 text-sm"
                    onClick={() => toggleOpen(index)}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </div>

                  {openIndex === index && (
                    <div className="">
                      {item.content.map((subItem: any, subIndex: number) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className="text-gray-400 text-sm"
                        >
                          {subItem.subName}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  className="text-gray-400  hover:text-blue-500  md:flex gap-4 text-sm "
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-40 text-gray-400">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
