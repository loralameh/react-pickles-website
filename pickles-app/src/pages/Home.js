import React from 'react'
import Products from '../components/Products'
const Home = () => {
  return (
    <>
      <div className='hero-cont'>
        <img
          className='hero-image'
          src='https://images.pexels.com/photos/8879387/pexels-photo-8879387.jpeg?cs=srgb&dl=pexels-ron-lach-8879387.jpg&fm=jpg'
          alt='header'
        />
      </div>
      <Products />
    </>
  )
}

export default Home
