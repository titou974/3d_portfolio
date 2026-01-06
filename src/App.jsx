import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar, Hero } from "./components";

// Lazy load heavy components
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Works = lazy(() => import("./components/Works"));
// const StarsCanvas = lazy(() => import("./components/StarsCanvas"));
// const Video = lazy(() => import("./components/Video"));

// Loading fallback component
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

        {/* Lazy load everything below the fold */}
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        {/*
        <Suspense fallback={<SectionLoader />}>
          <Video />
        </Suspense> */}

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <div className="relative z-0">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
          {/* <Suspense fallback={<SectionLoader />}>
            <StarsCanvas />
          </Suspense> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
