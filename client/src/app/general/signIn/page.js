import Navbar from '../../components/navbar/page';
import Footer from '../../components/footer/page';

export default function SignIn() {
    return (
        <>
        <Navbar />
      <div className="p-10">
        <div className="w-[80%] m-auto bg-white  grid grid-cols-1  lg:grid-cols-2 rounded-2xl shadow-xl shadow-gray-500">
            <div className="hidden lg:block justify-center items-center p-8  relative ">
                    <img src='/Event1.jpg' alt="Monasbtak Logo" className="absolute inset-0  w-full  h-full object-cover rounded-l-2xl"/>
            </div>
            <div className="flex flex-col  gap-6 w-full px-8 py-10 md:p-8 justify-center ">
                <div className="text-center">
                    <img src="/Monasbtak-EN-logo.png" className=" w-full"/>
                    <div className="text-lg my-2">All Your Planners In ONE PLACE!</div>
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
                    <label htmlFor="password" className="my-2 font-bold">Enter Your Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      placeholder="Enter Password" 
                      className="px-5 py-2 rounded-full bg-white border-[#4c1b41] border-2"
                    />
                </div>

                <div className="flex flex-col items-center gap-4">
                    <button className="bg-[#4C1B41] px-10 py-3 mt-4 rounded-full text-center text-white w-full  ">Sign In</button>
                    <div className="font-bold mt-2">Don't have an Account? <a href={'/general/signUp'} className="text-[#4C1B41]">Sign Up</a></div>
                </div>
                
            </div>
        </div>
      </div>
      <Footer />
      </>
    );
}
