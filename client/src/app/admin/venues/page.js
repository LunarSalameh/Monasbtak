
import TopSection from "@/app/components/planners/topSection/page";
import Sidebar from "@/app/components/plannerSidebar/page";
import {React} from "react";

export default function Venues () {
    return (
        <>
            <div className="flex">
            <Sidebar/>
            <div className="flex flex-col" style={{width:'90%', marginLeft:'auto'}}>
                <TopSection />
            </div>
        </div>
        </>
    )
}