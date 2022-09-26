import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

// Icons -------------------------------------

import phoneIcon from '../../assets/icons/phone-icon.svg'

function Navbar() {
  const [count, setCount] = useState(1)
  const arr = [
    { id: 1, pathName: '/home' },
    { id: 2, pathName: '/about' },
    { id: 3, pathName: '/services' },
    { id: 4, pathName: '/projects' },
    { id: 5, pathName: '/blogNews' },
    { id: 6, pathName: '/ourTeam' },
    { id: 7, pathName: '/feedbacks' },
    { id: 8, pathName: '/contacts' },
  ]

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar__phone">
            <button className='navbar__phone-btn'>
              <img src={phoneIcon} alt="phone icon" />
            </button>
          </div>

          <nav className='navbar__nav'>
            <ul className="navbar__nav-list">
              {arr.map(item => (
                <Link to={item.pathName}>
                  <li key={item}
                    className={`navbar__nav-item ${count === item.id ? "navItemAct" : ""}`}
                    onClick={() => setCount(item.id)}>{item.id}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          <div className="navbar__networks">
            <ul className="navbar__networks-list">
              <li className="navbar__netweorks-item">
                <a href="#">f</a>
              </li>
              <li className="navbar__netweorks-item">
                <a href="#">f</a>
              </li>
              <li className="navbar__netweorks-item">
                <a href="#">f</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
