"use client";
import '../../i18n';
import React, { useState , useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";
import stl from './Navbar.module.css';
import { HiViewList } from "react-icons/hi";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Import translation function

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

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
        <a href="/customers/landingPage"><img src="/Golden-logo.png" alt="logo" className={stl.logo} /></a>
      </div>
      <ul className={stl.navbar_list}>
        <li className={stl.navbar_item}><a href="/customers/landingPage">{t("navbar.home")}</a></li>
        <li className={stl.navbar_item}><a href="#categories">{t("navbar.categories")}</a></li>
        <li className={stl.navbar_item}><a href="/customers/profile">{t('navbar.profile')}</a></li>
        <li className={stl.navbar_item}><a href="/general/aboutUs">{t("navbar.about")}</a></li>
        <li className={stl.navbar_item}><a href="/general/signUp">{t("navbar.signup")}</a></li>
        <li className={stl.navbar_item}>
          <button onClick={toggleLanguage} className={stl.languageToggle}>
            <AiOutlineGlobal className={stl.icon} />
          </button>
        </li> 
       
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