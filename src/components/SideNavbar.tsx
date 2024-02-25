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
    <div className="">
      <div className="   mt-14  w-full   md:w-0 z-50 md:mt-0">
        <Dropdown className=" mt-8 w-full  md:hidden  ">
          <DropdownTrigger className="mt-[5px] border-b border-gray-600 absolute w-full py-2 z-30 bg-black ">
            <Button className=" md:hidden  text-white">Open Menu</Button>
          </DropdownTrigger>
          <DropdownMenu className="  overflow-y-scroll  h-[36.4rem]  w-[25.8rem] pl-4 -mt-[2.4rem] left- ">
            <DropdownSection className="">
              <DropdownItem className="  ">
                <div className=" grid gap-y-7  ">
                  {sideNavbar.map((item: any, index: number) => (
                    <div key={index} className=" ">
                      {item.content ? (
                        <>
                          <div
                            className="font-bold cursor-pointer text-gray-400  hover:text-white text-sm"
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

      <div className="flex-none md:h-[98vh]  hidden md:block     overflow-y-scroll  md:w-[25rem]   pt-36  md:pl-56 ">
        {/* <div className="h-[4rem] border"> */}
        {sideNavbar.map((item: any, index: number) => (
          <div key={index} className=" h-16">
            {item.content ? (
              <>
                <div
                  className="font-bold cursor-pointer text-gray-400  hover:text-white text-sm"
                  onClick={() => toggleOpen(index)}
                >
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
                className="text-gray-400 hover:text-white text-sm "
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SideNavbar;
