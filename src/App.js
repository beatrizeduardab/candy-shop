import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home'
import DetalhesDoce from './paginas/DetalhesDoce';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<DetalhesDoce />} />
      </Routes>
    </Router>
  );
}

export default App;
