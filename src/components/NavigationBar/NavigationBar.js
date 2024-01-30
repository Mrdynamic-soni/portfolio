import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'
import { mylogo } from '../../assests/ImageConstants'

const NavigationBar = () => {
    return (
        <div className='navBar'>
            <div className='leftSection'>
               <Link to="/" className='name'> <div >Saurabh Soni</div></Link>
               
            </div>
            <div className='rightSection'>
                <Link to="/about" className='link'>About</Link>
                <Link to="career" className='link'>Career</Link>
                <Link to="work" className='link'>Work</Link>
                <Link to="hire" className='link'>Hire me</Link>
            </div>
        </div>
    )
}

export default NavigationBar