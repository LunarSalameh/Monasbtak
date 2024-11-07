import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calender.css';

function ReactDatePicker(){

    const [selectedDate, setSelectedDate] = useState(null);


    const handelDateChange = (date) => {
        setSelectedDate(date);
    };
const mindate = new Date("2024-02-11")
//const maxdate = new Date("2024-05-12")
    return(
        <div className="calender_design">

       <h3 className="event_day">Select your Event Day</h3>
       
        <DatePicker
        selected={selectedDate}
        onChange={handelDateChange}
        dateFormat="MM/dd/yyyy   hh:mm:aa"
        minDate={mindate}
        showTimeSelect
        timeIntervals={60} 
        timeFormat="hh:mm:aa"
        //maxDate={maxdate}
        />
        </div>
    )

}

export default ReactDatePicker;
