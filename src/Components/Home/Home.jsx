import React,{useEffect} from 'react'
import './home.css'
import './home.scss'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagramSquare } from "react-icons/fa";
import { IoList } from "react-icons/io5";
import { TbApps } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";


import Aos from 'aos'
import 'aos/dist/aos.css'




const Home = () => {
// Let create a React hook to add a scroll animation...
useEffect(()=>{
    Aos.init({duration:2000})
},[])




  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop typeof='video/mp4'></video>

      <div className='homeContent container'>
        <div className='textDiv'>

          <spam data-aos ="fade-up" className='smallText'>
            Our Packages
          </spam>

          <h1 data-aos ="fade-up" className='homeTitle'>
            Search Your Holiday 
          </h1>

        </div>
{/* Enter the Destination */}
        <div data-aos ="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination:</label>
            <div className='input flex'>
              <input type='text' placeholder='Enter name here...'></input>
              <GrLocation className="icon"/>
            </div>
          </div>
{/* Enter the date */}
          <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>
{/* Select the price */}
          <div className="PriceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className='total'> Rs. 10000</h3>
            </div>
                <div className="input flex">
                  <input type="range" max="1000" min="1000"/>
                </div> 
          </div>

          <div className='searchOption flex'>
          <HiFilter className="icon"/>
          <spam>More Filter</spam>
          </div>
        </div>


        <div data-aos ="fade-up" className='homeFooterIcons flex'>
          <div className='rightIcons'>
          <FiFacebook className='icon'/>
          <FaInstagramSquare className='icon'/>
          <FaTripadvisor className='icon'/>
          </div>
          <div className='leftIcons'>
          <IoList className="icon" />
          <TbApps className="icon" />
          </div>


        </div>
      </div>
    </section>
  )
}

export default Home