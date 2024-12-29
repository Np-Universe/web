import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
// import Chatbot from "./components/chatbot";
import Footer from "./components/footer";
import Project from "./components/Project";
// import Chat from "./components/ChatGPT";
import Galery from './components/Galery';
import GalleryV from "./components/GalleryV";
// import Paralax from './components/paralax';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import 'animate.css';
import "../src/App.css"
function App() {

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 500,
    })
  }, [])

  return (
    
    <div className="container">
        <Navbar setIsAdmin={setIsAdmin} />
        {/* <Paralax/> */}
        <Intro/>
        <AboutMe/>
        {/* <Chatbot/> */}
        {/* <Chat/> */}
        <Project isAdmin={isAdmin} />
        <Galery/>
        <GalleryV/>
        <Footer/>
    </div>
  )       
}
  
  

export default App;
