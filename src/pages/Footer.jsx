import React from 'react'
import './footer.css';
import insta from '../assets/instagram.png';
import whats from '../assets/whatsapp.png';
import disc from '../assets/discord.png';
import twitter from '../assets/twitter.png';
import reddit from '../assets/reddit.png'


const Footer = () => {
  return (
    <>
    <div className='w-full flex justify-center items-center gap-8 '>
    
      <div className="left  h-full w-1/2 justify-center items-center">
      
      
      <div className="h-full w-full flex justify-center items-center flex-col">
      <p className="text-2xl text-center p-2">Socials</p>
        <ul className=' h-20 flex gap-4 bg-sky-400 h-min p-1 rounded-xl'>
          <li>
            <a href='#'>
              <img src={insta} className="h-8 w-8"></img>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={disc} className="h-8 w-8"></img>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={reddit} className="h-8 w-8"></img>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={whats} className="h-8 w-8"></img>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={twitter} className="h-8 w-8 hover:scale-4"></img>
            </a>
          </li>
          <li>
            <a href=''>
              <img src=''></img>
            </a>
          </li>
        </ul>
      </div>
      </div>
      <div className="right mt-8 pb-4 h-full w-1/2 gap-4 flex flex-col items-center justify-center ">
      <p className="text-2xl ">Contact us</p>
      
      <form className="form">
        <input placeholder="Enter your name" className="input" type="text"/>
        <input placeholder="Enter your email" className="input" type="text"/>
          <input placeholder="Enter your query" className="input" type="text"/>
        
        <button>Submit</button>
      </form>
      </div>  
    </div>
    </>
  )
}

export default Footer;