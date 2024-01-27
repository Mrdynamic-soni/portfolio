import React from 'react'
import { useSelector } from 'react-redux';

const Work = () => {
  const {name} = useSelector(state=>state.userData);
  return (<div>
    working on this part {name}
  </div>)
}

export default Work