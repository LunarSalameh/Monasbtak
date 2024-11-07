"use client";

import React from 'react';
import ReactDatePicker from './ReactDatePicker';
import NumberBox from './box';
import PackageDetails from './PackageDetails';
//import './App.css';

function onePackageBooking() {
    return (
        <div className="App">
            <PackageDetails />

            <ReactDatePicker />
            
             <NumberBox/> 

        </div>
    );
}

export default onePackageBooking;
