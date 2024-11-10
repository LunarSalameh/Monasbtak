import React from 'react';
import './page.css';
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { TbGenderBigender } from "react-icons/tb";

function ProfileDetails () {
  return (
    <div className='Box-Border'>
        <div className='Profile-Container'>
            <img src="/customer_image.jpg" className='Profile-Image' />
            <div className='Customer-Name'>
                <span className='bold-font large-font-size'>UserName</span>
                    <div className='Info-Details mid-font-size' >
                        <span className='flex gap-2'><MdEmail/>&nbsp;&nbsp;1234@gmail.com</span>
                        <span className='flex gap-2'><FaPhone/>&nbsp;&nbsp;1234567890</span>
                        <span className='flex gap-2'><GrUserManager />&nbsp;&nbsp;23</span>
                        <span className='flex gap-2'><FaLocationDot />&nbsp;&nbsp;Amman</span>
                        <span className='flex gap-2'><TbGenderBigender />&nbsp;&nbsp;Female</span>
                    </div>
            </div>
            <Link href='/customers/editProfile'>
              <button className='Button'>Edit</button>
            </Link>
        </div>
    </div>
  );
}

export default ProfileDetails;