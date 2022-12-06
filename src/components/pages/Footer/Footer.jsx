import React from 'react';
import { social } from '../../data/dummy';
import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        {social.map((item) => (
          <>
            <i>{item.icon}</i>
          </>
        ))}
        
        <p>All Right Rescved 2022</p>
      </footer>
    </>
  );
};
