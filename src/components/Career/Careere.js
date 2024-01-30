import React from 'react'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../../redux/slices/userData'

const Careere = () => {
  const dispatch = useDispatch()
  const chnageName = () => {
    dispatch(updateUserData("Sanket"))
  }
  return (
    <div>Careere
      <button onClick={chnageName}>Change Name</button>
    </div>
  )
}

export default Careere