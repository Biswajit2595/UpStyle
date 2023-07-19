import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
    </div>
  );
}

export default App;
