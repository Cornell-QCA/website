import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Navbar from './components/navbar/page';
import CoffeeChats from './pages/coffee';
import Home from './Home';
import RecruitmentPage from './pages/recruitment';
import ProjectsPage from './pages/projects';
import TeamPage from './pages/team';
import EventsPage from './pages/events';
import ContactPage from './pages/contact';
import EducationalPage from './pages/education';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Add top padding to account for fixed navbar and center content */}
        <div className="pt-16 sm:pt-20">
          <div className="flex flex-col items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coffee" element={<CoffeeChats />} />
              <Route path="/recruitment" element={<RecruitmentPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/educational" element={<EducationalPage />} />
            </Routes>
          </div>
        </div>

        <footer className="flex items-center justify-center w-full min-h-[6rem] border-t text-xs sm:text-sm px-4 py-6 mt-8">
          <p className="text-center text-gray-600 leading-relaxed max-w-2xl">
            © 2025 Quantum Computing Association at Cornell. This organization is a
            registered student organization of Cornell University.
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;