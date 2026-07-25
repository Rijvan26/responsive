import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg-[#070707ec]  max-w-full px-4 py-2 text-white'>
    <Home />
  </div>
  )
}

export default App
