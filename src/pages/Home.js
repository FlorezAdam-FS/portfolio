import React from 'react';
import HeroImage from '../flower3d.png';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      <div className='home__container'>
        <div className='introduction'>
          <h4>Hey!</h4>
          <h1>I'm Adam Florez</h1>
          <p>
            I help companies grow through a strong web presence and brand
            Identity. I motivate customers make the right decisions.
          </p>
          <Link className='contact__button'>Contact Me</Link>
        </div>

        <img className='flower' src={HeroImage} alt='flower' />
      </div>
    </div>
  );
}

export default Home;
