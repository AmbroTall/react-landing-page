import React from 'react'
import './Extending.css'
const Extending = ({header_text, text}) => {
    return (
        <div className='extender'>
            <div className='extender-header'>
                <div className='line'></div>
                <h3>{header_text}</h3> 
            </div>
            <div className='extender-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Extending
