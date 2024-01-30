import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from '../../redux/slices/userData';

const About = () => {
  const { name } = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("sanket");

  const changeName = () => {
    dispatch(updateUserData(inputData))
  }

  return (
    <div>About {name}

      <div>
        <input
          placeholder='Enter Name'
          onChange={(e) => {
            console.log(e)
            setInputData(e.target.value)
          }}
          value={inputData} />
      </div>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default About