import { FaHome, FaHistory  } from "react-icons/fa";
import { IoSettings } from "react-icons/io5"
import  StoreLogo  from "../assets/electron.svg"
export default function Sidebar() {
  return (
    <div className="sidebar w-[5%] h-screen bg-black text-white pt-5 flex flex-col gap-8 items-center">
      <img src={StoreLogo} alt="store-logo" className="w-10 h-10" />
      <div className="menu-sidebar">
        <ul className="flex flex-col gap-8 w-full items-center">
          <li><a href="#" className="text-xl"><FaHome /></a></li>
          <li><a href="#" className="text-xl"><FaHistory /></a></li>
          <li><a href="#" className="text-xl"><IoSettings /></a></li>
        </ul>
      </div>
    </div>
  )
}
