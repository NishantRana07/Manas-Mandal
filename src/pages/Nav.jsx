import { useState, useRef } from "react";
import muzic from "../assets/Morning-Routine-Lofi-Study-Music(chosic.com).mp3";
import {Link} from 'react-router-dom';
const Nav = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.log("Playback failed", error)); // Handles autoplay issues
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        <Link to={`/`}><p className="text-2xl font-bold font-mono text-white">Manas Mandal</p></Link>
        <div className="flex space-x-4">
          <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">
            Task Manager
          </div>
          <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">
            About Us
          </div>
          <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">
            Help
          </div>

          {/* Audio tag outside button */}
          <audio ref={audioRef} src={muzic}></audio>

          {/* Music button */}
          <button
            onClick={playMusic}
            className={`text-white flex items-center p-1 pl-2 pr-2 rounded-xl ${
              isPlaying ? "bg-green-500" : "bg-blue-500"
            } hover:bg-gray-300`}
          >
            <i className="fas fa-music"></i>
            {isPlaying ? "Stop Music" : "Play Music"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
