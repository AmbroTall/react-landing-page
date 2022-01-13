import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='foot-elem'>
                <h1>Am done with my react landing page. Stay tuned for more</h1>
                <div className='foot-links'>
                    <div className='foot-logo'>
                        <h1>Ambro</h1>
                        <p>&copy; Ambrose Mbithi</p>
                    </div>
                    <div className='link-one'>
                        <h3>Links Important</h3>
                        <p>Link 1</p>
                        <p>Link 2</p>
                        <p>Link 3</p>
                        <p>Link 4</p>
                    </div>
                    <div className='link-two'>
                        <h3>Links Important</h3>
                        <p>Link 1</p>
                        <p>Link 2</p>
                        <p>Link 3</p>
                        <p>Link 4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
