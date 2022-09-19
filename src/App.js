import React from 'react';
import Home from "./Components/Pages/Home"
import Header from "./Components/Pages/Header"
import Features from "./Components/Pages/Features"

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Features />
    </React.Fragment>
  );
}

export default App;
