import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/footer";
import Project from "./components/Project";
import Chat from "./components/ChatGPT";
import Galery from './components/Galery';

import "../src/App.css"
function App() {
  return (
    
    <div>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Chat/>
      <Project/>
      <Galery/>
      <Footer/>
    </div>
  );
}

export default App;
