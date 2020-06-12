import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
