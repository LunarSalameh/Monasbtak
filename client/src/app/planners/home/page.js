
import CurrentEvents from "@/app/components/planners/currentEvents/page";
import PendingOffers from "@/app/components/planners/pendingOffers/page";
import PreviousEvents from "@/app/components/planners/previousEvents/page";
import TopSection from "@/app/components/planners/topSection/page";
import Sidebar from "@/app/components/sidebar/page";
import {React} from "react";

export default function PlannerHome () {
    return (
        <>
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col" style={{width:'90%', marginLeft:'auto'}}>
                <TopSection />
                <PendingOffers/>
                {/* <CurrentEvents />
                <PreviousEvents /> */}
            </div>
        </div>
        </>
    );
}