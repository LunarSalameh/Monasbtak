
export default function Aboutus() {

    const ourTeam = [
      {
        name: 'Lunar Salameh', 
        Photo: '/Lunar.jpeg'
      },
      {
        name: 'Nada Abudari', 
        Photo: '/nada.jpg'
      },
      {
        name: 'Omar Hammad', 
        Photo: '/omar.png'
      },
      {
        name: 'Abdelrahman', 
        Photo: '/abd.png'
      },
    ]

    return (
      <div className="min-h-screen p-8 pb-20 max-w-5xl mx-auto  ">
        <div className="flex flex-col gap-10">
          <div className="font-bold text-[#4C1B41] text-4xl">WHAT DO WE OFFER</div>
          <div className="flex lg:flex-row gap-12 justify-center items-center max-sm:flex-col">
            <div className="w-3/4 text-lg">At <b>Monasbtak</b>, we bring together Jordan’s best event planners, venues, decorators, and photographers, all in one easy-to-use platform. Our goal is to make every step of planning your event smooth, inspiring, and tailored to your vision.
            <div> Whether you’re organizing a wedding, a corporate event, or a celebration, we offer a curated selection of professionals who can bring your vision to life with creativity and expertise.</div> </div>
            <figure className="max-sm:w-2/3 md:w-1/2">
              <img 
                  src="/WhatDoWeOffer1.png"
                  alt="Calender"
                  className="rounded-xl"
              ></img>
            </figure>
          </div>
          <div className="flex lg:flex-row  justify-centet gap-12 items-center max-sm:flex-col-reverse ">
          <figure className="max-sm:w-2/3 md:w-1/2">
              <img 
                  src="/WhatDoWeOffer2.png"
                  alt="party"
                  className="rounded-xl"
              ></img>
            </figure>
            <div className="w-3/4 text-lg">You can easily browse portfolios, read reviews, and make informed decisions all in one place, ensuring you receive top-quality services for a memorable event. To make things even easier, <b>Monasbtak</b> offers both customizable packages and tailored quotes to meet your unique requirements and budget, giving you the flexibility and convenience you need to find the best fit for your event.</div>
          </div>
          <div className="font-bold text-[#4C1B41] text-4xl pt-10">OUR TEAM</div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-md:flex-col mx-auto text-lg">
            {
              ourTeam.map((member,index)=>(
                <div key={index} className="flex flex-col  font-bold p-6 text-center gap-5 ">
                  <img 
                      src={member.Photo} 
                      alt={member.name}
                      className="rounded-full w-40 h-40"
                  />
                  <div className='text-[#4C1B41]'>{member.name}</div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    );
  }
  