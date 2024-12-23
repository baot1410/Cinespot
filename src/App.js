import './App.css';
import RouteList from './routes/RouteList';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <RouteList/>
      <Footer />
    </div>
  );
}

export default App;
