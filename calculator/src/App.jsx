import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/UI/Button/MyButton'
import classes from './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <div className="Btn"></div>
      <div className="Btn"></div>
      <div className="Btn"></div>
      <div className="Btn">
      <MyButton myValue = '1' >1</MyButton>
      <MyButton myValue = '2' >2</MyButton>
      <MyButton myValue = '3' >3</MyButton>
      <MyButton myValue = '4' >4</MyButton>
      </div>
      <div className="Btn"></div>
    </div>
  )
}

export default App
