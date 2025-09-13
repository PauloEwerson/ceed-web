import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Header,
  Home,
  About,
  // Team,
  Structure,
  // Depositions,
  // Contact,
  // // Footer,
} from './pages';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
          <About />
          {/* <Team /> */}
          <Structure />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/structure" element={<Structure />} />
            <Route path="/depositions" element={<Depositions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
