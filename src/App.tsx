import People from './components/people/page'
import Page from './components/home/page'
import Blurb from './components/blurb/page'
import Apply from './components/apply/page'

function App() {
  return (
    <div className='flex flex-col items-center justify-center py-2'>
      <Page />
      <Blurb />
      <Apply />
      <People />

      <footer className='flex items-center justify-center w-full h-24 border-t text-sm '>
      © 2024 Cornell Quantum Computing Association. This organization is a
      registered student organization of Cornell University.
      </footer>
    </div>
  )
}

export default App
