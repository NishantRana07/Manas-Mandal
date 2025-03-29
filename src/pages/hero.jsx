import React from 'react'
import right from "../assets/Right.png"
import {Link} from 'react-router-dom';
import './hero.css'
const hero = () => {
  return (
    <>
    <div className='full'>
        <div className="left">
            <p className="upper">
                 Feeling Stressed<br/>
                 We've Got You Covered
            </p>
            <p className="lower">
                "Your Mental Wellness <br/> Just one click Away!"
            </p>

            <div className="">
                <Link to={`/quiz`}>
                <button className='p-2 bg-black text-white'>DASS21</button>
                </Link>
                <button className='p-2 bg-black text-white'>DASS42</button>
            </div>
        </div>
        <div className='Right'>
            <img src={right} className="imgRight"/>
        </div>
        <div className="right">

        </div>
    </div>
    </>
  )
}

export default hero