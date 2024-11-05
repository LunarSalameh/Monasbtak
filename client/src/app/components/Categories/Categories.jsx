import { Link } from "react-router-dom";
import stl from "../components/Categories.module.css";
import weddingImg from "../assets/wedding.png";
import graduationImg from "../assets/grad.png";
import kidsImg from "../assets/pregnant-woman-standing-by-window-looking-photo.jpg";
import birthdayImg from "../assets/birthday.png";
import formalImg from "../assets/formal.png";
import otherImg from "../assets/other.png";

const categories = [
  { id: 1, name: "Wedding", image: weddingImg },
  { id: 2, name: "Graduation", image: graduationImg },
  { id: 3, name: "maternity", image: kidsImg },
  { id: 4, name: "Bithday", image: birthdayImg },
  { id: 5, name: "Formal event", image: formalImg },
  { id: 6, name: "Customized", image: otherImg },
];

const Categories = () => {
  return (
    <div id="categories" className={`container ${stl.wrapper}`}>
      <h2>Categories</h2>
      <div className={stl.Container}>
        {categories.map((category) => (
          <Link
            key={category.id}
            className={stl.categoryCard}
            to={`/category/${category.id}`}
          >
            <div className={stl.cardHeader}>
              <img
                src={category.image}
                alt={category.name}
                className={stl.categoryImage}
              />
            </div>

            <div className={stl.cardBody}>
              <h3 className={stl.categoryName}>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Categories;
