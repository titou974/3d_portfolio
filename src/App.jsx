import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Video from "./components/Video";
import StarsCanvas from "./components/canvas/Stars";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse text-secondary">Loading...</div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background">
        {/* Hero section loads immediately - critical content */}
        <div className="dark:bg-[url(/src/assets/tsnight.png)] bg-[url(/src/assets/hero-bg-light.png)] dark:bg-cover bg-no-repeat bg-center bg-white">
          <Navbar />
          <Hero />
        </div>

        <Works />

        {/* <Video /> */}

        <Experience />

        <div className="relative z-0">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
