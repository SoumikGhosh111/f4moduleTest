// App.js
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WordDetails from './components/WordDetails';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import HistoryPage from './components/HistoryPage';

const App = () => {
  return (
    
      <Provider store={store}>
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-details/:searchItem" element={<WordDetails />} />
        
      </Routes>
    </Router>
      </Provider>
  );
};

export default App;
