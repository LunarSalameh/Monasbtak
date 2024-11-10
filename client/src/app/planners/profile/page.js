
import TopSection from "@/app/components/planners/topSection/page";
import Sidebar from "@/app/components/sidebar/page";
import {React} from "react";

export default function Profile () {
    return (
        <>
            <div className="flex">
            <Sidebar/>
            <div className="flex flex-col mx-auto w-full">
                <TopSection />
                profile
            </div>
        </div>
        </>
    )
}