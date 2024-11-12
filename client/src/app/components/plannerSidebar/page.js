"use client"
import {React, useState} from "react";


import { FaKey,FaBuilding,FaRegCircleUser,FaRegCalendar ,FaDollarSign, FaCircle } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";

import { HiOutlineViewList } from "react-icons/hi";

export default function Sidebar () {
    const [open,setOpen] = useState(true);

    const menu = [
        {title: "Home Dashboard", src:<FaKey/> , path:"/admin/dashboard"},
        {title: "Venues", src:<FaBuilding/>, path:"/admin/venues" },
        {title: "Users", src:<FaRegCircleUser /> , path:"/admin/users" },
        {title: "Planner Packages", src:<FiPackage/>, path:"/admin/plannerPackages"},
        {title: "All Events", src:<FaRegCalendar /> , path:"/admin/events"},
        {title: "Revenue", src:<FaDollarSign />, path:"/admin/revenue" }
    ]


    return (
        <>
            <aside className="flex h-full">
                <div style={{ height: '100%' , position:'fixed'}}className={` ${open ? "w-64" : "w-20"} bg-white shadow-lg text-[#D9B34D]  p-5 duration-300`}>
                    {
                        open ? 
                            <img 
                                src="/Monasbtak-EN.png" 
                                onClick={() => setOpen(!open)}
                                className="cursor-pointer border-b-2 "/> 
                            :
                            <div className="justify-items-center border-b-2 ">
                                <HiOutlineViewList onClick={() => setOpen(!open)} className={`mb-2 cursor-pointer duration-300`}/> 
                            </div>
                    }
                    
                    <ul className={`flex flex-col gap-5 justify-center py-7 ${open ? "px-4" : "px-1"} text-center`} >
                        {menu.map((Menu,index) => (
                            <li 
                                key={index}
                                className={`flex cursor-pointer p-2 items-center justify-items-center active:bg-[#D9B34D] active:text-white hover:bg-gray-100 rounded-lg`}
                            >
                                <a
                                    href={Menu.path}>
                                    <div className="flex gap-4">
                                        <div className="flex justify-center items-center">{Menu.src}</div>
                                        <span className={` ${!open && "hidden"} origin-left duration-200`}>{Menu.title}</span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div style={{ marginTop: '250px' }} className=" flex items-end gap-4 p-5 ">
                        <FaCircle color="#D9B34D" size={48}/>
                        { open &&
                            <div className={`text-sm flex flex-col`}>
                                <p className="font-bold">UserName</p>
                                <p>Planner/Vedor</p>
                            </div>
                            }

                    </div>
                </div>
            </aside>
        </>
    );
}