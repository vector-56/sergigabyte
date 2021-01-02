import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Wrapper from './components/wrapper';
import Footer from './components/footer';


function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
