import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
const {name} = useSelector(state=>state.userData);

  return (
    <div>About { name}</div>
  )
}

export default About