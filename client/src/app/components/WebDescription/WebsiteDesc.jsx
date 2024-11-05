import stl from "./WebsiteDesc.module.css";
import celender from "../assets/CELENDER.png";
import photographer from "../assets/photographer.png";

const DescriptionCard = ({ img, description }) => {
  return (
    <div className={stl.card}>
      <div>
        <img src={img} alt="" />
      </div>
      <p>{description}</p>
    </div>
  );
};

const WebsiteDesc = () => {
  return (
    <div className={stl.wrapper}>
      <h2>What Do We Offer !</h2>

      <DescriptionCard
        img={celender}
        description=" At Monasbtak, we bring together Jordan’s best event planners, venues, decorators, and photographers, all in one easy-to-use platform. Our goal is to make every step of planning your event smooth, inspiring, and tailored to your vision.
                    Whether you’re organizing a wedding, a corporate event, "
      />

      <DescriptionCard
        img={photographer}
        description=" You can easily browse portfolios, read reviews, and make informed decisions all in one place, ensuring you receive top-quality services for a memorable event. To make things even easier, Monasbtak offers both customizable packages and tailored quotes to meet your unique requirements and budget, giving you the flexibility and convenience you need to find the best fit for your event"
      />
    </div>
  );
};
export default WebsiteDesc;
