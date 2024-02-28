// import React from 'react'

import { salesData } from "./componentfile";

const Sales = () => {
  return (
    <div className="text-black  mt-16 ">
      <h1 className="font-bold text-gray-600 text-xl mb-4">Sale Analytics</h1>
      <div className="grid grid-cols-1 gap-y-5 ">
        {salesData.map((sales, index) => (
          <div
            key={index}
            className="flex justify-center gap-6 items-center  h-20 bg-white shadow-lg rounded-xl"
          >
            {sales.item}
            <div className="grid grid-cols-1 py-4">
              <span className="font-bold text-sm">{sales.text1}</span>
              <span className="text-xs text-gray-500">{sales.text2}</span>
            </div>
            {sales.percent}
            <span className="font-bold text-sm">{sales.figures}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
