import React,{useEffect} from 'react'
import './footer.css'
import './footer.scss'
import video2 from '../../Assets/video (2).mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/m4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos ="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className='inputDiv flex'>
            <input data-aos ="fade-up" type='text' placeholder='Enter the mail address'/>
            <button data-aos ="fade-up" className='btn flex' type='submit'>Send
            <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard'>
          <div className='footerIntro'>
            <a href='#' className='logo flex'>
              <MdTravelExplore  className='icon'/>Travel.
            </a>
          </div>
          <div data-aos ="fade-up" className='footerParagraph'>
          Thank you for exploring our content. We hope you found the information informative and engaging. For more insights and updates, feel free to visit us again. If you have any questions or feedback, please don't hesitate to reach out. Your thoughts are invaluable to us!
          </div>
          <div data-aos ="fade-up" className='footerSocials flex'>
          <AiOutlineTwitter className='icon' />
          <AiFillYoutube  className='icon'/>
          <AiFillInstagram  className='icon'/>
          <FaTripadvisor className='icon'/>

          </div>
          <div  className='footerLink grid'>
          {/* Group 1 */}
            <div data-aos ="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Services
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Insurance
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Agency
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Tourism
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Payment
              </li>
            </div>
            {/* Group 2 */}
            <div data-aos ="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                OUR PARTNERS
              </span>
              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Bookings
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Rentcars
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              HotelWorld
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Trivago
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              TripAdvise
              </li>
            </div>

            {/* Group 3 */}
            <div data-aos ="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className='footerList'>
              <FiChevronRight className='icon'/>
              UttraKhand
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Kerla
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Manipur
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Bhopal
              </li>

              <li className='footerList'>
              <FiChevronRight className='icon'/>
              Bihar
              </li>

            </div>


          </div>
          <div className="footerDiv flex">
              <small>BEST TRAVEL WESITE THEME</small>
              <small>COPYRIGHT RESERVE-NISHANT UPADHYAY</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer