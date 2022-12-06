import React from 'react';
import { home } from '../data/dummy';
import './Hero.css';
import Typewriter from 'typewriter-effect';
import {v4 as uuid} from 'uuid'

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val) => (
          <div className="hero-container" key={uuid()}>
            <h3 className='hero-title' data-aos='fade-right'>{val.text}</h3>
            <h1 className='ani-text'>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart : true , loop : true
                }}
              />
            </h1>
            <p data-aos='zoom-in-left' className='hero-desc'>{val.desc}</p>
            <button className='pmBtn'>Download CV</button>
          </div>
        ))}
      </section>
    </>
  );
};
