
import TopSection from "@/app/components/planners/topSection/page";
import Sidebar from "@/app/components/sidebar/page";
import {React} from "react";
import Album from'@/app/components/planners/eventAlbum/page'

export default function EventAlbum () {
    return (
        <>
            <div className="flex">
            <Sidebar/>
            <div className="flex flex-col" style={{width:'90%', marginLeft:'auto'}}>
                <TopSection />
                <Album/>
            </div>
        </div>
        </>
    )
}