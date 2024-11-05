import { useState } from "react";
import stl from "./Slider.module.css";
import slide1 from "../assets/slider11.jpg";
import slide2 from "../assets/slider22.jpg";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
const Slider = () => {
  const slides = [slide1, slide2];
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide === slides.length - 1) return;
    setCurrentSlide((pre) => pre + 1);
  };
  const prev = () => {
    if (currentSlide === 0) return;

    setCurrentSlide((pre) => pre - 1);
  };

  return (
    <div className={stl.slider}>
      <div className={stl.btns}>
        <img src={rightArrow} className={stl.prev} onClick={next} />
        <img src={leftArrow} className={stl.nxt} onClick={prev} />
      </div>
      <div className={"slide"}>
        <img src={slides[currentSlide]} alt="" className={stl.imgs} />
      </div>
    </div>
  );
};
export default Slider;
