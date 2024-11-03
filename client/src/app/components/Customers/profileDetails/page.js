import React from 'react';
import './page.css';
import Link from 'next/link'

function ProfileDetails () {
  return (
    <div className='Box-Border'>
        <div className='Profile-Container'>
            <img src="/customer_image.jpg" className='Profile-Image' />
            <div className='Customer-Name'>
                <span className='bold-font large-font-size'>UserName</span>
                    <div className='Info-Details mid-font-size'  >
                        <span>Email:&nbsp;&nbsp;1234@gmail.com</span>
                        <span>Phone Number:&nbsp;&nbsp;1234567890</span>
                        <span>Age:&nbsp;&nbsp;23</span>
                        <span>Location:&nbsp;&nbsp;Amman</span>
                        <span>Gender:&nbsp;&nbsp;Female</span>
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