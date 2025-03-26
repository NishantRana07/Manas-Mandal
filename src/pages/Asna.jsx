import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Asna = () => {
  const { id } = useParams();
  const [pose, setPose] = useState(null);

  useEffect(() => {
    const fetchPose = async () => {
      try {
        const res = await fetch("/Asnas.json");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        const index = Number(id) - 1;
        if (index >= 0 && index < data.length) {
          setPose(data[index]);
        } else {
          setPose(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPose();
  }, [id]);

  if (!pose)
    return (
      <p className="text-center mt-16 text-lg font-semibold animate-pulse">
        Loading...
      </p>
    );

  return (
    <div className="mt-16 flex justify-center">
      {/* Card Container */}
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden transform  p-6">
        {/* Asana Name */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          {pose.name}
        </h1>

        {/* Image */}
        <div className="w-full flex justify-center my-6">
          <img
            src={pose.image}
            alt={pose.name}
            className="w-72 h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg text-center leading-relaxed px-4">
          {pose.description}
        </p>

        {/* Steps */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 underline decoration-blue-400">
            Steps:
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {pose.steps.map((step, index) => (
              <li key={index} className="pl-2">
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Techniques */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 underline decoration-green-400">
            Techniques:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {pose.techniques.map((technique, index) => (
              <li key={index} className="pl-2">
                {technique}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Asna;
