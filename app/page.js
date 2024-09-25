// "use client"
// import Image from "next/image";
// import { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import React from 'react';
// import Card from "../components/mycard";

import Card from "../components/mycard";


const fruits = [
  {
    img: "/fa.webp",
    title: "Family",
    description: "May your love grow like the mustard seed in Matthew 13:32",
    price: "$" + 300,
  },
  {
     img:"/orange.webp",
     title:"Mangoes",
     description:"Mangoes are packed with vitamin C, boosting immunity.",
     price: "$" + 700,
  },
  {
     img:"/BL.webp",
     title:"Berry",
     description:"They contain fiber for digestion and potassium for heart health.",
     price: "$" + 200,
  },
  {
     img:"/bb.webp",
     title:"Banana",
     description:"vitamin B6 for mood and sleep, and natural sugars for quick energy.",
     price: "$" + 800,
  },
  {
     img:"/tech.webp",
     title:"Pineapple",
     description:"It aids digestion, boosts immunity, and may reduce inflammation.",
     price: "$" + 500,
  },
];  

export default function Home() {
  
  return (

    // LAYOUT
    <div>
      <nav className="w-full h-10 bg-rose-300 border-rose-800">
        <h1 className="text-lg text-center font-mono text-3xl  p-1 font-bold uppercase">Christ in me the hope of glory</h1>
      </nav>

      <div className="fixed w-30 h-30 bg-blue-600 top-0"></div>
      <div className="fixed flex justify-end p-1 gap-1">
        <div className="w-5 h-5 bg-orange-500 rounded-full "></div>
        <div className="w-7 h-7 bg-orange-500 rounded-full "></div>
        <div className="w-8 h-8 bg-orange-500 rounded-full "></div>
      </div>

    {/* MAIN WORK */}
      <navt className="w-full h-10 bg-rose-300 rounded-md">
        <p className="text-lg text-left font-mono px-28 p-1 font-medium uppercase">Contact: 08029320101</p>
      </navt>

      {/* Media query */}

      <button className="bg-lime-600 fixed flex-wrap flex-col rounded-lg px-4 py-2 text-white my-2 hover:bg-lime-900 ml-10 focus:outline-none focus:ring-blue-900 active:bg-yellow-300">
        Click Me
      </button>

      <div className="flex w-full h-dvh items-center px-4 py-4 gap-4 justify-center bg-rose-50">
        {fruits.map((fruit, index)=> {
        return(
          <Card key={index} img={fruit.img} title={fruit.title} description={fruit.description} price={fruit.price}/>

        )
      })}
    </div>
    </div>
    )
  }
