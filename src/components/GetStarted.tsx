import React from "react";
import Cards from "./Cards";
import Financials from "./Financials";
import RecentUpdate from "./RecentUpdate";
import Sales from "./Sales";

const GetStarted = () => {
  return (
    <div className="flex">
      <div className=" w-3/5 h-full  mx-6 ">
        <Cards />
        <Financials />
      </div>
      <div>
        <RecentUpdate />
        <Sales/>
      </div>
    </div>
  );
};

export default GetStarted;
