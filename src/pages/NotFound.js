import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFound from '../images/404_Not_found.jpg'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='container mt-4'
    style={{marginLeft:'28%'}}
    >
    <img src= {notFound} alt="Not Found" />
    <div className="card-body">
      <button type='button' 
      className="btn btn-primary btn-rounded" 
      style={{marginLeft:'30%'}}
      onClick={()=>navigate("/home")}>Home</button>
    </div>
  </div>
  )
}

export default NotFound