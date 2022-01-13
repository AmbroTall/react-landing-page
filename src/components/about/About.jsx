import React from 'react'
import './About.css'
import pic from '../../assets/wallpaper4.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-info'>
                <div className='img'>
                    <img src={pic} alt='about' />
                </div>
                <div className='about-content'>
                    <h1>About Ambrose Tall</h1>
                    <p>This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi. This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi. This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi. This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi</p>
                </div>
            </div>
            
        </div>
    )
}

export default About
