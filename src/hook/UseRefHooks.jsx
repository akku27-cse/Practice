import React, { useContext } from 'react'
import { userContext } from './../useContext/userContext';

function UseRefHooks() {
    const user=useContext(userContext);
  return (
    
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default UseRefHooks
