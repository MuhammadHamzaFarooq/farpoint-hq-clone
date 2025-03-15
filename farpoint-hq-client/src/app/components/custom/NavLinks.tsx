"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function NavLinks() {
// widget one 
const widgetOne = [
  {
    name : "who we are",
    link : "#"
  },
  {
    name : "what we do",
    link : "#"
  },
  {
    name : "our impact",
    link : "#"
  },
]
// widget two 
const widgetTwo = [
  {
    name : "impact reports",
    link : "#"
  },
  {
    name : "explainer",
    link : "#"
  },
  {
    name : "blogs",
    link : "#"
  },
]
// widget three 
const widgetThree = [
  {
    name : "careers",
    link : "#"
  },
  {
    name : "contact",
    link : "#"
  },
  {
    name : "newsroom",
    link : "#"
  },
]


const [activeWidget, setActiveWidget] = useState(null);

const toggleWidget = (index:any) => {
  setActiveWidget(activeWidget === index ? null : index);
};


  return (
    <div className="w-full h-20 px-16 pt-20">
      <div className=" lg:h-[420px] h-fit max-w-screen-1xl  mx-auto bg-slate-100 ">
        <div className="">
          {/* search section  */}
          <div className="mx-auto lg:flex justify-center hidden">
            <div className=" w-[410px]  items-center flex rounded-lg my-4">
            <input
                type="text"
                className="border p-5 w-80 h-11 flex justify-center caret-red-500 outline-none rounded-lg z-10"
                // className="caret-red-500 z-10"
                placeholder="Start Typing"
              />
              {/* Search button */}
              <div className="-ml-7 h-11 bg-black w-28 text-white flex justify-center items-center rounded-lg text-sm">
                <button onClick={()=>console.log("hello")} className="z-10">search</button>
              </div>
            </div>
          </div>
          {/* links section  */}
          <div className="flex lg:flex-row flex-col">
            {/* widget 1 */}
            <div className="lg:w-2/6 lg:border-r-2  w-[95%] mx-auto ">
              {/* heading  */}
              <div className="pt-6 pb-4 text-sm px-6">
                <p>OUR COMPANY</p>
              </div>
              <div className="w-[90%] h-2 mx-auto border-b-2 "></div>
              {/* links  */}
              {
                widgetOne.map((widgetOne)=>(
                  <div  key={widgetOne.name}>
                  <Link href={widgetOne.link}>
              <div className="pt-7 pb-5 flex text-lg capitalize font-semibold justify-between px-6  group">
                <p className="group-hover:translate-x-2 transition duration-500">{widgetOne.name}</p>
                <FaArrowRightLong className="group-hover:translate-x-2 transition duration-500" />
              </div>
              </Link>
              <div className="w-[90%] h-2 mx-auto border-b-2"></div>
              </div>
                ))
              }
            </div>
            {/* widget 2 */}
            <div className="lg:w-2/6 lg:border-r-2  w-[95%] mx-auto ">
              {/* heading  */}
              <div className="pt-6 pb-4 text-sm px-6">
                <p>RESOURCES</p>
              </div>
              <div className="w-[90%] h-2 mx-auto border-b-2 "></div>
              {/* links  */}
              {
                widgetTwo.map((widgetTwo)=>(
                  <div  key={widgetTwo.name}>
                  <Link href={widgetTwo.link}>
              <div className="pt-7 pb-5 flex text-lg capitalize font-semibold justify-between px-6  group">
                <p className="group-hover:translate-x-2 transition duration-500">{widgetTwo.name}</p>
                <FaArrowRightLong className="group-hover:translate-x-2 transition duration-500" />
              </div>
              </Link>
              <div className="w-[90%] h-2 mx-auto border-b-2"></div>
              </div>
                ))
              }
            </div>
            {/* widget 3 */}
            <div className="lg:w-2/6  w-[95%] mx-auto ">
              {/* heading  */}
              <div className="pt-6 pb-4 text-sm px-6">
                <p>OUTREACH</p>
              </div>
              <div className="w-[90%] h-2 mx-auto border-b-2 "></div>
              {/* links  */}
              {
                widgetThree.map((widgetThree)=>(
                  <div  key={widgetThree.name}>
                  <Link href={widgetThree.link}>
              <div className="pt-7 pb-5 flex text-lg capitalize font-semibold justify-between px-6  group">
                <p className="group-hover:translate-x-2 transition duration-500">{widgetThree.name}</p>
                <FaArrowRightLong className="group-hover:translate-x-2 transition duration-500" />
              </div>
              </Link>
              <div className="w-[90%] h-2 mx-auto border-b-2"></div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
