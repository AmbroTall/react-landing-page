import React from 'react'
import './Hero.css'
import pic from '../../assets/wallpaper2.jpg'
const Hero = () => {
    return (
        <div className='header' id='home'>
            <div className='first-part'>
                <h1 className='gradient-header'>This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi.</h1>
                <p>This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi and currently am hoping for an Entry jobThis Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi and currently am hoping for an Entry job</p>
                <button type='button' onClick={()=> alert('Hello there. Greetings from I Ambrose')}>Greetings</button>
            </div>
            <div className='header-pic'>
                <img src={pic} alt='wallpaper'/>
            </div>
        </div>
    )
}

export default Hero
