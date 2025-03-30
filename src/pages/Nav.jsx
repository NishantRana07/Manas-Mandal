import { useState, useRef } from "react";
import muzic from "../assets/Morning-Routine-Lofi-Study-Music(chosic.com).mp3";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../assets/manas.png";

const Nav = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Track if music is playing
  const audioRef = useRef(null); // Reference to the audio element

  const playMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the music
      } else {
        audioRef.current
          .play()
          .catch((error) => console.log("Playback failed:", error)); // Play the music
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <div className="flex flex-wrap justify-between items-center space-y-2 md:space-y-0">
        {/* Logo Section */}
        <Link to={`/`} className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <p className="text-xl font-bold font-mono text-white">Manas Mandal</p>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center space-x-4">
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 px-3 py-1 rounded transition duration-300 ease-in-out">
              Task Manager
            </div>
          </Link>
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 px-3 py-1 rounded transition duration-300 ease-in-out">
              Personal Diary
            </div>
          </Link>
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 px-3 py-1 rounded transition duration-300 ease-in-out">
              About Us
            </div>
          </Link>
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 px-3 py-1 rounded transition duration-300 ease-in-out">
              Help
            </div>
          </Link>

          {/* Audio Element */}
          <audio ref={audioRef} src={muzic} preload="auto"></audio>

          {/* Music Toggle Button */}
          <div className="toggleContainer">
            <button
              onClick={playMusic}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 h-10 w-10 flex items-center justify-center"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
