import React from 'react'
import SiteTitle from '../SiteTitle/SiteTitle'
import './Home.scss'

// Images ------------------------------

import homeOval from '../../assets/images/oval.png'
import homeMac from '../../assets/images/macbook.png'
import phoneIcon from '../../assets/icons/phone-icon.svg'
import homeResponMac from '../../assets/images/homeResponImg.png'

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <div className="home__phone-box">
              <button className='home__phone'>
                <img src={phoneIcon} alt="home phone" />
              </button>
            </div>

            <div className="home__desc-box">
              <h2 className='home__title'>
                <span>SERIUS Academy bu -</span><br /> web saytlar yaratish...
              </h2>

              <button className='home__btn btn'>Buyurtma berish</button>
            </div>

            <div className="home__img-box">
              <img className='home__img' src={homeMac} alt="home macbook" />
              <img className='home__responimg' src={homeResponMac} alt="home macbook" />
            </div>
          </div>
        </div>

        <div className="home__oval-img">
          <img src={homeOval} alt="home round" />
        </div>
      </div>
      <SiteTitle title={"SERIUS ACADEMY"} />
    </>
  )
}

export default Home
