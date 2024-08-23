import People from './components/people/page';
import Page from './components/home/page';
import Blurb from './components/blurb/page';
import Apply from './components/apply/page';
import Projects from './components/projects/page';
import Events from './components/events/page';
import Navbar from './components/navbar/page';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Navbar />
      <div id="home">
        <Page />
      </div>
      <div className='w-screen-md'>
      <div id="blurb">
        <Blurb />
      </div>
      <div id="apply">
        <Apply />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="people">
        <People />
      </div>
      </div>
      <div id="events">
        <Events />
      </div>
      <footer className="flex items-center justify-center w-full h-24 border-t text-sm">
        © 2024 Cornell Quantum Computing Association. This organization is a
        registered student organization of Cornell University.
      </footer>
    </div>
  );
}

export default App