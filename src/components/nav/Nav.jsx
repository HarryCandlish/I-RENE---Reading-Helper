import React from 'react'
import './nav.css'

import {BsBookFill} from 'react-icons/bs'



const Nav = () => {
  return (
    <nav>
        <a href="#" ><BsBookFill className='nav-logo'/></a>
        <a href="#about"><p className='nav-titles'>About</p></a>
        <a href="#product"><p className='nav-titles'>Product</p></a>
        <a href="#testimonies"><p className='nav-titles'>Testimonies</p></a>
    </nav>
  )
}

export default Nav