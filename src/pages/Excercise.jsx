import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExcIMG from "../assets/Excercises.jpg";

const Excercise = () => {
  const [excData, setExcData] = useState([]); // Ensure excData is always an array
  const [error, setError] = useState(null); // Track errors
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchExc = async () => {
      try {
        const res = await fetch("/Excercise.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        if (Array.isArray(data.exercises)) {
          setExcData(data.exercises); // Access the exercises array
        } else {
          throw new Error("Fetched data does not contain an exercises array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Ensure loading is false after fetch attempt
      }
    };

    fetchExc();
  }, []);

  if (loading) {
    return (
      <div className="mt-16 text-center text-blue-600 text-lg font-bold">
        Loading exercises...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 text-center text-red-600 text-lg font-bold">
        Error: {error}
      </div>
    );
  }

  if (excData.length === 0) {
    return (
      <div className="mt-16 text-center text-gray-600 text-lg font-bold">
        No exercises available. Please check back later.
      </div>
    );
  }

  return (
    <div className="mt-16 pt-8 pb-8 text-center min-h-screen bg-gradient-to-b from-green-100 to-white text-black">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold mb-6 text-green-800">Exercises</h1>
      <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto">
        Exercises are essential for maintaining both physical and mental health.
      </p>

      <p className="text-lg bg-green-600 mt-6 p-3 font-medium text-white rounded-lg inline-block shadow-md">
        Explore some effective exercises for your well-being
      </p>

      {/* Exercise Cards */}
      <div className="flex gap-8 flex-wrap p-8 justify-center">
        {excData.map(({ id, name, description }) => (
          <Link to={`/exercise/${id}`} className="flex-none" key={id}>
            <div className="bg-white shadow-lg relative h-80 w-64 flex-none rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <img
                src={ExcIMG}
                alt={name}
                className="h-48 w-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
                <p className="text-white text-sm">{description}</p>
              </div>
              {/* Exercise Name & Description */}
              <div className="p-4 text-center">
                <h3 className="text-gray-800 text-lg font-bold">{name}</h3>
                <p className="text-gray-600 text-sm truncate">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Excercise;
