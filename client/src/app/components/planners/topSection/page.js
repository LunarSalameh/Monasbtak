import { CgSandClock } from "react-icons/cg";
import { FaPersonWalking, FaCheck, FaCalendarCheck } from "react-icons/fa6";


export default function TopSection () {
    return (
        <>
            <section className="flex flex-col gap-8 mx-5 my-2 p-8 items-start font-bold text-xl items-center">
                {/** Welcome section */}
                <div className="flex justify-between gap-5 w-full">
                    <div>Hello Planner #1👋🏼,</div>
                    <input type="search" className="rounded-xl font-normal max-md:hidden text-sm pl-3" placeholder="Search"/>
                </div>

                {/**Status Section */}
                <div className="bg-white rounded-xl  grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-3 p-5">

                    {/**Pending Events */}
                    <div className="flex gap-3 m-2">
                        <div className="bg-[#FFF7E0] rounded-full p-5"><CgSandClock  color="#D9B34D"/></div>
                        <div className="flex flex-col gap-1 justify-center">
                            <p className="text-gray-400 font-light text-xs">Pending Events</p>
                            <p className="font-bold text-lg">1'589</p>
                        </div>
                    </div>

                    {/**In Progress Events */}
                    <div className="flex gap-3 m-2">
                        <div className="bg-[#FFF7E0] rounded-full p-5"><FaPersonWalking color="#D9B34D"/></div>
                        <div className="flex flex-col gap-1 justify-center">
                            <p className="text-gray-400 font-light text-xs">In Progress Events</p>
                            <p className="font-bold text-lg">189</p>
                        </div>
                    </div>

                    {/**Accepted Events */}
                    <div className="flex gap-3 m-2">
                        <div className="bg-[#FFF7E0] rounded-full p-5"><FaCheck color="#D9B34D"/></div>
                        <div className="flex flex-col gap-1 justify-center">
                            <p className="text-gray-400 font-light text-xs">Accepted Events</p>
                            <p className="font-bold text-lg">1825</p>
                        </div>
                    </div>

                    {/**Finished Events */}
                    <div className="flex gap-3 m-2">
                        <div className="bg-[#FFF7E0] rounded-full p-5"><FaCalendarCheck color="#D9B34D"/></div>
                        <div className="flex flex-col gap-1 justify-center">
                            <p className="text-gray-400 font-light text-xs">Finished Events</p>
                            <p className="font-bold text-lg">2645</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
 }