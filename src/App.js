import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import HomePage from './components/HomePage';
import HomePage from './components/AboutPage';

function App() {
 return (
    <BrowserRouter>
      <Routes>  
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;



  
