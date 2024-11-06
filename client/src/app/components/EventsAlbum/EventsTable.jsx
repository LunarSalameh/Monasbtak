import stl from "./EventsTable.module.css";

const EventsTable = [
  {
    id: 1,
    customerName: "omar",
    venue: "talabay",
    package: "A",
    location: "Amman",
    details: "venuevenuevenuevenuevenuevenue",
    status: "pendding",
  },
  {
    id: 2,
    customerName: "omar",
    venue: "talabay",
    package: "A",
    location: "Amman",
    details: "venuevenuevenuevenuevenuevenue",
    status: "pendding",
  },
  {
    id: 3,
    customerName: "omar",
    venue: "talabay",
    package: "A",
    location: "Amman",
    details: "venuevenuevenuevenuevenuevenue",
    status: "pendding",
  },
  {
    id: 4,
    customerName: "omar",
    venue: "talabay",
    package: "A",
    location: "Amman",
    details: "venuevenuevenuevenuevenuevenue",
    status: "pendding",
  },
  {
    id: 5,
    customerName: "omar",
    venue: "talabay",
    package: "A",
    location: "Amman",
    details: "venuevenuevenuevenuevenuevenue",
    status: "pendding",
  },
  {
    id: 6,
    customerName: "omar",
    venue: "talabay",
    package: "A",
    location: "Amman",
    details: "venuevenuevenuevenuevenuevenue",
    status: "pendding",
  },
];
const AllEvents = () => {
  return (
    <div className={stl.warpper}>
      <h2>All Events</h2>

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
          {EventsTable.map((event) => (
            <tr key={EventsTable.id}>
              <td>{event.customerName}</td>
              <td>{event.venue}</td>
              <td>{event.package}</td>
              <td>{event.location}</td>
              <td>{event.details}</td>
              <td className={stl.eventStat}>{event.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllEvents;
