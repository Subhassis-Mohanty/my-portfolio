import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MediaLinks from "./components/MediaLinks";
import Navibar from "./components/Navibar";


function App() {
  return (
    <>
    <div>
      <Navibar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <MediaLinks />
    </div>
    </>
    
  );
}

export default App;
