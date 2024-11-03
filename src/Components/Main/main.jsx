import React,{useEffect} from 'react'
import './main.css'
import './main.scss'
// import the icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'


// import the images
import img from '../../Assets/taj.jpg'
import img2 from '../../Assets/image (7).jpg'
import img3 from '../../Assets/image (8).jpg'
import img4 from '../../Assets/imagee (1).jpg'
import img5 from '../../Assets/imagee (2).jpg'
import img6 from '../../Assets/imagee (3).jpg'
import img7 from '../../Assets/imagee (4).jpg'
import img8 from '../../Assets/ked.jpg'
import img9 from '../../Assets/kashi.jpg'
import img10 from '../../Assets/golden.jpg'
import img11 from '../../Assets/bodh.jpg'
import img12 from '../../Assets/Goa.jpg'




//let me paste array the named data
const Data = [
  {
    id:1,
    imgSrc : img,
    destTitle:'TAJ MAHAL',
    location:"Agra, UP, India",
    grade:'CULTURAL RELAX',
    fees:'Rs. 4000',
    description:'The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Completed in 1653, this UNESCO World Heritage Site is renowned for its exquisite architecture, intricate inlay work, and symmetrical gardens. Often considered a symbol of love, the Taj Mahal attracts millions of visitors each year and is celebrated as one of the New Seven Wonders of the World.'
  },

  {
    
      id:2,
     imgSrc:img2,
      destTitle:'FUN FOREST',
      location:'Munnar, TN, India',
      grade:'CULTURAL RELAX',
      fees:'Rs. 8500',
      description:'Munnar is actually located in the state of Kerala, not Tamil Nadu, though it’s close to the Tamil Nadu border. Nestled in the Western Ghats, Munnar is known for its lush green tea plantations, misty hills, and scenic valleys. This charming hill station, located about 1,600 meters above sea level, is a popular destination for its cool climate and breathtaking landscapes. Attractions include Eravikulam National Park, home to the endangered Nilgiri Tahr, as well as beautiful spots like Mattupetty Dam, Anamudi Peak, and the tea gardens that cover vast areas of the hills. Munnar is also famous for the Neelakurinji flowers, which bloom once every 12 years, painting the hillsides a vibrant blue.'
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'KANCHENJUNGA',
    location:'HIMALIYA, jamu, India',
    grade:'CULTURAL RELAX',
    fees:'Rs. 6000',
    description:'The Himalayas are a vast mountain range in Asia, spanning five countries and known for their towering peaks, including Mount Everest, the highest in the world. Formed by tectonic collisions, they continue to grow slightly each year. Besides their natural beauty and diverse wildlife, the Himalayas hold significant cultural and spiritual importance and impact regional climates by blocking cold Central Asian winds. They also serve as the source of major rivers like the Ganges and Indus, supporting millions across South Asia.'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'SHANKARACHARYA HILL',
    location:'KASHMIR, INDIA',
    grade:'CULTURAL RELAX',
    fees:'Rs. 9500',
    description:'Kashmir, known as "Paradise on Earth," is a stunning region in northern India, famous for its snow-capped mountains, beautiful valleys, and tranquil lakes like Dal Lake. Renowned for its rich cultural heritage, unique crafts like Pashmina shawls, and scenic spots such as Srinagar, Gulmarg, and Pahalgam, Kashmir attracts visitors worldwide with its natural beauty and cultural depth.'
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'DOBBABETTA TEA FACTORY',
    location:'OOTY,TN, India',
    grade:'CULTURAL RELAX',
    fees:'Rs. 7500',
    description :'Ooty, also known as Udhagamandalam, is a popular hill station in Tamil Nadu, India, located in the Nilgiri Hills. Known for its cool climate, lush tea plantations, and scenic landscapes, Ooty offers attractions like the Ooty Botanical Gardens, Ooty Lake, and Doddabetta Peak. Its charming colonial architecture, vibrant flower gardens, and the famous Nilgiri Mountain Railway make it a favorite getaway for nature lovers and tourists alike.'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'THAR DESERT',
    location:'Rajesthan, India',
    grade:'CULTURAL RELAX',
    fees:'Rs. 3500',
    description:'The Thar Desert, also known as the Great Indian Desert, is a vast arid region in northwestern India and eastern Pakistan. Covering approximately 200,000 square kilometers, it is characterized by sandy dunes, sparse vegetation, and extreme temperatures. The Thar is one of the most densely populated deserts in the world, with unique wildlife, rich cultural traditions, and vibrant cities like Jaisalmer and Bikaner. Camel safaris, traditional festivals, and historic forts make it a popular destination for travelers seeking a taste of desert life.'
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'PONDICHERRY',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'Rs. 5000',
    description :'Pondicherry, or Puducherry, is a charming coastal town in southern India known for its French colonial architecture, serene beaches, and vibrant culture. Once a French colony, it features cobblestone streets, colorful buildings, and a unique blend of French and Tamil influences. Key attractions include the Promenade Beach, Auroville, and Sri Aurobindo Ashram. With its relaxed atmosphere, scenic waterfront, and blend of cultures, Pondicherry offers a peaceful retreat and a taste of French heritage in India.'
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'KEDHARNATH TEMPLE',
    location:'UK, India',
    grade:'CULTURAL RELAX',
    fees:'Rs. 7000',
    description :'Kedarnath Temple is a revered Hindu shrine located in the Kedarnath region of Uttarakhand, India. Dedicated to Lord Shiva, it is one of the twelve Jyotirlingas and a significant pilgrimage site in the Char Dham Yatra. Perched at an altitude of 3,583 meters, the temple is famous for its ancient stone architecture and stunning views of the surrounding Himalayan peaks. The temple is accessible by a trek from Gaurikund and attracts thousands of devotees each year, especially during the months of May to October when it is open to pilgrims.'
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:'Kashi',
    location:'Vanarasi, UP, India',
    grade:'CULTURAL RELAX',
    fees:'Rs. 6000',
    description :'Kashi, also known as Varanasi or Banaras, is one of the oldest cities in the world, located on the banks of the Ganges River in the northern Indian state of Uttar Pradesh. It is a major spiritual and cultural center in India, considered sacred in Hinduism, Buddhism, and Jainism. Known as the "City of Light" or "City of Temples," Kashi is famed for its ghats (steps leading to the river), where people perform rituals, take holy baths, and conduct funeral rites. The cities vibrant culture, historical temples like Kashi Vishwanath, and timeless traditions make it a unique blend of spirituality and heritage.'
},
{
  id:10,
  imgSrc:img10,
  destTitle:'GOLDEN TEMPLE',
  location:'Amritsar, Punjab, India',
  grade:'CULTURAL RELAX',
  fees:'Rs. 4500',
  description :'The Golden Temple, also known as Harmandir Sahib, is a revered Sikh gurdwara located in Amritsar, Punjab, India. Known for its stunning architecture and gold-covered exteriors, it sits in the center of a sacred pool (Amrit Sarovar) and symbolizes equality, humility, and peace. The temple is open to people of all faiths and backgrounds, reflecting Sikh values of inclusivity and service. The Golden Temple complex also hosts the world’s largest free community kitchen, serving meals (langar) to thousands of visitors daily. With its spiritual ambiance and historical significance, it stands as a central place of worship and cultural heritage for Sikhs worldwide.'
},
{
  id:11,
  imgSrc:img11,
  destTitle:'BODH-GAYA',
  location:'gaya, Bihar, India',
  grade:'CULTURAL RELAX',
  fees:'Rs. 4000',
  description :'Bodh Gaya is a sacred Buddhist pilgrimage site located in the Indian state of Bihar. It is renowned as the place where Siddhartha Gautama, later known as the Buddha, attained enlightenment under the Bodhi Tree over 2,500 years ago. At the heart of Bodh Gaya is the Mahabodhi Temple, a UNESCO World Heritage Site, with its iconic spire and serene surroundings. Pilgrims and visitors from around the world come to meditate, pray, and reflect in this tranquil setting, making Bodh Gaya a significant center of peace, spirituality, and cultural heritage in Buddhism.'
},
{
  id:12,
  imgSrc:img12,
  destTitle:'GOA',
  location:'Goa, India',
  grade:'CULTURAL RELAX',
  fees:'Rs. 8000',
  description :'Goa is a vibrant coastal state in western India, known for its stunning beaches, lively nightlife, and rich blend of Indian and Portuguese heritage. A former Portuguese colony, Goa boasts charming colonial architecture, including whitewashed churches and colorful buildings, alongside bustling markets and spice plantations. The state is famous for its relaxed vibe, attracting tourists for sunbathing, water sports, and its unique culinary scene that combines Indian flavors with Portuguese influences. With its scenic landscapes, lush forests, and festive atmosphere, Goa is a popular destination for both relaxation and adventure, offering a laid-back yet culturally rich experience.'

},
]

