import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Wrapper from './components/Wrapper/wrapper';
import Footer from './components/Footer/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Message from './components/Nav/Message/Messages/Message/message'
import News from './components/Nav/News/news';
import Music from './components/Nav/Music/music';
import Setting from './components/Nav/Setting/setting';

function App() {
  return (
    <BrowserRouter>
        <div className="app">
          <Header />
          <Nav />
          <Route path="/wrapper" component={Wrapper} />
          <Route path="/message" component={Message} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;