import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../common/Header';
import { Home } from '../home/Home';
import { Services } from '../pages/Services/Services';
import { Blog } from './Blog/Blog';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';
import { Project } from './Project/Project';

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
