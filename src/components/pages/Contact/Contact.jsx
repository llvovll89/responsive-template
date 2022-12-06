import React from 'react';
import './Contact.css';
import { contact } from '../../data/dummy';
import { Title } from '../../common/Title';
import { v4 as uuid } from 'uuid';

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container container">
          <Title title="Contact 해주세요." />
          <div className="contact-content">
            <div className="contact-right">
              <form
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="ritht-box">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your E-mail" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="submit-btn">Submit</button>
              </form>
            </div>
            <div className="contact-left">
              {contact.map((item) => (
                <div
                  className="contact-box"
                  key={uuid()}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1300"
                >
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
