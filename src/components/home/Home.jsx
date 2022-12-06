import React from 'react';
import { Blog } from '../pages/Blog/Blog';
import { Contact } from '../pages/Contact/Contact';
import { Counter } from '../pages/Counter/Counter';
import { Project } from '../pages/Project/Project';
import { Services } from '../pages/Services/Services';
import { Header } from '../common/Header';
import { Hero } from './Hero';
import { Footer } from '../pages/Footer/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Counter />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};
