import React from 'react';
import Home from "./Components/Pages/Home"
import Header from "./Components/Pages/Header"
import Features from "./Components/Pages/Features"
import Aboutus from "./Components/Pages/Aboutus"
import Ourservices from "./Components/Pages/Ourservices"
import Projects from "./Components/Pages/Projects"
import Testimonials from "./Components/Pages/Testimonals"
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Features />
      <Aboutus />
      <Ourservices />
      <Projects />
      <Testimonials/>
    </React.Fragment>
  );
}

export default App;
