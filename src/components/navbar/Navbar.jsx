import React,{useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './Navbar.css'



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='navbar'>
            <h1 className='logo'>Ambro</h1>
            <div className='nav-links'>
                <p><a href='#home'>Home</a></p>
                <p><a href='#what'>What is?</a></p>
                <p><a href='#information'>Information</a></p>
                <p><a href='#about'>About</a></p>
                <p><a href='#blog'>Blog</a></p>
                <p><a href='#footer'>Links</a></p>
            </div>
            <div className='nav-link'>
                <a href='#home'>Sign In</a>
                <a href='#home'>Sign Up</a>
            </div>
            <div className='navbar-menu'>
                {
                    toggle ? 
                    <RiCloseLine color='#fff' size={30} onClick={()=> setToggle(false)} />:
                    <RiMenu3Line color='#fff' size={30} onClick={()=> setToggle(true)} />
                }
                {
                    toggle && (
                        
                        <div className='side-links'>
                            <p><a href='#home'>Home</a></p>
                            <p><a href='#what'>What is?</a></p>
                            <p><a href='#information'>Information</a></p>
                            <p><a href='#about'>About</a></p>
                            <p><a href='#blog'>Blog</a></p>
                            <p><a href='#footer'>Links</a></p>
                        </div>
                        
                    )
                }
            </div>

        </div>
    )
}

export default Navbar
