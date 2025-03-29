import { useState, useRef, useEffect } from "react";
import muzic from "../assets/Morning-Routine-Lofi-Study-Music(chosic.com).mp3";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from '../assets/manas.png'

const Nav = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Try playing the audio when the component mounts
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Autoplay blocked", error));
    }
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((error) => console.log("Playback failed", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="bg-gray-800 p-2 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center flex-row">
        <Link to={`/`} className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
          <p className="text-2xl font-bold font-mono text-white">Manas Mandal</p>
        </Link>
        <div className="flex space-x-4">
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">
              Task Manager
            </div>
          </Link>
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">
              Personal Diary
            </div>
          </Link>
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">
              About Us
            </div>
          </Link>
          <Link to="">
            <div className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">
              Help
            </div>
          </Link>

          {/* Audio element with autoplay on load */}
          <audio ref={audioRef} src={muzic} preload="auto"></audio>

          <div className="toggleContainer">
            <input type="checkbox" id="checkboxInput" />
            <label htmlFor="checkboxInput" className="toggleSwitch">
              <div className="speaker" onClick={playMusic}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
                  <path
                    d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
                    style={{ stroke: "#fff", strokeWidth: 5, strokeLinejoin: "round", fill: "#fff" }}
                  ></path>
                  <path
                    d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
                    style={{ fill: "none", stroke: "#fff", strokeWidth: 5, strokeLinecap: "round" }}
                  ></path>
                </svg>
              </div>
              <div className="mute-speaker">
                <svg version="1.0" viewBox="0 0 75 75" stroke="#fff" strokeWidth="5">
                  <path d="m39,14-17,15H6V48H22l17,15z" fill="#fff" strokeLinejoin="round"></path>
                  <path d="m49,26 20,24m0-24-20,24" fill="#fff" strokeLinecap="round"></path>
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
