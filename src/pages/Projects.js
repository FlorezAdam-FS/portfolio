import React from 'react';
import './Projects.css';
import Rocket from '../rocket.png';
import music from '../musicplayer.png';
import crypto from '../crypto.png';
import bmi from '../bmi_calc.png';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiBootstrap,
} from 'react-icons/di';

function Projects() {
  const projects = [
    {
      img: music,
      name: 'Music Player',
      desc: 'Quick project to make a simple music player. Uses data from songs and images that I like. I created a small database for a few songs and images that it pulls from.',
      langIcon: [<DiJavascript1 />],
      lang: [
        {
          icon: <DiHtml5 />,
          name: 'HTML',
        },
        {
          icon: <DiCss3 />,
          name: 'CSS',
        },
        {
          icon: <DiJavascript1 />,
          name: 'JavaScript',
        },
      ],
      link: 'https://afdesignsmusicplayer.netlify.app',
    },
    {
      img: crypto,
      name: 'Crypto Tracker',
      desc: 'Quick project to make a simple music player. Uses data from songs and images that I like. I created a small database for a few songs and images that it pulls from.',
      lang: [
        {
          icon: <DiReact />,
          name: 'React',
        },
      ],
      link: 'https://afdesignscryptotracker.netlify.app',
    },
    {
      img: bmi,
      name: 'BMI Calc',
      desc: 'Quick project to make a simple music player. Uses data from songs and images that I like. I created a small database for a few songs and images that it pulls from.',
      lang: [
        {
          icon: <DiHtml5 />,
          name: 'HTML',
        },
        {
          icon: <DiCss3 />,
          name: 'CSS',
        },
        {
          icon: <DiJavascript1 />,
          name: 'JavaScript',
        },
        {
          icon: <DiBootstrap />,
          name: 'Bootstrap',
        },
      ],
      link: 'https://afdesignsbmicalc.netlify.app',
    },
  ];

  const projectObject = projects.map((p) => (
    <li className='projects__List'>
      <div className='left'>
        <img src={p.img} alt={p.name} />
      </div>
      <div className='right'>
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <ul>
          {p.lang.map((l) => (
            <li>
              <div className='icon'>{l.icon}</div>
              <p>{l.name}</p>
            </li>
          ))}
        </ul>
        <a className='cta' target='blank' href={p.link}>
          Check it Out
        </a>
      </div>
    </li>
  ));

  return (
    <div className='Projects'>
      <div className='projects__container'>
        <img className='rocket' src={Rocket} alt='rocket' />
        <div className='scroll'>
          <ul className='project'>{projectObject}</ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
