import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
// import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <SocialLinks hideForMobile={true} />
      <About />
      {/* <Portfolio /> */}
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
