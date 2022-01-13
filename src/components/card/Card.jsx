import React from 'react'
import './Card.css'
import Extending from '../../elements/Extending'

const Card = () => {
    return (
        <div className='card' id='what'>
            <div className='card-elements'>
                <div className='first-element'>
                    <Extending header_text="Why Ambro?" text="This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi. This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi" />
                </div>
                <div className='second-element'>
                    <h1>Am Born to be a developer. Check my other interfaces in my portfolio. Practice practice makes perfect. Constantly learning</h1>
                </div>
                <h2>More Information</h2>
                <div className='third-element'>
                    <Extending header_text="Why Ambro?" text="This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi. This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi" />
                    <Extending header_text="Why Ambro?" text="This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi. This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi" />
                    <Extending header_text="Why Ambro?" text="This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi. This Is A Landing Page For ShowCasing My Skills. Am a full stack developer based in Nairobi" />
                </div>
            </div>
        </div>
    )
}

export default Card
