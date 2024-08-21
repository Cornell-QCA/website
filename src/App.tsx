import { useState } from 'react'
import Title from './components/title'
import Card from './components/people/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center py-2'>
      <Title />
      
      <Card
        image='public/people/haadi.jpg'
        title='Haadi Khan'
        subtitle='Baddie'
        link='https://www.linkedin.com/in/'
        />
    </div>
  )
}

export default App
