import React, {useState} from 'react'
import Logo from "./../../asset/png/Logo.png";
import { navData } from "../helper/Helper";
import { BagIcon, SearchIcon } from "./../helper/Icon";
import Cross from './../../asset/png/cross.png'
function Sidebar() {
    const [issidebar, setIssidebar] = useState(false)
  function togglesidebar() {
     issidebar(!setIssidebar)
  }
  return (
    <div className='w-full max-w-[420px] bg-[#000]/[0.7]'>
        <div className='flex justify-between'>
        <a href="#">
          <img className="w-100 max-w-[212px]" src={Logo} alt="logo" />
        </a>
        <button onClick={togglesidebar}><img src={Cross} alt="cross icon" /></button>
        </div>
      
        <ul className="flex flex-col items-center gap-11">
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
        <div className="flex flex-col gap-11 items-center mt-11">
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
    </div>
  )
}

export default Sidebar