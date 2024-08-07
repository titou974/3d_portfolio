import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Video, Malt } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary dark:bg-[#ECECEA]'>
        <div className='bg-hero-pattern dark:bg-hero-pattern-light bg-cover bg-no-repeat bg-center dark:bg-white'>
          <Navbar />
          <Hero />
        </div>
        <Works />
        <Video />
        <Experience />
        <Malt />
        <About />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
