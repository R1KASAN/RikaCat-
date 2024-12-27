import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Channel from './components/Channel';
import Games from './components/Games';
import './App.css';

function App() {
  const navStyle = {
    backgroundColor: '#1a237e',
    padding: '15px',
    textAlign: 'center'
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    padding: '8px 15px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    fontSize: '1.1rem',
    fontWeight: '500'
  };

  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <Link to="/" style={navLinkStyle}>HOME</Link>
          <Link to="/channel" style={navLinkStyle}>CHANNEL</Link>
          <Link to="/games" style={navLinkStyle}>GAMES</Link>
        </nav>

        <Routes>
          <Route path="/channel" element={<Channel />} />
          <Route path="/games" element={<Games />} />
          <Route path="/" element={
            <>
              <Header />
              <About />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


