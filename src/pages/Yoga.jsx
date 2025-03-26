import {React,useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import YogaIMG from '../assets/Yoga (2).jpg';

const Yoga = () => {
    const [yogaData, setYogaData] = useState([]);  // Store fetched data


    async function fetchyoga(){
        try{
        const response = await fetch('Yoga.json');
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setYogaData(data);
        }
        catch(error){
            console.error('Error fetching yoga data:', error);
        }
    }
    useEffect(() => {
        fetchyoga();
    }, []);
  return (
    <>
      <div className="mt-16 pt-8 pb-8 text-center min-h-screen text-black">
        <h1 className="text-4xl font-bold mb-4">Yoga</h1>
        <p className="text-lg font-medium">
          Yoga is so important in our life. It helps us to maintain our physical and mental health.
        </p>

        <p className="text-lg bg-blue-600 mt-4 p-2 font-medium text-white">
          Here are some Yoga Asansas for mental and physical well being
        </p>


        {/* Cards */}

        <div className='flex gap-16 flex-wrap  scroll-smooth mt-4 p-8 ml-4'>
            

                {yogaData.map((yg,index)=>(
                    <div className="bg-red-200 relative h-68 w-58 flex-none rounded-sm overflow-hidden hover:border-red-400 border-2 hover:-translate-y-2 transition duration-500 ease-in-out" key={index}>
                    <img src={YogaIMG} alt="Yoga Image" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                        <h3 className="text-white text-lg font-bold mb-2">{yg.name}</h3>
                        <p className="text-white text-sm">{yg.description}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default Yoga;