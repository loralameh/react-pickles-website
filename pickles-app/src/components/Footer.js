import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='foot'>
        <div className='foot-center'>
          <p> (c) All rights reserved</p>
        </div>
        <div className='foot-end'>
          <ul className='social-icons'>
            <li>
              <a href='https://www.facebook.com'>
                {' '}
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com'>
                {' '}
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com'>
                {' '}
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
