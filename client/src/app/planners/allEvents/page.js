
import TopSection from "../../components/planners/topSection/page";
import Sidebar from "../../components/sidebar/page";
import {React} from "react";
import stl from './EventsTable.module.css'
export default function AllEvents () {

    
const EventsTable = [
    {
      id: 1,
      customerName: "omar",
      venue: "talabay",
      package: "A",
      location: "Amman",
      details: "venuevenuevenuevenuevenuevenue",
      status: "pending",
      
    },
    {
      id: 2,
      customerName: "omar",
      venue: "talabay",
      package: "A",
      location: "Amman",
      details: "venuevenuevenuevenuevenuevenue",
      status: "pending",
    },
    {
      id: 3,
      customerName: "omar",
      venue: "talabay",
      package: "A",
      location: "Amman",
      details: "venuevenuevenuevenuevenuevenue",
      status: "pending",
    },
    {
      id: 4,
      customerName: "omar",
      venue: "talabay",
      package: "A",
      location: "Amman",
      details: "venuevenuevenuevenuevenuevenue",
      status: "pending",
    },
    {
      id: 5,
      customerName: "omar",
      venue: "talabay",
      package: "A",
      location: "Amman",
      details: "venuevenuevenuevenuevenuevenue",
      status: "pending",
    },
    {
      id: 6,
      customerName: "omar",
      venue: "talabay",
      package: "A",
      location: "Amman",
      details: "venuevenuevenuevenuevenuevenue",
      status: "pending",
    },
  ];

  
    return (
        <>
            <div className="flex flex-col">
            <Sidebar/>

            <div className="flex flex-col justify-end items-center" style={{width:'90%', marginLeft:'auto'}}>
            <TopSection />

                <div className={stl.warpper}>
                
                 {/* Heading */}
                 <div className="font-bold text-3xl h-fit  pb-5">
                    <h1 className="flex flex-col flex-wrap">Alll Events</h1>
                    <hr />
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Venue Name</th>
                        <th>Package</th>
                        <th>Location</th>
                        <th>Details</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {EventsTable.map((event,index) => (
                        <tr key={EventsTable.id}>
                        <td>{event.customerName}</td>
                        <td>{event.venue}</td>
                        <td>{event.package}</td>
                        <td>{event.location}</td>
                        <td>{event.details}</td>
                        <td >
                            <div className="p-2 text-white rounded-full bg-green-700 ">{event.status}</div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </>
    )
}

