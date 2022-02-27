import React from 'react'
import ReviewForm from '../components/ReviewForm'
import { FiPhone, FiMail } from 'react-icons/fi'
const Contact = () => {
  return (
    <>
      <form className='form'>
        <div>
          <label className='form-control '>
            <FiPhone />
            03/123456
          </label>
        </div>
        <div>
          <label className='form-control '>
            <FiMail />
            info@pickley.com
          </label>
        </div>
      </form>
      <div className='container'>
        <h2>Want to tell us something?</h2>
        <h3>We love to hear from you</h3>
      </div>
      <ReviewForm />
    </>
  )
}

export default Contact
