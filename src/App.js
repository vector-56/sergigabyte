import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Wrapper from './components/Wrapper/wrapper';
import Footer from './components/Footer/footer';


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
