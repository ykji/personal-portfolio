import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <SocialLinks hideForMobile={true} />
      <About />
      <Projects />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
