import React from 'react'
import Cards from './components/cards.jsx'
import assets from './assets/assets.jsx'
import image3 from '../public/images/profile_image.jpg'
export default function App() {
  return (
    <div>
        <Cards username = 'Sadanand Jha' image = {assets.image2}/>
        <Cards username= 'Kunal' image = '../public/images/profile_image.jpg'/>
    </div>
  )
}