import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import Hamburger from './Hamburger';

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className='nav__wrapper'>
      <div className='nav__container'>
        <div className='logo'>
          <NavLink to='/'>
            <img className='logo' src={logo} alt='logo' />
          </NavLink>
        </div>
        <div className='nav__hamburger' onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>

        <div className='nav'>
          <ul>
            <li onClick={toggleHamburger}>
              <NavLink className='link' to='/'>
                Home
              </NavLink>
            </li>
            <li onClick={toggleHamburger}>
              <NavLink className='link' to='/about'>
                About
              </NavLink>
            </li>
            <li onClick={toggleHamburger}>
              <NavLink className='link' to='/projects'>
                Projects
              </NavLink>
            </li>
            <li onClick={toggleHamburger}>
              <NavLink className='link contact' to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .nav ul {
            display: flex;
            list-style: none;
          }

          .nav__hamburger {
            display: none;
          }

          @media (max-width: 767px) {
            .nav__hamburger {
              display: block;
              position: absolute;
              right: 5%;
              padding-top: 10px;
              margin-left: 10px;
              z-index: 10000;
            }

            .logo {
              margin-top: 5px;
            }
            .nav ul {
              transform: ${hamburgerOpen
                ? 'translateY(0)'
                : 'translateY(-100%)'};
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              transition: all 0.3s linear;
              position: absolute;
              height: 50vh;
              left: 0;
              top: 0;
              width: 100%;
              background-color: #a4508b;
              background-image: linear-gradient(
                326deg,
                #a4508b 0%,
                #5f0a87 74%
              );
              list-style: none;
              float: right;
              margin: 0;
            }
            .link {
              margin-left: 0;
              
            }
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
