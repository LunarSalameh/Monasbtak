"use client";
import React, { useState , useEffect } from 'react';
import stl from './Navbar.module.css';
import { HiViewList } from "react-icons/hi";

const Navbar = () => {
  useEffect(() => {
    document.body.style.fontFamily = "'Playfair Display', serif";
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className={stl.navbar}>
      <div className={stl.navbar_brand}>
        <img src="/Golden-logo.png" alt="logo" className={stl.logo}  />
      </div>
      <ul className={stl.navbar_list}>
        <li className={stl.navbar_item}><a href="/customers/landingPage">Home</a></li>
        <li className={stl.navbar_item}><a href="#categories">Categories</a></li>
        <li className={stl.navbar_item}><a href="/customers/profile">profile</a></li>
        <li className={stl.navbar_item}><a href="/general/aboutUs">About Us</a></li>
        <li className={stl.navbar_item}><a href="/general/signUp">Sign Up</a></li>
        
      </ul>
      <div className={stl.navbarMenuIcon} onClick={toggleSidebar}>
        <HiViewList className={stl.icon}/>
      </div>
      {isSidebarOpen && (
        <div className={stl.sidebar}>
            <div className={stl.sidebarCloseIcon} onClick={toggleSidebar}>
              <HiViewList className={stl.icon} />
            </div>
          <ul className={stl.sidebar_list}>
            <li className={stl.sidebar_item}><a href="/" onClick={toggleSidebar}>Home</a></li>
            <li className={stl.sidebar_item}><a href="#categories" onClick={toggleSidebar}>Categories</a></li>
            <li className={stl.sidebar_item}><a href="/customers/profile" onClick={toggleSidebar}>Profile</a></li>
            <li className={stl.sidebar_item}><a href="/general/aboutUs" onClick={toggleSidebar}>About Us</a></li>
            <li className={stl.sidebar_item}><a href="/general/signUp" onClick={toggleSidebar}>Sign Up</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;