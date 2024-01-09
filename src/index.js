import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ScrollToTop } from './components/ScrollToTop';
import { FilterProvider } from './context/FilterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop></ScrollToTop>
        <App />
    </FilterProvider>
    </Router>
  </React.StrictMode>
);


