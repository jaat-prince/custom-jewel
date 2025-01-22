import React ,{useState} from "react";
import Logo from "./../../asset/png/Logo.png";
import { navData } from "../helper/Helper";
import { BagIcon, SearchIcon } from "./../helper/Icon";
import Menu from "./../../asset/png/menu.png";
import Sidebar from "./Sidebar";

function Navbar() {
 
  return (
    <>
    <div className="max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
      <div className="py-[26px] flex items-center justify-between">
        <a href="#">
          <img className="w-100 max-w-[212px]" src={Logo} alt="logo" />
        </a>
        <ul className="hidden lg:flex items-center gap-11">
          {navData.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-base font-medium text-[#4D4D4D] hover:text-[#000] transition duration-500 ease-in-out"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#" className="text-none">
            <SearchIcon />
          </a>
          <a href="#" className="text-none">
            <BagIcon />
          </a>
          <a
            href="#"
            className="text-none fs-sm font-medium text-[#4D4D4D] hover:text-[#000] transition duration-500 ease-in-out"
          >
            Log In
          </a>
          <button className="bg-[#BD0004] text-[#fff] py-[10px] px-[22px] text-sm font-medium">
            Sign Up
          </button>
        </div>
        <button className="flex lg:hidden"><img src={Menu} alt="menu" /></button>
      </div>
    </div>
    {/* <Sidebar/> */}
    </>
  );
}

export default Navbar;
