import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/home/Home';
import { Services } from '../src/components/pages/Services/Services';
import { Blog } from '../src/components/pages/Blog/Blog';
import { Contact } from '../src/components/pages/Contact/Contact';
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
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
