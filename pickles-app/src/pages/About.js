import React from 'react'
import Staff from '../components/Staff'
const About = () => {
  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2>
            Who is <em> ..Pickley.. </em>?
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          repudiandae architecto qui adipisci in officiis, aperiam sequi atque
          perferendis eos, autem maiores nisi saepe quisquam hic odio
          consectetur nobis veritatis quasi explicabo obcaecati doloremque?
          Placeat ratione hic aspernatur error blanditiis?
        </p>
      </section>
      <section className='section'>
        <div className='title'>
          <h2>Meet our staff</h2>
        </div>
        <Staff />
      </section>
    </>
  )
}

export default About
