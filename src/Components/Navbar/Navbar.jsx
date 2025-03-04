import React,{useState} from 'react'
import './navbar.css'
import './navbar.scss'

import {MdOutlineTravelExplore} from  'react-icons/md'
import {AiFillCloseCircle } from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const[active,setactive]=useState('navBar')

// Function is toggle navBar.
  const showNav = ()=>{
    setactive('navBar activeNavbar')
  }

  // Function is remove navBar.
  const removeNavbar = ()=>{
    setactive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon" />Travel.</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navlists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className="btn">
            <a href='#'>Book now</a>
            </button>
          </ul>
          <div onClick={removeNavbar}
          className='closeNavBar'> 
          <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav}
         className="toggleNavbar">
        <TbGridDots className="icon"/>
        </div>


      </header>
    </section>
  )
}

export default Navbar