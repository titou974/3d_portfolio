import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {

  return (
    <BrowserRouter>
      <ChakraProvider>
        <div className='relative z-0 bg-primary dark:bg-[#ECECEA]'>
          <div className='bg-hero-pattern dark:bg-hero-pattern-light bg-cover bg-no-repeat bg-center dark:bg-white'>
            <Navbar />
            <Hero />
          </div>
          <Works />
          <Experience />
          <About />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
