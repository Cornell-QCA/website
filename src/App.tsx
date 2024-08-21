import People from './components/people/page'
import Page from './components/home/page'

function App() {
  return (
    <div className='flex flex-col items-center justify-center py-2'>
      <Page />
      <People />
    </div>
  )
}

export default App
