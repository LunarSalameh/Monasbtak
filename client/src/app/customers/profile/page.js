import React from 'react';
import ProfileDetails from '../../components/Customers/profileDetails/page';
import Events from '../../components/Customers/profileEvents/page';
import Favorite from '../../components/Customers/profileFavorite/page';
import './page.css';

function Profile () {
  return (
    <div className='Page-Container'>
        <ProfileDetails />
        <Events />
        <Favorite />
    </div>
  );
};

export default Profile;