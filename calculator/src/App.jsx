import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/UI/Button/MyButton'
import classes from './component/UI/Button/MyButton.module.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <div className="Btn" >
      <div>
          <MyButton class={classes.ButtonNumbers} myValue = '7' >7</MyButton>
          <MyButton class={classes.ButtonNumbers} myValue = '4' >4</MyButton>
          <MyButton class={classes.ButtonNumbers} myValue = '1' >1</MyButton>
      </div>
      <div>
          <MyButton class={classes.ButtonNumbers} myValue = '8' >8</MyButton>
          <MyButton class={classes.ButtonNumbers} myValue = '5' >5</MyButton>
          <MyButton class={classes.ButtonNumbers} myValue = '2' >2</MyButton>
      </div>
      <div>
          <MyButton class={classes.ButtonNumbers} myValue = '9' >9</MyButton>
          <MyButton class={classes.ButtonNumbers} myValue = '6' >6</MyButton>
          <MyButton class={classes.ButtonNumbers} myValue = '3' >3</MyButton>
      </div>
      <div>
          <MyButton class={classes.Signs} myValue = '' >-</MyButton>
          <MyButton class={classes.SignsPlus} myValue = '' >+</MyButton>
      </div>
      </div>
      <div className="Btn">
          <MyButton class={classes.zero} myValue = '0' >0</MyButton>
          <MyButton class={classes.Dot} myValue = '.' >.</MyButton>
          <MyButton class={classes.SignsEquals} myValue = '' >=</MyButton>
      </div>
    </div>
  )
}

export default App
