import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div className='navBar'>
            <div className='leftSection'>
                Saurabh Soni
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