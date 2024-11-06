import stl from "./EventsStatus.module.css";
import hourglass from "../../assets/hourglass.png";
import walkingMan from "../../assets/man-walking.png";
import Accepted from "../../assets/check.png";
import finished from "../../assets/calendar-icon.png";
const EventsStatus = () => {
  return (
    <div className={stl.statusContainer}>
      <div className={stl.status}>
        <img src={hourglass} alt="" />
        <span>Pendding Events</span>
        <h3>5432</h3>
      </div>
      <div className={stl.status}>
        <img src={walkingMan} alt="" />
        <span>In Progress Events</span>
        <h3>276</h3>
      </div>
      <div className={stl.status}>
        <img src={Accepted} alt="" />
        <span>Accepted Events</span>
        <h3>189</h3>
      </div>
      <div className={stl.status}>
        <img src={finished} alt="" />
        <span>Finished Events</span>
        <h3>189</h3>
      </div>
    </div>
  );
};
export default EventsStatus;
