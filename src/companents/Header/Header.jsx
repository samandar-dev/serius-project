import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
// Images ----------------------------

import logoWhite from '../../assets/images/logo-white.svg'
import logoBlack from '../../assets/images/logo-white.svg'
import menuIcon from '../../assets/icons/menu-icon.svg'

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <Link to={'/home'}>
                <img src={logoWhite} alt="site logo" />
              </Link>
            </div>

            <div className="header__btns-box">
              <button className='header__btn btn'>Buyurtma berish</button>

              <div className="header__menu-btn-box">
                <button className='header__menu-btn'><span>Menyu</span>
                  <img className='header__menu-icon' src={menuIcon} alt="menu icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
