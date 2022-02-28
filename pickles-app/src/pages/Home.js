import React from 'react'
import Products from '../components/Products'
const Home = () => {
  return (
    <div>
      <div className='section'>
        <div className='section-center'>
          <img
            src='https://images.pexels.com/photos/8879387/pexels-photo-8879387.jpeg?cs=srgb&dl=pexels-ron-lach-8879387.jpg&fm=jpg'
            alt='header'
          />
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Home
