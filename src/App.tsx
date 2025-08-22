import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Navbar from './components/navbar/page';
import CoffeeChats from './coffee_chats/page';
import Home from './Home';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Add top padding to account for fixed navbar and center content */}
        <div className="pt-20">
          <div className="flex flex-col items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coffee" element={<CoffeeChats />} />
            </Routes>
          </div>
        </div>

        <footer className="flex items-center justify-center w-full h-24 border-t text-sm">
          © 2024 Quantum Computing Association at Cornell. This organization is a
          registered student organization of Cornell University.
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;