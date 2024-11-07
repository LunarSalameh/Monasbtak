import React from 'react'
import './page.css'
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import WebsiteDesc from "../../components/WebDescription/WebsiteDesc";
import Navbar from '../../components/navbar/page';
import Footer from '../../components/footer/page';

function page() {
  return (
    <>
      <Navbar />
        <div className='Page-Container'>
            <Slider />
            <Categories />
            <WebsiteDesc />
        </div>
      <Footer />
    </>
  )
}

export default page