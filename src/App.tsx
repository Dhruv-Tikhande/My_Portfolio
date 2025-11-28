import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;