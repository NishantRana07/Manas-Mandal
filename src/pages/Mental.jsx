import {React,useRef} from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Yoga from './Yoga';
import Meditation from './Meditation';
import Excercise from './Excercise';
import yg from '../assets/Yoga (2).jpg'
import md from '../assets/Meditation.jpg'
import ex from '../assets/Excercises.jpg'
const Mental = () => {
    const scrollRef=useRef(null);
    const scrollLeft = () => {
        if(scrollRef.current){
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
    };
    const scrollRight = () => {
        if(scrollRef.current)
        {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };
  
  return (
    <>
        <div className='flex gap-4 overflow-x-auto scroll-smooth mt-4'>
                <button onClick={scrollLeft} className="p-2 bg-gray-800 h-8 w-8 mt-auto mb-auto text-white rounded-full">
                    <FaArrowCircleLeft/>
                </button>
                <div ref={scrollRef} className='flex gap-4 overflow-x-auto  scroll-smooth scrollbar-hidden pt-8 pb-8'>

                    {/* Yoga Link */}
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition duration-500 ease-in-out">
                    <img src={yg} alt="Yoga Image" className="object-cover w-full h-full" />
                    {/* Text Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                        <h3 className="text-white text-lg font-bold mb-2">Yoga</h3>
                        <p className="text-white text-sm">
                          Discover the benefits of yoga for mental and physical well-being.
                        </p>
                      </div>
                    </div>  

                    {/* Meditation Link */}
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
                    <img src={md} alt="Meditation Image" className='object-cover w-full h-full' />
                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                        <h3 className="text-white text-lg font-bold mb-2">Meditation</h3>
                        <p className="text-white text-sm">
                          Discover the benefits of Meditation for mental and physical well-being.
                        </p>
                      </div>
                    </div>  
                    

                    {/* Excercise Link */}
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
                    <img src={ex} alt="Excercise Image" className='object-cover w-full h-full'/>
                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                        <h3 className="text-white text-lg font-bold mb-2">Excercises</h3>
                        <p className="text-white text-sm">
                          Discover the benefits of Excercises for mental and physical well-being.
                        </p>
                      </div>
                    </div>  
                    

                    {/* Excercise Link */}
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
                    </div>

                    {/* Excercise Link */}
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
                    </div>

                    {/* Excercise Link */}
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
                    </div>

                </div>
                <button onClick={scrollRight} className="p-2 bg-gray-800 h-8 w-8 mt-auto mb-auto text-white rounded-full">
                    <FaArrowCircleRight />
                </button>
        </div>

    </>
  )
}

export default Mental