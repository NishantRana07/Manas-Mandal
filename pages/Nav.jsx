  import React from 'react';
  


  const Nav = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const playMusic = () => {
      setIsPlaying(!isPlaying);
      console.log(isPlaying ? "Stopping music" : "Playing music");
    };

    return (
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
          <p className='text-2xl font-bold font-mono text-white'>Manas Mandal</p>
          <div className="flex space-x-4">
            <div to="/task-manager" className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">Task Manager</div>
            <div to="/about" className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">About Us</div>
            <div to="/help" className="text-black font-inter font-semibold hover:bg-gray-900 hover:text-white bg-gray-200 p-1 pl-2 pr-2 rounded transition duration-550 ease-in-out">Help</div>
            <button 
              onClick={playMusic} 
              className={`text-white flex items-center p-1 pl-2 pr-2 rounded-xl ${isPlaying ? 'bg-green-500' : 'bg-blue-500'} hover:bg-gray-300`}
            >
              <i className="fas fa-music"></i>
              {isPlaying ? 'Stop Music' : 'Play Music'}
            </button>
          </div>
        </div>
      </nav>
    );
  }
  export default Nav;