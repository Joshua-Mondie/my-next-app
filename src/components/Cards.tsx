import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { cards } from "./componentfile";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="pb-4 border border-gray-700 md:w-80 pt-4 pl-8 md:pb-8 pr-10 rounded-md"
        >
          <Card>
            <CardHeader className="text-xl text-blue-700 md:text-2xl mb-2">
              {card.header}
            </CardHeader>
            <CardBody>
              <p className=" text-sm text-gray-400">{card.text}</p>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
