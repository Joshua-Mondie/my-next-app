import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { cards } from "./componentfile";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 bg-slate-50  rounded-2xl lg:grid-cols-3 mt-20  ">
      {cards.map((card, index) => (
        <div key={index} className="pb-4 pt-4  md:pb-8  ">
          <Card className="  grid px-16 py-4  h-56 w-56 rounded-xl bg-white shadow-xl">
            <CardHeader className="text-xl  md:text-2xl mb-2">
              <span className="p-4 rounded-full bg-green-200 text-green-700">
                {card.icon}
              </span>
            </CardHeader>
            <CardBody className=" grid  ">
              <span className="text-gray-500 ">{card.text}</span>
              <span className="text-black font-bold text-2xl">
                {card.figure}
              </span>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
