
import { MdCategory } from 'react-icons/md'
import './page.css'

export default function CategoriesSection () {

    const categories = [
        { name: "Wedding", image: '/wedding-category.jpg' },
        { name: "Graduation", image: '/grad-category.jpg' },
        { name: "maternity", image: '/maternity.jpg' },
        { name: "Bithday", image: '/birthday.jpg' },
        { name: "Formal event", image: '/formal.jpg' },
        { name: "Customized", image: '/customized.png' },
    ]

    return(
        <div className="page-container">
        <div className='categories-container'>
            <div className='header'>
                <span className='large-font-size bold-font'>Categories Section</span>
            </div>
            <hr className='line'/>

            <div className='grid grid-cols-3 gap-5'>
                {
                    categories.map((category,index)=> (
                        <div key={index} className='flex flex-col border-gray-200 border-2 rounded-xl p-2 hover:bg-gray-100 hover:shadow-lg hover:border-[#d9b34d] transition ease-out duration-300  hover:scale-90'>
                           {/* image */}
                           <figure className=' relative'>
                                {/* remove */}
                                <div className='bg-[#5a5a5a8e] bottom-2 left-2 w-fit px-3 rounded-lg text-white py-1 absolute '>
                                    x
                                </div>
                                {/* image */}
                                <img src={category.image} className='rounded-lg h-40 w-64 object-cover'/>
                           </figure>

                           {/* Title with button */}
                           <div>
                                {/* title */}
                                <div>
                                    <p>{category.name}</p>
                                </div>

                                {/* button */}
                                <div>

                                </div>

                           </div>

                        </div>
                    ))
                }
                
            </div>

        </div>
    </div>
    )
}