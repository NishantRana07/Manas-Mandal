import React, { useRef, useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chatbots = () => {
  const scrollRef = useRef(null);
  const [chatbotData, setChatbotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll Left Function
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  // Scroll Right Function
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Fetch Data from Chatbot.json
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`chatbot.json`); // Corrected path
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setChatbotData(data.chatbots);
      } catch (err) {
        console.error("Error fetching chatbot data:", err);
        setError("Failed to load chatbot data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-16 text-center text-blue-600 text-lg font-bold">
        Loading Chatbot Options...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 text-center text-red-600 text-lg font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="flex gap-4 overflow-x-auto scroll-smooth mt-4 z-0 relative">
      {/* Scroll Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute z-10 top-1/2 left-5 text-white bg-transparent"
      >
        <FaArrowCircleLeft className="p-2 h-8 w-8 rounded-full bg-gray-900" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hidden pt-8 pb-8"
      >
        {chatbotData.map((item, index) => (
          <Link to={item.link} key={index} className="block">
            <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition duration-500 ease-in-out">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={scrollRight}
        className="absolute z-10 top-1/2 right-5 text-white bg-transparent"
      >
        <FaArrowCircleRight className="p-2 h-8 w-8 rounded-full bg-gray-900" />
      </button>
    </div>
  );
};

export default Chatbots;
