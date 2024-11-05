import React from 'react'
import './page.css'
import Navbar from '../../components/navbar/page'
import Footer from '../../components/footer/page'
import EditProfile from '../../components/Customers/editProfileDetails/page'

function page() {
  return (
    <>
      <Navbar />
      <div className='Page-Container'>
          <EditProfile />
      </div>
      <Footer />
    </>
  )
}

export default page