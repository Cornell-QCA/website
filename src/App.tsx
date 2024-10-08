import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Navbar from './components/navbar/page';
import CoffeeChats from './coffee_chats/page';
import Home from './Home';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col items-center justify-center py-2">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<CoffeeChats />} />
        </Routes>

        <footer className="flex items-center justify-center w-full h-24 border-t text-sm">
          © 2024 Quantum Computing Association at Cornell. This organization is a
          registered student organization of Cornell University.
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;