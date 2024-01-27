import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'
import { mylogo } from '../../assests/ImageConstants'

const NavigationBar = () => {
    return (
        <div className='navBar'>
            <div className='leftSection'>
               <Link to="/"> Saurabh Soni</Link>
                {/* <img src ={mylogo} alt='logo'/> */}
            </div>
            <div className='rightSection'>
                <Link to="/about">About</Link>
                <Link to="career">Career</Link>
                <Link to="work">Work</Link>
                <Link to="hire">Hire me</Link>
            </div>
        </div>
    )
}

export default NavigationBar