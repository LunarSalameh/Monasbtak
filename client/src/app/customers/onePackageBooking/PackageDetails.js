import React from 'react';
import './PackageDetails.css';



const PackageDetails = () => {
  return (
    <div className="package-details-container">
      <div className='headline'>
        <h1 className="title large-font-size bold-font">Packages Details</h1>
        <span className='line'></span>
      </div>
      <div className="content">
        <img src='/wedding7.png' alt="Package" className="package-image" />
        <div className="details">
          <div className="planner-info">
            <img src='/planner.png' alt="Planner" className="planner-image" />
            <div className="planner-name">Planner Name</div>
            <div className="price">$99.9</div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices ornare augue non tristique. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla ultrices ornare augue non
            tristique. Nulla ultrices ornare augue non tristique.
          </p>
        </div>
      </div>
      <div className='headline'>
        <h1 className="title large-font-size bold-font">Booking Details</h1>
        <span className='line'></span>
      </div>
    </div>
  );
};

export default PackageDetails;
