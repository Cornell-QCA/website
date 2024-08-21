import { useState } from 'react'
import Card from './components/people/card'
import People from './components/people/page'
import Page from './components/home/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center py-2'>
      <Page />
      <People />
    </div>
  )
}

export default App
