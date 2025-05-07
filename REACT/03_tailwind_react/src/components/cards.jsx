import React from 'react'
import assets from '../assets/assets.jsx'
const cards = ({username, image}) => {
  return (
    <>
      <div className="container" style={{
        display:"flex",
        justifyContent: 'center',
        alignItems:'center',
        height: "100vh"
      }}> 
        <div className="container2">
          <div className="image">
            <img src={image} alt="" />  
          </div>  
          <div className="name" style={{display: 'flex', justifyContent: 'center'}}>
            {username}
          </div>
        </div>  
      </div>      
    </>
  )
}

export default cards
