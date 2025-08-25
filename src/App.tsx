import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, FloatingButtons } from "./components";
import { Hero, About, Experience, Tech, Works, Feedbacks, Contact } from "./components";
import { AboutPage } from "./components";
import { ProjectsPage } from "./components";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="relative z-0 bg-primary">
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
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;
