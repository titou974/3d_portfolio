import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Video,
  Malt,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background">
        <div className="dark:bg-[url(/src/assets/tsnight.png)] bg-[url(/src/assets/hero-bg-light.png)] dark:bg-cover bg-no-repeat bg-center bg-white">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <Video />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <a className="hidden" href="https://lordicon.com/">
        Animated icons by Lordicon.com
      </a>
    </BrowserRouter>
  );
};

export default App;
