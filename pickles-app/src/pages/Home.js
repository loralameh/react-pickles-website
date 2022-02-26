import React from 'react'
import Products from '../components/Products'
const Home = () => {
  return (
    <div>
      <div className='section'>
        <div className='section-center'>
          <img
            src='https://images.pexels.com/photos/6611594/pexels-photo-6611594.jpeg?cs=srgb&dl=pexels-dale-jackson-6611594.jpg&fm=jpg'
            alt='header'
          />
        </div>
      </div>
      <Products />
      {/* slider for products */}
      {/* slider for reviews */}
      {/* form to add a review */}
    </div>
  )
}

export default Home
