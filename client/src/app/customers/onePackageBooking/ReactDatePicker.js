import React, { useState } from "react";
import DatePicker from "react-datepicker";
import NumberBox from './box';
import "react-datepicker/dist/react-datepicker.css";
import './calender.css';

function ReactDatePicker(){

    const [selectedDate, setSelectedDate] = useState(null);


    const handelDateChange = (date) => {
        setSelectedDate(date);
    };
const mindate = new Date()
mindate.setDate(mindate.getDate() + 1)

const maxdate = new Date()
maxdate.setDate(maxdate.getDate() +365)
    return(
        <div className="cal-container">
        <div className="booking">
            <h3 className="event_day">Select your Event Day</h3>
       
            <DatePicker
                selected={selectedDate}
                onChange={handelDateChange}
                dateFormat="MM/dd/yyyy   hh:mm:aa"
                minDate={mindate}
                showTimeSelect
                timeIntervals={60} 
                timeFormat="hh:mm:aa"
                className="calender_design"
                placeholderText="Select date & Time"
                maxDate={maxdate}
            />

        </div>
            
            <NumberBox/>

        </div>
    )

}

export default ReactDatePicker;
