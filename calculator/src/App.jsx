import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/UI/Button/MyButton'

function App() {
  const [count, setCount] = useState(0)

  const myValue = '2';

  return (
    <div className="App">
      <MyButton myValue = '1' >1</MyButton>
      <MyButton myValue = '2' >2</MyButton>
      <MyButton myValue = '3' >3</MyButton>
      <MyButton myValue = '4' >4</MyButton>
    </div>
  )
}

export default App
