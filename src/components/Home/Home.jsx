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
           <div> I'm a Devloper/ Trainer/ Artist</div>
        </div>
        <div>
            <img src={profile} alt="profilepic" className='profile'/>
        </div>
    </div>
  )
}

export default Home