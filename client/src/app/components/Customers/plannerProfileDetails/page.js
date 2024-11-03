import React from 'react';
import './page.css';
import RatingStars from '../../starRating/page';

function ProfileDetails () {
  return (
    <div className='Box-Border'>
        <div className='Profile-Container'>
            <img src="/Planner1.jpg" className='Profile-Image' />
            <div className='Planner-Name'>
                <div className='Rating-container'>
                    <span className='bold-font large-font-size'>UserName</span>
                    <RatingStars rating={3} />
                </div>
                    <div className='Info-Details mid-font-size'  >
                        <span>Email:&nbsp;&nbsp;1234@gmail.com</span>
                        <span>Phone Number:&nbsp;&nbsp;1234567890</span>
                        <span>Age:&nbsp;&nbsp;23</span>
                        <span>Gender:&nbsp;&nbsp;Female</span>
                        <span>Discribtion:&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla ultrices ornare augue non tristique. Nunc feugiat ac felis ac mollis. 
                            Curabitur ante lacus, facilisis et velit eu, lobortis vestibulum tortor.</span>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileDetails;