import React, { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Entertainment = () => {
  const scrollRef = useRef(null);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Scroll Left Function
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll Right Function
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Fetch Data from Enter.json
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/Enter.json'); // Ensure Enter.json is in the public folder
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setEntertainmentData(data);
      } catch (err) {
        console.error('Error fetching entertainment data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-16 text-center text-blue-600 text-lg font-bold">
        Loading Entertainment Options...
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-4 overflow-x-auto scroll-smooth mt-4 z-0 relative">
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="mt-auto mb-auto text-white bg-transparent bg-blur absolute z-10 top-1/2 left-5"
        >
          <FaArrowCircleLeft className="p-2 h-8 w-8 rounded-full bg-gray-900" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hidden pt-8 pb-8"
        >
          {entertainmentData.map((item, index) => (
            <Link to={item.link}>
            <div key={index} className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition duration-500 ease-in-out">
            
              <img src={item.bgImg} alt={item.name} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-white text-sm ">
                  {item.description}
                </p>
              </div>
            
          </div>  
          </Link>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={scrollRight}
          className="mt-auto mb-auto text-white bg-transparent bg-blur absolute z-10 top-1/2 right-5"
        >
          <FaArrowCircleRight className="p-2 h-8 w-8 rounded-full bg-gray-900" />
        </button>
      </div>
    </>
  );
};

export default Entertainment;