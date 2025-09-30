import {React, useRef} from 'react'
import IMG from '../assets/Nishant-removebg-preview.png'
import icon from '../assets/group_add.png'
import { FaArrowCircleLeft,FaArrowCircleRight  } from "react-icons/fa";

const Threapists = () => {
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
    {/* Threapist Section*/}
    <div className='flex gap-4 overflow-x-auto scroll-smooth mt-4 z-0 relative'>
        <button onClick={scrollLeft} className=" mt-auto mb-auto text-white bg-transparent bg-blur absolute z-10 top-1/2 left-5">

        <FaArrowCircleLeft className='p-2 h-8 w-8  rounded-full bg-gray-900'/>

        </button>
        <div ref={scrollRef} className='flex gap-4 overflow-x-auto  scroll-smooth scrollbar-hidden pt-8 pb-8'>
        {/* Therapist Card */}
        <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-in-out"></div>
            {/* Details & Button Section */}
            <div className="absolute bottom-0 left-0 w-full bg-red-200 bg-opacity-80 flex justify-between items-center gap-2 p-2">
                {/* Details */}
                <div className="text-black text-[10px] p-1 text-start font-semibold">
                <p>Name: Nishant</p>
                <p>Description: Description of therapists</p>
                </div>

                {/* Button */}
                <button className="text-[10px] bg-blue-600 h-12 w-36 text-white rounded flex items-center gap-1 px-2 py-1">
                <img src={icon} className="h-4 w-4" alt="icon" />
                <p>Connect</p>
                </button>

            </div>
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image z-10" />

        </div>

        {/* Therapist Card */}
        <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out "> 
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-in-out"></div>
            {/* Details & Button Section */}
            <div className="absolute bottom-0 left-0 w-full bg-red-200 bg-opacity-80 flex justify-between items-center gap-2 p-2">
                {/* Details */}
                <div className="text-black text-[10px] p-1 text-start font-semibold">
                <p>Name: Nishant</p>
                <p>Description: Description of therapists</p>
                </div>

                {/* Button */}
                <button className="text-[10px] bg-blue-600  w-36 text-white rounded flex items-center gap-1 px-2 py-1">
                <img src={icon} className="h-4 w-4" alt="icon" />
                <p>Connect</p>
                </button>

            </div>
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image z-10" />

        </div>


        {/* Therapist Card */}
        <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-in-out"></div>
            {/* Details & Button Section */}
            <div className="absolute bottom-0 left-0 w-full bg-red-200 bg-opacity-80 flex justify-between items-center gap-2 p-2">
                {/* Details */}
                <div className="text-black text-[10px] p-1 text-start font-semibold">
                <p>Name: Nishant</p>
                <p>Description: I am a licensed therapist specializing in cognitive-behavioral therapy (CBT), mindfulness-based practices, and stress management.</p>
                </div>

                {/* Button */}
                <button className="text-[10px] bg-blue-600  w-36 text-white rounded flex items-center gap-1 px-2 py-1">
                <img src={icon} className="h-4 w-4" alt="icon" />
                <p>Connect</p>
                </button>

            </div>
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image z-10" />

        </div>

        {/* Therapist Card */}
        <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-in-out"></div>
            {/* Details & Button Section */}
            <div className="absolute bottom-0 left-0 w-full bg-red-200 bg-opacity-80 flex justify-between items-center gap-2 p-2">
                {/* Details */}
                <div className="text-black text-[10px] p-1 text-start font-semibold">
                <p>Name: Nishant</p>
                <p>Description: Nishant is not good at talking to ladiz</p>
                </div>

                {/* Button */}
                <button className="text-[10px] bg-blue-600  w-36 text-white rounded flex items-center gap-1 px-2 py-1">
                <img src={icon} className="h-4 w-4" alt="icon" />
                <p>Connect</p>
                </button>

            </div>
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image z-10" />

        </div>


        {/* Therapist Card */}
        <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-in-out"></div>
            {/* Details & Button Section */}
            <div className="absolute bottom-0 left-0 w-full bg-red-200 bg-opacity-80 flex justify-between items-center gap-2 p-2">
                {/* Details */}
                <div className="text-black text-[10px] p-1 text-start font-semibold">
                <p>Name: Nishant</p>
                <p>Description: Nishant is not good at talking to ladiz</p>
                </div>

                {/* Button */}
                <button className="text-[10px] bg-blue-600  w-36 text-white rounded flex items-center gap-1 px-2 py-1">
                <img src={icon} className="h-4 w-4" alt="icon" />
                <p>Connect</p>
                </button>

            </div>
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image z-10" />

        </div>

        {/* Therapist Card */}
        <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm hover:backdrop-blur-none transition duration-500 ease-in-out"></div>
            {/* Details & Button Section */}
            <div className="absolute bottom-0 left-0 w-full bg-red-200 bg-opacity-80 flex justify-between items-center gap-2 p-2">
                {/* Details */}
                <div className="text-black text-[10px] p-1 text-start font-semibold">
                <p>Name: Nishant</p>
                <p>Description: Nishant is not good at talking to ladiz</p>
                </div>

                {/* Button */}
                <button className="text-[10px] bg-blue-600  w-36 text-white rounded flex items-center gap-1 px-2 py-1">
                <img src={icon} className="h-4 w-4" alt="icon" />
                <p>Connect</p>
                </button>

            </div>
            <img src={IMG} className="h-full w-full object-cover" alt="therapist image z-10" />

        </div>
        </div>
        <button onClick={scrollRight} className=" mt-auto mb-auto text-white bg-transparent bg-blur absolute z-10 top-1/2 right-5">

        <FaArrowCircleRight className='p-2 h-8 w-8  rounded-full bg-gray-900'/>

        </button>
        
    </div>

    </>
  )
}


export default Threapists
