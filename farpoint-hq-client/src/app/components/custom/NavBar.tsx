"use client";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const links = [
    { name: "WHO WE ARE", link: "#" },
    { name: "WHAT WE DO", link: "#" },
    { name: "OUR IMPACT", link: "#" },
    { name: "CONTACT", link: "#" },
  ];
  // set navbar hide or show background
  const [Navbackground, SetNavbackground] = useState({
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
  });

  // set list text text color
  const [Listcolor, SetListcolor] = useState({
    color: "white",
  });

  // State to manage the dropdown's visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // function for handling the scroll
  const scrolled = () => {
    if (window.scrollY > 50) {
      SetNavbackground({
        backgroundColor: "white",
        transition: "all 0.3s ease",
      });
      SetListcolor({
        color: "black",
      });
    } else {
      SetNavbackground({
        backgroundColor: "transparent",
        transition: "all 1s ease",
      });
      SetListcolor({
        color: "white",
      });
    }
  };
  // for handle scrolling
  useEffect(() => {
    window.addEventListener("scroll", scrolled);
    return () => {
      window.removeEventListener("scroll", scrolled);
    };
  }, []);

  return (
    <div className="bg-cyan-700 w-full h-[200vh]">
      <div className="w-full h-20 fixed px-16">
        <div className=" flex h-20 max-w-screen-1xl  mx-auto ">
          {/* logo and Hamburger  */}
          <div className="lg:w-[30%] w-[100%] bg-white flex items-center justify-between">
            {/* logo  */}
            <div className=" ml-6 h-full flex items-center">
              <Image
                className="w-28"
                alt="FarPointHQ"
                src={require("@/app/styles/images/logo.svg")}
              />
            </div>
            {/* hamburger  */}
            <div className=" flex justify-center items-center text-center h-full border-opacity-40 border-l border-gray-300">
              <CiMenuBurger
                onClick={toggleDropdown}
                className="m-6 text-gray-500"
                size={40}
              />
            </div>
          </div>
          {/* about us  */}
          <div
            style={{ ...Navbackground }}
            className={`lg:w-[70%] h-full transition-all hidden lg:block ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <ul className="flex justify-between text-center py-3 px-6">
              {/* LISTING MAP  */}
              {links.map((links) => (
                <li
                  key={links.name}
                  style={{ ...Listcolor }}
                  className="transition duration-500 px-5 py-1 text-white font-semibold text-base rounded-lg ease-in-out transform hover:translate-x-1 hover:-translate-y-1 hover:bg-transparent hover:text-white  hover:border hover:border-gray-200"
                >
                  <Link href={links.link} className="block px-4 py-2">
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isOpen && <NavLinks/>}
      
    </div>
  );
}

