"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";


export default function Card({ img, title, description, price }) {
  return (
    <div className="bg-white flex-col w-64 h-fit overflow-clip rounded-2xl shadow-2xl shadow-slate-300 group hover:shadow-blue-600 hover:translate-y-1 hover:translate-x-1 hover:translate-all duration-500">

      {/* CardImage */}
      <CardImage img={img} />
      <CardBody title={title} description={description} price={price} />
    </div>
  );
}

const CardImage = ({ img }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-full h-36 bg-blue-200 overflow-clip relative">
      <Image
        src={img}
        alt="Card Image"
        fill
        className="scale-110 group-hover:scale-125 duration-300"
      />

      <FaHeart
        className={`size-7 absolute z-50 right-3 bottom-2 ${
          like ? "text-rose-500" : "text-"
        }`}
        onClick={() => setLike(!like)}
      />
    </div>
  );
};

const CardBody = ({ title, description, price }) => {
  return (
    <div className="h-full flex flex-col px-6 py-6 gap-8">
      <CardContent title={title} description={description} />
      <CardButton price={price} />
    </div>
  );
};

const CardContent = ({ title, description }) => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <h1 className="font-bold text-2xl uppercase">{title}</h1>
      <p className="text-slate-700 font-light">{description}</p>
    </div>
  );
};

const CardButton = ({ price }) => {
  return (
    <button className="bg-red-600 text-white rounded-xl gap-4 p-4">
      BUY {price}
    </button>
  );
};
