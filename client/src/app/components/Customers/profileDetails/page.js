'use client';
import {React , useState} from 'react'
import './page.css';
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { TbGenderBigender } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

function ProfileDetails () {
  const [Edit, setEdit] = useState(false);
  const EditProfile = () => {
    setEdit(true);
  }
  const CloseEdit = () => {
    setEdit(false);
  }

  return (
    <div className='Box-Border'>
        <div className='Profile-Container'>
            <img src="/customer_image.jpg" className='Profile-Image' />
            <div className='Customer-Name'>
                <span className='bold-font large-font-size'>UserName</span>
                {Edit ? (
                    <div className='Info-Details mid-font-size'>
                        <input type='email' className='input flex gap-2' placeholder='Email' />
                        <input type='tel' className='input flex gap-2' placeholder='Phone Number' />
                        <input type='number' className='input flex gap-2' placeholder='Age' />
                        <input type='text' className='input flex gap-2' placeholder='Location' />
                    </div>
                ) : (
                    <div className='Info-Details mid-font-size'>
                        <span className='flex gap-2'><MdEmail/>&nbsp;&nbsp;1234@gmail.com</span>
                        <span className='flex gap-2'><FaPhone/>&nbsp;&nbsp;1234567890</span>
                        <span className='flex gap-2'><GrUserManager />&nbsp;&nbsp;23</span>
                        <span className='flex gap-2'><FaLocationDot />&nbsp;&nbsp;Amman</span>
                        <span className='flex gap-2'><TbGenderBigender />&nbsp;&nbsp;Female</span>
                    </div>
                )}
            </div>
            <button className='Button' onClick={Edit ? CloseEdit : EditProfile}>{Edit ? 'Close' : 'Edit'}</button>
        </div>
    </div>
  );
}

export default ProfileDetails;