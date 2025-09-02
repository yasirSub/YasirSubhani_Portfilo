import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, FloatingButtons } from "./components";
import { Hero, About, Experience, Tech, Works, Feedbacks, Contact } from "./components";
import { AboutPage } from "./components";
import { ProjectsPage } from "./components";
import { OtherPursuits } from "./components";
import { BeyondCode } from "./components";
import { TradingFinance } from "./components";
import { Music } from "./components";
import { Photography } from "./components";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <section id="home">
                  <Hero />
                </section>
              </div>
              <section id="about">
                <About />
              </section>
              <section id="work">
                <Experience />
              </section>
              <section id="skills">
                <Tech />
              </section>
              <section id="projects">
                <Works />
              </section>
              <section id="feedbacks">
                <Feedbacks />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/pursuits" element={<OtherPursuits />} />
          <Route path="/beyond-code" element={<BeyondCode />} />
          <Route path="/trading-finance" element={<TradingFinance />} />
          <Route path="/music" element={<Music />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;
