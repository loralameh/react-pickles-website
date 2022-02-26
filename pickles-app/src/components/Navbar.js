import React from 'react'
import logo from '../logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { useRef, useEffect } from 'react'

const Navbar = () => {
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const { isNavbarShown, ToggleNavbar } = useGlobalContext()
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (isNavbarShown) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [isNavbarShown])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={ToggleNavbar}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
              <button className='link-btn'>Home</button>
            </li>
            <li>
              <button className='link-btn'>All Products</button>
            </li>
            <li>
              <button className='link-btn'>About Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
