import React from 'react'
import './Home.css'
import { profile } from '../../assests/ImageConstants'

const Home = () => {
  return (
    <div className='mainConatiner'>
      <div className='leftsection'>
        <div>
          Hi My name is <span className='name'>Saurabh Soni</span>
        </div>
        <div className='iamDiv'>
        <div> I'm a </div>
        <div className="carousel-container">
          <div className="text-carousel">
            <div className="text-item">Developer</div>
            <div className="text-item">Trainer</div>
            <div className="text-item">Mentor</div>
            <div className="text-item">Artist</div>
          </div>
        </div>
        </div>
      </div>
      <div>
        <img src={profile} alt="profilepic" className='profile' />
      </div>
    </div>
  )
}

export default Home