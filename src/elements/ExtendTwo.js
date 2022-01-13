import React from 'react'
import './Extend.css'

const ExtendTwo = ({ image }) => {
    return (
        <>
            <div className='card-blog'>
                <div className='img-card-blog'>
                    <img src={image} alt='blog-img'/>
                </div>
                <div className='blog-items'>
                    <h5>This is the latest news</h5>
                    <p>Small brief of the Latest...</p>
                    <p className='last'>Posted on: 12/01/2022</p>
                </div>
            </div>
        </>
    )
}

export default ExtendTwo
