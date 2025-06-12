import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bell, Home, Settings, BookOpen, SquarePlus } from "lucide-react";
// import { CirclePl } from 'lucide-react';

const menuItems = [
  // { title: "Ask", icon: SquarePlus, path: "/ask" },
  { title: "Home", icon: Home, path: "/" },
  { title: "Notification", icon: Bell, path: "/notification" },
  { title: "Settings", icon: Settings, path: "/settings" },
  { title: "Document", icon: BookOpen, path: "/document" },
];



const ask = [
  { title: "Ask", icon: SquarePlus, path: "/ask" }
]

export default function AppSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();



  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-[#f4f3fb] flex flex-col justify-between">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="py-7">
          <div className="w-14 h-14">
            <img src="./logoicon.svg" alt="Company Logo" className="w-full h-full object-contain" />
          </div>
        </div>


        {/* ask nu alg thii */}
        <nav className="flex flex-col gap-4 px-2 mt-2 w-full">
          {ask.map(({ title, icon: Icon, path }) => (
            <NavLink
              key={title}
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 p-2 rounded-full bg-black text-white hover: transition-all ${isActive ? "" : ""
                }`
              }
            >
              <Icon className="w-8  h-8" />
              {/* <span className="text-xs font-medium text-center">{title}</span> */}
            </NavLink>
          ))}
        </nav>
        {/* Menu Items */}
        <nav className="flex flex-col gap-4 px-2 mt-7 w-full">
          {menuItems.map(({ title, icon: Icon, path }) => (
            <NavLink
              key={title}
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-all ${isActive ? "bg-gray-100" : ""
                }`
              }
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium text-center">{title}</span>
            </NavLink>
          ))}
        </nav>
      </div>


      {/* profile img  */}
      <div className="p-5 mb-3">
        <img
          src="./profileimg.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </div>

    </aside>
  );
}


{/* Ask Button */ }
{/* <div className=""> */ }
{/* <button
            onClick={() => navigate("/ask")}
            className="w-full bg-black text-white rounded-full py-2 text-sm font-semibold hover:scale-105 transition-all"
          >
            +
          </button> */}
{/* <CirclePlus size={42}
            className="w-full max-w-5xl  text-white rounded-full  py-2 text-sm font-semibold hover:scale-105 transition-all"
            onClick={() => navigate("/ask")} /> */}

{/* <button className="w-full  text-black rounded-full p-1   hover:scale-105 transition-all">
            <SquarePlus className="w-8 h-8" /> */}

{/* </button> */ }