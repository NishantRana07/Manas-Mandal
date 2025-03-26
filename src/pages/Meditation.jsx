import {useState,React,useEffect} from 'react'
import { Link } from 'react-router-dom';
import MeditationIMG from '../assets/Meditation.jpg';

const Meditation = () => {
  const [medData,setMedData] = useState([]);
  useEffect(() => {
    fetchmed();
  }, []);
  async function fetchmed()
  {
    try{
      const response = await fetch('/public/meditation.json');
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setMedData(data);
    } 
    catch(error){
      console.error('Error fetching meditation data:', error);
    }
  }

  return (
    <>
    
    <div className="mt-16 pt-8 pb-8 text-center min-h-screen text-black">
        <h1 className="text-4xl font-bold mb-4">Meditation</h1>
        <p className="text-lg font-medium">
          Meditation is so important in our life. It helps us to maintain our mental health.
        </p>

        <p className="text-lg bg-blue-600 mt-4 p-2 font-medium text-white">
          Here are some Meditation techniques for mental well-being
        </p>

        {/* Cards */}
        <div className="flex gap-16 flex-wrap scroll-smooth p-8 justify-around">
          {medData.map((md, index) => (
            <Link to={`/meditation/${md.id}`} className="flex-none" key={index}>
              <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition duration-500 ease-in-out">
                <img src={MeditationIMG} alt="Meditation Image" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white text-lg font-bold mb-2">{md.name}</h3>
                  <p className="text-white text-sm">{md.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </>
  )
}

export default Meditation