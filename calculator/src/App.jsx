import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/UI/Button/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyButton>321</MyButton>
    </div>
  )
}

export default App
