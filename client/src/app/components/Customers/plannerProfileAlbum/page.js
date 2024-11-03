"use client";
import React, { useState } from 'react';
import './page.css'
import { IoClose } from "react-icons/io5";

function PlannerAlbum() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className='Planner-album-container'>
      <div className='showall'> 
        <span className='XL-font-size font-color bold-font'>Event Album</span>
        <span className='small-font-size bold-font Show-Button' onClick={handleShowModal}>Show All</span>
      </div>
        <hr className='line'/>

        <div className='Album-container'>
            <div className='Album-img-container'>
              <img src="/wedding.jpg" className='Album-img' />
            </div>

            <div className='Album-img-container'>
              <img src="/wedding2.jpg" className='Album-img' />
            </div>

            <div className='Album-img-container'>
              <img src="/wedding3.jpg" className='Album-img' />
            </div>

            <div className='Album-img-container'>
              <img src="/wedding4.jpg" className='Album-img' />
            </div>

            <div className='Album-img-container'>
              <img src="/wedding5.jpg" className='Album-img' />
            </div>
        </div>

{showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleCloseModal}><IoClose /></button>
            <span className='XL-font-size font-color bold-font'>Event Album</span>
            <hr className='line'/>
            <div className="modal-content">
              <div className='Modal-Album-container'>
                <div className='Modal-Album-img-container'>
                  <img src="/wedding.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding2.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding3.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding4.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding5.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding2.jpg" className='Album-img' />
                </div>
                <div className='Modal-Album-img-container'>
                  <img src="/wedding3.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding4.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding5.jpg" className='Album-img' />
                </div>

                <div className='Modal-Album-img-container'>
                  <img src="/wedding2.jpg" className='Album-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlannerAlbum