import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ChatPage from './components/ChatPage';
import DonatePage from './components/DonatePage';

function App() {
 return (
    <BrowserRouter>
      <Routes>  
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/donate" element={<DonatePage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;



  
