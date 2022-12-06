import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../src/components/common/Header';
import { Home } from '../src/components/home/Home';
import { Services } from '../src/components/pages/Services/Services';
import { Blog } from '../src/components/pages/Blog/Blog';
import { Contact } from '../src/components/pages/Contact/Contact';
import { Footer } from '../src/components/pages/Footer/Footer';
import { Project } from '../src/components/pages/Project/Project';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1250,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
