export default function SignIn() {
    return (
      <div className="min-h-screen w-3/4 p-8 pb-20 mx-auto">
        <div className="bg-gray-100 my-20 grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl shadow-gray-500">
            <div className="flex justify-center items-center p-8 md:p-0">
                <figure className="h-full w-full">
                    <img src='/Monasbtak-EN.png' alt="Monasbtak Logo" className="rounded-2xl w-full object-cover h-full max-md:w-auto   "/>
                </figure>
            </div>
            <div className="flex flex-col gap-6 w-full px-8 py-10 md:p-8 justify-center">
                <div className="text-center">
                    <div className="text-[#4C1B41] font-bold text-3xl">MONASBTAK</div>
                    <div className="text-lg my-2">All Your Planners In ONE PLACE!</div>
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="Email" className="my-3 font-bold">Enter Your Email / Phone Number</label>
                    <input 
                      type="email" 
                      id="Email" 
                      placeholder="Enter email" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="my-2 font-bold">Enter Your Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      placeholder="Enter Password" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                <div className="flex flex-col items-center gap-4">
                    <button className="bg-[#4C1B41] px-10 py-3 mt-4 rounded-full text-center text-white w-full md:w-auto">Sign In</button>
                    <div className="font-bold mt-2">Don't have an Account? <a href={'/general/signUp'} className="text-[#4C1B41]">Sign Up</a></div>
                </div>
                
            </div>
        </div>
      </div>
    );
}
