import {React} from "react";
import Sidebar from '@/app/components/adminSidebar/page'
import TopSection from "@/app/components/Admin/adminTopSection/page";

export default function page () {
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