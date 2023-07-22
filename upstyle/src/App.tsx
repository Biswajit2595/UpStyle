import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
