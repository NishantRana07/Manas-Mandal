import {React,useRef} from 'react'
import { FaArrowCircleLeft,FaArrowCircleRight  } from "react-icons/fa";
const Entertainment = () => {
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

        async function fetchData()
        {
            const res=await fetch('../')
        }
        
    return (
        <>
        <div className='flex gap-4 overflow-x-auto scroll-smooth mt-4 z-0 relative'>

            <button onClick={scrollLeft} className=" mt-auto mb-auto text-white bg-transparent bg-blur absolute z-10 top-1/2 left-5">
            <FaArrowCircleLeft className='p-2 h-8 w-8  rounded-full bg-gray-900'/>
            </button>

                <div ref={scrollRef} className='flex gap-4 overflow-x-auto  scroll-smooth scrollbar-hidden pt-8 pb-8'>
                    {/* Card*/}
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition  duration-500 ease-in-out"> 
                    </div>
                </div>

            <button onClick={scrollRight} className="mt-auto mb-auto text-white bg-transparent bg-blur absolute z-10 top-1/2 right-5">
            <FaArrowCircleRight className='p-2 h-8 w-8  rounded-full bg-gray-900'/>
            </button>
        </div>
        </>
    )
}

export default Entertainment;