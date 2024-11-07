import React from 'react';
import PackageCard from './PackageCard';
import './Packages.css';

const Packages = () => {
    const packagesData = [
        { title: "Package 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/wedding1.png" },
        { title: "Package 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/wedding2.png" },
        { title: "Package 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/wedding3.png" },
        { title: "Package 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/wedding4.png" },
        { title: "Package 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/wedding5.png" },
        { title: "Package 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/wedding6.png" },
       
    ];

    return (
        <div className="packages-container">
            <h1>Venue Name</h1>
            <hr className='line'/>
            <h2>Packages</h2>
            <div className="packages-grid">
                {packagesData.map((pkg, index) => (
                    <PackageCard
                        key={index}
                        title={pkg.title}
                        description={pkg.description}
                        image={pkg.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Packages;