const Main = () => {
// Let create a React hook to add a scroll animation...
useEffect(()=>{
  Aos.init({duration:2000})
},[])




  return (  
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos ="fade-right" className='title'>
          Most Visited Destinations.
        </h3>
      </div>
      <div className='secContent grid'>


      {/* So, Here I am going to use high order array method(map).
      To do that I will use a list of object in the array.
       I'm going to create an array named data from that
        I will .map() array to fetch each destionation at once.
         I hope this will make sence. */}


        {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) => {
          return(
            <div key={id}  data-aos ="fade-up" className='singleDestination'>
              {/* Here it will return single id from the map array */}

              <div className='imgDiv'>
                <img src={imgSrc} alt={destTitle}/>
              </div>
              <div className='cardInfo'>
                <h4 className='destTitle'>
                  {destTitle}
                </h4>
                <span className='containent flex'>
                <HiOutlineLocationMarker className='icon'/>
                <span className='name'>{location}</span>
                </span>

                <div className='fees flex'>
                  <div className='grade'>
                    <span>{grade}<small>+1</small></span>
                  </div> 
                  <div className='price'>
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className='desc'>
                  <p>{description}</p>
                </div>
                <botton className='btn flex'>DETAILS<HiOutlineClipboardCheck className='icons'/>
                </botton>
              </div>

            </div>
          )
        })
        }
  


      </div>


    </section>
  )
}

export default Main