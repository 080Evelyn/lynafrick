import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center bg-amber-600 text-white'>Hello, World</h1>
    </>
  )
}

export default App
