import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Navbar, Footer } from './components';
import Apod from './pages/HazardPage/HazardPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path='/Shopify/' element={<Home />} />
        <Route path='/Apod' element={<Apod />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
