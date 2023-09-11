import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    
  return (
    <div>
     <h2>Transaction success</h2>
       <Link to="/plans">Go to your plans </Link> 
    </div>
  )
}

export default Success
