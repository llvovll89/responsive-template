import React, { useEffect } from "react";
import { Pages } from "./components/pages/Pages";
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration : 1250
    });
    Aos.refresh()

  }, [])

  return (
    <>
      <Pages />
    </>
  );
}

export default App;
