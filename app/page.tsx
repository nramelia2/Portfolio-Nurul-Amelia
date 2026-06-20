import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Difference from "./components/Difference";
import Experience from "./components/Experience";
import FeaturedProject from "./components/Projects";
import ResearchProjects from "./components/ReseachProject";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import ResearchImpact from "./components/ResearchImpact";
import Awards from "./components/Awards";
import Education from "./components/Education";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
    return (
        <main>
            <Navbar />

            <Hero />

            <Reveal>
              <About />
            </Reveal>

            <Reveal>
              <Difference />
            </Reveal>

            <Reveal>
              <Experience />
            </Reveal>

            <Reveal>
              <FeaturedProject />
            </Reveal>

            <Reveal>
              <ResearchProjects />
            </Reveal>

            <Reveal>
              <Skills />
            </Reveal>

            <Reveal>
              <Publications />
            </Reveal>

            <Reveal>
              <ResearchImpact />
            </Reveal>

            <Reveal>
              <Awards />
            </Reveal>

            <Reveal>
              <Education />
            </Reveal>

            <Reveal>
              <FinalCTA />
            </Reveal>

            <Reveal>
              <Contact />
            </Reveal>

            <Footer />
        </main>
    );
}