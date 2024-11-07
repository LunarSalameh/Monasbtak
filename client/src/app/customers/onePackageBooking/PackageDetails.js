import React from 'react';
import './PackageDetails.css';


const PackageDetails = () => {
  return (
    <div className="package-details-container">
      <h1 className="title">Packages Details</h1>
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
    </div>
  );
};

export default PackageDetails;
