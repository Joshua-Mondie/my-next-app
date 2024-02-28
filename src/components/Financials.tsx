// import React from 'react'

"use client";
import { financialsdata } from "./componentfile";
import { HiArrowLeft } from "react-icons/hi";
import { ImArrowRight2 } from "react-icons/im";
import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

// import Profile from "../../../common/DashboardLayout/Profile";

const Financials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const financials = financialsdata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(financialsdata.length / recordsPerPage);

  //   const number = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className=" mt-3">
      {/* <div className=" justify-end flex py-4 mr-10">
        <Profile />
      </div> */}

      {/* <div className="border mx-8 h-[737px] bg-[#e2e6f7] px-8"> */}
      <div className="flex justify-end px-4">
        <div className="flex justify-between items-center  w-full">
          <h1 className=" text-gray-600  text-xl font-bold  ">
            Financials
          </h1>
          <button className="w-[139px] py-2 my-5 text-black  border-[#E0E0E0] bg-[#FFF] rounded-lg text-sm flex justify-between px-4 items-center">
            This Month
            <span className="text-sm">
              <FaChevronDown />
            </span>
          </button>
        </div>
      </div>
      <table className="header  w-full rounded-xl bg-[#FFFFFF]">
        <thead className="">
          <tr className="flex justify-start border-b py-3">
            <th className="py-2 px-4  flex  w-1/3 text-[#828282] font-[700] font-custom size0">
              Transaction date
            </th>
            <th className="py-2 px-4  flex  w-1/5 pl-8 text-[#828282] font-[700] font-custom size0">
              Type
            </th>
            <th className="py-2 px-4  flex  w-1/5 pl-2 text-[#828282] font-[700] font-custom size0">
              Amount
            </th>
            <th className="py-2 px-4  flex  w-1/6 text-[#828282] font-[700] font-custom size0">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="">
          {financials.map((data, index) => (
            <tr key={index} className="flex  border-b py-4">
              <td className="py-2 px-4 flex  w-1/3 text-[#333333] font-[500] font-custom smSize">
                {data.transactionDate}
              </td>
              <td className="py-2 px-8  w-1/6 text-[#EB0000] font-[500] font-custom smSize">
                {data.type}
              </td>
              <td className="py-2 px-10  w-1/5 text-[#333333] font-[500] font-custom smSize">
                {data.amount}
              </td>
              <td className="py-2 px-12  w-1/6 text-[#333333] font-[500] font-custom smSize">
                {data.status}
              </td>
              <div className="ml-10 flex justify-center items-center">
                <MdMoreHoriz />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="flex  justify-between items-center border-b  border-x rounded-b-lg p-4">
          <div>
            <a
              href="#"
            //   onClick={prePage}
              className="btn-1 flex items-center gap-x-2 p-2   rounded-lg bg-[#FFF] text-[#7E7E89] "
            >
              <HiArrowLeft className="" />
            </a>
          </div>
          {/* <div className="flex gap-x-4 ">
              {number.map((n, i) => (
                <li
                  className={`${
                    currentPage === n
                      ? "active bg-[#d7d7d7]"
                      : "hover:bg-[#FFF7FD]"
                  } pagination    justify-center px-2 items-center flex`}
                  key={i}
                >
                  <a
                    href="#"
                    className="text-[#7E7E89] "
                    onClick={() => changeCpage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
            </div> */}
          <div>
            <a
              href="#"
            //   onClick={nextPage}
              className="btn-1 flex items-center gap-x-2 p-2   rounded-lg bg-[#FFF] text-[#7E7E89]"
            >
              <ImArrowRight2 className=" font-[40px]" />
            </a>
          </div>
        </ul>
      </nav>
      {/* </div> */}
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

//   function changeCpage(id) {
//     setCurrentPage(id);
//   }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Financials;
