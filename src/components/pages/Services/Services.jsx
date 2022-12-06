import React from 'react';
import { services } from '../../data/dummy';
import { Title } from '../../common/Title';
import {v4 as uuid} from 'uuid';
import './Services.css';

export const Services = () => {
  return (
    <>
      <section className="services">
        <div className="services-container container">
          <Title title="services" />
          <div className="services-content">
          {services.map((item) => (
            <div className="box" key={uuid()} data-aos="flip-left">
              <i>{item.icon}</i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};
