import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navlink } from '../data/dummy';
import {v4 as uuid} from 'uuid'
import logo from '../data/img/logo.png'
import { Menu } from '@mui/icons-material';
import './Header.css';

export const Header = () => {
  const [moblie , setMobile] = useState(false);

  return (
    <>
      <header>
        <div className="header-container container flex">
          <div className="logo"><img src={logo} alt=".." data-aos='zoom-in-right'/></div>
          <div className={moblie ? "hide-navber" : "navbar"}>
              {navlink.map((link) => (
                <Link to={link.url} key={uuid()} data-aos='zoom-in-left'>  
                    {link.text}
                </Link>
              ))}
          </div>
          <button className='toggle' onClick={() => setMobile(!moblie)}>
                <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
};
