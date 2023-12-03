// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'; 
const Navbar = () => {
  return (
    <nav>
      <h1>
        Dictionary App
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/HistoryPage">History Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
