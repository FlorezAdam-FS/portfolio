import React from 'react';
import './About.css';
import Data from '../data.png';
import Ny from '../ny.png';
import Me from '../me.png';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiReact,
} from 'react-icons/di';
import { SiCsharp, SiVuedotjs } from 'react-icons/si';
import resume from '../resume.docx';

function About() {
  return (
    <div className='About'>
      <div className='about__container'>
        <div className='about__details'>
          <div className='top'>
            <img className='me' src={Me} alt='ME' />
            <div className='heading'>
              <h1>Adam Florez</h1>
              <h2>Web Developer</h2>
              <h3>Orlando, Fl</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-1'>
              <div className='languages'>
                <span className='bold'>Languages</span>
                <ul>
                  <li>
                    <DiHtml5 className='icon' /> <p>HTML</p>
                  </li>
                  <li>
                    <DiCss3 className='icon' /> <p>CSS</p>
                  </li>
                  <li>
                    <DiJavascript1 className='icon' /> <p>JavaScript</p>
                  </li>
                  <li>
                    <DiPython className='icon' /> <p>Python</p>
                  </li>
                  <li>
                    <SiCsharp className='icon' /> <p>C#</p>
                  </li>
                </ul>
              </div>
              <div className='framework'>
                <span className='bold'>Frameworks</span>
                <ul>
                  <li>
                    <DiReact className='icon' /> <p>React</p>
                  </li>
                  <li>
                    <SiVuedotjs className='icon' /> <p>Vue</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-2'>
              <div className='skills'>
                <span className='bold'>Skills</span>
                <ul>
                  <li>
                    <p>Background in Data Analytics </p>
                  </li>
                  <li>
                    <p>working in a corporate environment</p>
                  </li>
                  <li>
                    <p>
                      Developing systems for upper management that is used daily
                      to improve performance of our departments
                    </p>
                  </li>
                </ul>
              </div>
              <div className='resume__container'>
                <a className='resume' href={resume} download>
                  Download Resume
                </a>
              </div>
            </div>
            <div className='col-3'>
              Originally from New York. Moved to Florida a couple years ago and
              went through a lot of growth in that time. I went to a trade
              school for IT. I got my A+ certification and my MCSA. I got a job
              as a self service IT Analyst. I helped customers with their
              computers and while I was off the phone I started learning to code
              on my own. I wanted to make a change toward that field and started
              my journey or learning. I am currently attending Fullsail
              University for a Bachelor’s of Science in web development and
              design. While going to college I had been given an opportunity to
              be a business analyst for the service desk and fell in love with
              data. Making reports and building dashboards that show upper
              management insights that they didn’t have. I want to become a web
              developer and create incredible data visualizations.{' '}
            </div>
          </div>
        </div>
        <img className='data' src={Data} alt='data' />
        <img className='ny' src={Ny} alt='New York' />
      </div>
    </div>
  );
}

export default About;
