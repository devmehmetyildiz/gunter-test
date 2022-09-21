import React from 'react';
import Home from "./Components/Pages/Home"
import Header from "./Components/Pages/Header"
import Features from "./Components/Pages/Features"
import Aboutus from "./Components/Pages/Aboutus"
import Ourservices from "./Components/Pages/Ourservices"
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Features />
      <Aboutus />
      <Ourservices />
    </React.Fragment>
  );
}

export default App;
