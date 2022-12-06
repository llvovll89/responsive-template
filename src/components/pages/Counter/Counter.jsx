import React from 'react';
import { project } from '../../data/dummy';
import { v4 as uuid } from 'uuid';
import './Counter.css';

export const Counter = () => {
  return (
    <>
      <div className="hero counter">
        <div className="container grid3 grid4">
          {project.map((item) => (
            <div className="box" key={uuid()} data-aos="zoom-in"> 
              <i>{item.icon}</i>
              <h1 className="title">{item.num}</h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
