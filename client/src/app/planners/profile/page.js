"use client";

import TopSection from "@/app/components/planners/topSection/page";
import Sidebar from "@/app/components/sidebar/page";
import {React, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TiDelete } from "react-icons/ti";


import './page.css'

export default function Profile () {
    const [EditProfile, setEditProfile] = useState(false);

    const [EditCategoriesModal, setEditCategoriesModal] = useState(false)
    const [EditVenuesModal, setEditVenuesModal] = useState(false)

    const [changePasswordModal, setChangePasswordModal] = useState(false)

    const [newCategory, setNewCategory] = useState("");
    const [newVenue, setNewVenue] = useState("");


    const handleCategoriesModal = () => {
        setEditCategoriesModal(!EditCategoriesModal)
    }

    const handleVenuesModal = () => {
        setEditVenuesModal(!EditVenuesModal)
    }

    const handlePasswordModal = () => {
        setChangePasswordModal(!changePasswordModal)
    }

    const handleProfileModal = () => {
        setEditProfile(!EditProfile);
      };

    const categories =[
        {name: "Wedding"},
        {name: "Formal"},
        {name: "Birthdays"},
        {name: "Gradution"},
    ]

    const Venues = [
        {name: "Venue 1"},
        {name: "Venue 2"},
        {name: "Venue 3"},
        {name: "Venue 4"},
    ]


    const [profileData,setProfileData] = useState(
        {
            firstName: "Lunar",
            secondName: "Salameh",
            email: "Lunarsalameh@gmail.com",
            phoneNumber: "0797762824",
            birthday: new Date("2001-04-05"),
            description: "Lorem Ibsum Lorem Ibsum Lorem Ibsum  ... ",
        }
    )

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [id]: value
        }))
    }

    const handleDateChange = (newDate) => {
        setProfileData((prevData) => ({
            ...prevData,
            birthday: newDate
        }))

    }

    const addCategory = () => {
        if (newCategory.trim()) {
            setNewCategory((prevCategories) => [...prevCategories, { name: newCategory }]);
            setNewCategory(""); // Clear input
        }
    };
    
    const addVenue = () => {
        if (newVenue.trim()) {
            setEditVenuesModal((prevVenues) => [...prevVenues, { name: newVenue }]);
            setNewVenue(""); // Clear input
        }
    };
    

    

    return (
        <>            
            <Sidebar/>
            <div className="flex flex-col " style={{width:'90%', marginLeft:'auto'}}>
            <TopSection />
            <div className="page-container" >

                <div className="grid bg-white rounded-xl p-[2rem] w-[75%] ">

                    {/* Heading */}
                    <div className="font-bold text-3xl h-fit">
                        <h1 className="flex flex-col flex-wrap">Planner Profile</h1>
                        <hr />
                    </div>

                    {/* Form */}
                    <div className="flex flex-col flex-wrap gap-3 mt-5">

                        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                        {/* 1st Name */}                        
                            <div className="flex flex-col flex-wrap">
                                <label htmlFor="firstName" className="required-label my-2 font-bold">First Name</label>
                                {EditProfile ? (
                                    <input 
                                        type="text"
                                        id="firstName"
                                        value={profileData.firstName}
                                        onChange={handleInputChange}
                                        className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                    />
                                ) : (
                                    <p>{profileData.firstName}</p>
                                )}
                            </div>

                            {/* 2nd Name */}
                            <div className="flex flex-col flex-wrap">
                                <label htmlFor="secondName" className="required-label my-2 font-bold">Second Name</label>
                                {EditProfile ? (
                                    <input 
                                        type="text"
                                        id="secondName"
                                        value={profileData.secondName}
                                        onChange={handleInputChange}
                                        className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                    />
                                ) : (
                                    <p>{profileData.secondName}</p>
                                )}
                            </div>
                        </div>

                         {/* Email*/}
                         <div className="flex flex-col flex-wrap">
                            <label htmlFor="email" className="required-label my-2 font-bold">Email</label>
                            {EditProfile ? (
                                <input 
                                    type="email"
                                    id="email"
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                    className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                />
                            ) : (
                                <p>{profileData.email}</p>
                            )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                            {/* Birthday */}
                            <div className="flex flex-col flex-wrap">
                                <label htmlFor="Birthday" className="my-2 font-bold">Birthday</label>
                                {EditProfile ?(  
                                <DatePicker 
                                    selected={profileData.birthday}
                                    onChange={handleDateChange}
                                    dateFormate="MM/dd/YYYY"
                                    placeholderText="Enter your Birthday"
                                    className="rounded-lg bg-white border-[#4c1b419c] border-2 w-full"
                                    id="Birthday"
                                    showIcon={true}
                                    closeOnScroll={true}
                                    calendarIconClassName="top-1/2 transform -translate-y-1/2"
                                    
                                />
                                ):(
                                    <p>{profileData.birthday.toLocaleDateString("en-US")}</p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col flex-wrap">
                                <label htmlFor="phoneNumber" className="required-label my-2 font-bold">Phone Number</label>
                                {EditProfile ? (
                                <input 
                                    type="tel"
                                    id="phoneNumber"
                                    value={profileData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="px-5 py-1.5 rounded-lg bg-white border-[#4c1b419c] border-2"
                                />
                            ) : (
                                <p>{profileData.phoneNumber}</p>
                            )}
                            </div>

                            

                        </div>

                        {/* Description */}
                        <div className="flex flex-col flex-wrap">
                        <label htmlFor="textArea" className=" my-2 font-bold">Description</label>
                        {EditProfile ? (
                                <textarea
                                    id="description"
                                    value={profileData.description}
                                    onChange={handleInputChange}
                                    className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                />
                            ) : (
                                <p>{profileData.description}</p>
                            )}
                        </div>


                        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 pt-5">
                            
                            {/* Categories */}
                            <div>
                                <div className="my-2 font-bold flex justify-between gap-5 mr-7">
                                    <p className="text-xl">Categories</p>
                                    <button className="py-1 px-2  text-[#D9B34D]" onClick={handleCategoriesModal}>Edit</button>
                                </div>
                                <div className="m-4 flex flex-wrap gap-2 ">
                                    {categories.map((category,index)=>(
                                        <div key={index} className="bg-[#4c1b41] py-2 px-4 rounded-2xl text-white shadow-lg shadow-[#4c1b4161]">
                                            {category.name}
                                        </div>
                                    ))}

                                </div>
                            </div>


                        {/* Venues */}
                            <div className="">
                                <div className="my-2 font-bold flex justify-between gap-5 mr-7 flex-wrap">
                                    <p className="text-xl">Venues</p>
                                    <button className="py-1 px-2  text-[#D9B34D]" onClick={handleVenuesModal}>Edit</button>
                                </div>
                                <div className="m-4 flex flex-wrap gap-2 ">
                                    {Venues.map((venue,index)=>(
                                        <div key={index} className="bg-[#4c1b41] py-2 px-4 rounded-2xl text-white shadow-lg shadow-[#4c1b4161]">
                                            {venue.name}
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>

                    </div>
                    
                    {/* Edit & Change Password */}
                    <div className="flex gap-4 mt-16 justify-end  flex-wrap">
                        <button className="bg-[#D9B34D] py-2 px-5 rounded-lg shadow-md hover:bg-[#d9b44dcc] text-white" onClick={handlePasswordModal}>Change Password</button>
                        <button className="bg-[#D9B34D] py-2 px-5 rounded-lg shadow-md hover:bg-[#d9b44dcc] text-white" onClick={handleProfileModal}> 
                            {EditProfile ? "Save Profile" : "Edit Profile"}
                        </button>
                    </div>
                </div>

                {
                    changePasswordModal &&(
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                            <div className="bg-white rounded-xl  w-[50%] px-10 py-8 flex flex-col gap-6 ">
                             
                                <div className="flex flex-col flex-wrap gap-5">

                                    <div className="font-bold text-xl flex flex-col ">
                                        <p className="">Change Password</p>
                                        <hr />
                                    </div>

                                    {/* Old password */}
                                    <div className="flex flex-col">
                                        <label htmlFor="OldPassword" className="required-label my-2 font-bold">Old Password</label>
                                        <input 
                                            type="password"
                                            id="OldPassword"
                                            placeholder="Enter Your Old Password"
                                            className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                            required
                                        />
                                    </div>

                                    {/* New password */}
                                    <div className="flex flex-col">
                                        <label htmlFor="NewPassword" className="required-label my-2 font-bold">New Password</label>
                                        <input 
                                            type="password"
                                            id="NewPassword"
                                            placeholder="Enter Your Old Password"
                                            className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                            required
                                        />
                                    </div>

                                    {/* Re-type password */}
                                    <div className="flex flex-col">
                                        <label htmlFor="reTypedPassword" className="required-label my-2 font-bold">Re-Type Password</label>
                                        <input 
                                            type="password"
                                            id="reTypedPassword"
                                            placeholder="Enter Your Old Password"
                                            className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                            required
                                        />
                                    </div>


                                </div>

                                <div className="flex items-end justify-end">
                                    <button 
                                        className="bg-[#D9B34D] w-fit py-2 px-5 rounded-lg shadow-md hover:bg-[#d9b44dcc] text-white"
                                        onClick={handlePasswordModal}
                                        >
                                            Save Changes
                                        </button>
                                </div>

                            </div>
            
                        </div>
                    )
                }

                {EditCategoriesModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-xl w-[50%] px-10 py-8 flex flex-col gap-6">
                            <div className="font-bold text-xl mb-4">
                                <p>Categories</p>
                                <hr />
                            </div>

                            <div className="m-4 flex flex-wrap gap-2">
                                {categories.map((category, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-[#4c1b41] py-2 px-4 rounded-2xl text-white shadow-lg shadow-[#4c1b4161]">
                                        <p>{category.name}</p>
                                        <TiDelete
                                            className="hover:text-gray-300 cursor-pointer"
                                            onClick={handleCategoriesModal}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2 mt-4">
                                <input
                                    type="text"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    placeholder="Add new category"
                                    className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                />
                                <button
                                    onClick={addCategory}
                                    className="bg-[#D9B34D] px-4 py-2 rounded-lg text-white"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}


                                
                {EditVenuesModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-xl w-[50%] px-10 py-8 flex flex-col gap-6">
                            <div className="font-bold text-xl mb-4">
                                <p>Venues</p>
                                <hr />
                            </div>

                            <div className="m-4 flex flex-wrap gap-2">
                                {Venues.map((venue, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-[#4c1b41] py-2 px-4 rounded-2xl text-white shadow-lg shadow-[#4c1b4161]">
                                        <p>{venue.name}</p>
                                        <TiDelete
                                            className="hover:text-gray-300 cursor-pointer"
                                            onClick={handleVenuesModal}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2 mt-4">
                                <input
                                    type="text"
                                    value={newVenue}
                                    onChange={(e) => setNewVenue(e.target.value)}
                                    placeholder="Add new venue"
                                    className="px-5 py-2 rounded-lg bg-white border-[#4c1b419c] border-2"
                                />
                                <button
                                    onClick={addVenue}
                                    className="bg-[#D9B34D] px-4 py-2 rounded-lg text-white"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}


        </div>
        </div>
        </>
    )
}