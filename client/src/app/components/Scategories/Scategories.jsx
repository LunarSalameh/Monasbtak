import stl from "../components/Scategories.module.css";
import luxury from "../assets/luxury.png";
import midlevel from "../assets/mid-level.png";
import onBudget from "../assets/on budgete.png";

const Subcategories = [
  { id: 1, name: "Luxury", image: luxury },
  { id: 2, name: "Mid level", image: midlevel },
  { id: 3, name: "On Budget", image: onBudget },
];

const Scategories = () => {
  return (
    <div className={stl.container}>
      <h2>Sub Categories</h2>
      <div className={stl.cardsWrapper}>
        {Subcategories.map((Scategory) => (
          <div key={Scategory.id} className={stl.sCategoryCard}>
            <img
              src={Scategory.image}
              alt={Scategory.name}
              className={stl.sCategoryImage}
            />
            <h3 className={stl.sCategoryName}>{Scategory.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scategories;
