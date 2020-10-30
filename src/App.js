import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import Certificates from './Components/Certificates';


function App() {
  return (
    <div>
      <Navbar/>
      <div className="my-contents">
        <Home/>
        <Certificates/>
      </div>
    </div>      
  );
}

export default App;
