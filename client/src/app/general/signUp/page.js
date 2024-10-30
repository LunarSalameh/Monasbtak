export default function SignUp() {
    return (
      <div className="min-h-screen w-3/4 p-8 pb-20 mx-auto">
        <div className="bg-gray-100 my-20 grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl shadow-gray-500">
           
            <div className="flex flex-col gap-6 w-full px-8 py-10 md:p-8 justify-center">
                <div className="text-center">
                    <div className="text-[#4C1B41] font-bold text-3xl">MONASBTAK</div>
                    <div className="text-lg my-2">All Your Planners In ONE PLACE!</div>
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="name" className="my-3 font-bold">Username</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Enter your Name" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="Email" className="my-3 font-bold">Email / Phone Number</label>
                    <input 
                      type="email" 
                      id="Email" 
                      placeholder="Enter email" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="my-2 font-bold">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      placeholder="Enter Password" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="retype-password" className="my-2 font-bold">Re-type Password</label>
                    <input 
                      type="password" 
                      id="retype-password" 
                      placeholder="Re-type Password" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="PhoneNumber" className="my-2 font-bold">Phone Number</label>
                    <input 
                      type="number" 
                      id="PhoneNumber" 
                      placeholder="Phone Number" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                 <div className="flex flex-col gap-2 mt-4">
                    <div className="font-bold">Account Type:</div>

                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="userType" value="Customer" className="text-[#4c1b41]"/> Customer</label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="userType" value="Other" className="text-[#4c1b41]"/> Other (e.g., planner, venue, or vendor)</label>

                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <button className="bg-[#4C1B41] px-10 py-3 mt-4 rounded-full text-center text-white w-full md:w-auto">Sign Up</button>
                    <div className="font-bold mt-2">Already Registered? <a href={'/general/signIn'} className="text-[#4C1B41]">Sign In</a></div>
                </div>
                
            </div>

            <div className="flex justify-center items-center rounded-2xl max-md:hidden">
                <figure className="w-full h-full">
                    <img 
                      src='/Monasbtak-EN.png' 
                      alt="Monasbtak Logo" 
                      className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </div>
      </div>
    );
}
