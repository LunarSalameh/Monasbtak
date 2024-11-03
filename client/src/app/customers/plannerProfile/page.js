import React from 'react'
import './page.css'
import PlannerProfileDetails from '../../components/Customers/plannerProfileDetails/page';
import PlannerProfilePackages from '../../components/Customers/plannerProfileP0ackages/page';
import PlannerAlbum from '../../components/Customers/plannerProfileAlbum/page';
import PlannerFeedback from '../../components/Customers/plannerProfileFeedback/page';

function PlannerProfile() {
  return (
    <div className='Page-Container'>
        <PlannerProfileDetails />
        <PlannerProfilePackages />
        <PlannerAlbum />  
        <PlannerFeedback />
    </div>
  )
}

export default PlannerProfile