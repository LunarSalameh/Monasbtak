import React from 'react';
import Navbar from '../../components/navbar/page';
import Footer from '../../components/footer/page';
import ProfileDetails from '../../components/Customers/profileDetails/page';
import Events from '../../components/Customers/profileEvents/page';
import Favorite from '../../components/Customers/profileFavorite/page';
import './page.css';

function Profile () {
  return (
    <div>
        <Navbar />
        <div className='Page-Container'>
          <ProfileDetails />
          <Events />
          <Favorite />
        </div>
        <Footer />
    </div>
  );
};

export default Profile;