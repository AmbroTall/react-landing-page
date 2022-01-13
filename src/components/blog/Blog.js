import React from 'react'
import './Blog.css'
import ExtendTwo from '../../elements/ExtendTwo'
import am from '../../assets/ambro1.jpg'
import amb from '../../assets/ambro2.jpg'
import ambr from '../../assets/ambro3.jpg'
import ambro from '../../assets/ambro4.jpg'
import ambros from '../../assets/ambro2.jpg'

const Blog = () => {
    return (
        <div className='blog' id='blog'>
            <h1>Blog</h1>
            <div className='blog-contents'>
                <div className='first-elem'>
                    <div className='card-main'>
                        <img src={ambros} alt='' />
                        <div className='card-items-main'>
                            <div>
                                <h5>This is the latest news</h5>
                                <p>Small brief of the Latest...</p>
                            </div>
                            <div className='down-date-main'>
                                <p><bold>Posted on: </bold>12/01/2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='second-row'>
                    <ExtendTwo image={am} />
                    <ExtendTwo image={amb} />
                    <ExtendTwo image={ambr} />
                    <ExtendTwo image={ambro}/>
                </div>
            </div>
            
        </div>
    )
}

export default Blog
