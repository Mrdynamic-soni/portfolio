import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'
import { mylogo } from '../../assests/ImageConstants'

const NavigationBar = () => {
    return (
        <div className='navBar'>
            <div className='leftSection'>
                Saurabh Soni
                {/* <img src ={mylogo} alt='logo'/> */}
            </div>
            <div className='rightSection'>
                <Link>About</Link>
                <Link>Career</Link>
                <Link>Work</Link>
                <Link>Hire me</Link>
            </div>
        </div>
    )
}

export default NavigationBar