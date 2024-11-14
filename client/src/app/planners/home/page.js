
import PendingOffers from "../../components/planners/pendingOffers/page";

import TopSection from "../../components/planners/topSection/page";
import Sidebar from "../../components/sidebar/page";
import {React} from "react";

export default function PlannerHome () {
    return (
        <>
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col" style={{width:'90%', marginLeft:'auto'}}>
                <TopSection />
                <PendingOffers/>

            </div>
        </div>
        </>
    );
}