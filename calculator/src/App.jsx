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
      <div>
        <h1 className='Line'>Привет</h1>
      </div>
      <div>
        <div className="Btn">
        <MyButton class={classes.ButtonNumbers} myValue = '7' myValuetwo ='' >7</MyButton>
        <MyButton class={classes.ButtonNumbers} myValue = '7' myValuetwo ='' >7</MyButton>
        <MyButton class={classes.SignsDivide} myValue = '/' myValuetwo ='' >/</MyButton>
        <MyButton class={classes.SignsMultiply} myValue = '*' myValuetwo ='' >*</MyButton>
        </div>
      <div className="Btn" >
        <div>
          <div className="Btn">
            <MyButton class={classes.ButtonNumbers} myValue = '7' myValuetwo ='' >7</MyButton>
            <MyButton class={classes.ButtonNumbers} myValue = '8' myValuetwo ='' >8</MyButton>
          </div>
          <div className="Btn" >
            <MyButton class={classes.ButtonNumbers} myValue = '4' myValuetwo ='' >4</MyButton>
            <MyButton class={classes.ButtonNumbers} myValue = '5' myValuetwo ='' >5</MyButton>
          </div>
          <div className="Btn" >
            <MyButton class={classes.ButtonNumbers} myValue = '1' myValuetwo ='' >1</MyButton>
            <MyButton class={classes.ButtonNumbers} myValue = '2' myValuetwo ='' >2</MyButton>
          </div>
          <div>
            <MyButton class={classes.zero} myValue = '0' myValuetwo ='' >0</MyButton>
          </div>
        </div>
        <div className="Btn">
          <div>
            <MyButton class={classes.ButtonNumbers} myValue = '9' myValuetwo ='' >9</MyButton>
            <MyButton class={classes.ButtonNumbers} myValue = '6' myValuetwo ='' >6</MyButton>
            <MyButton class={classes.ButtonNumbers} myValue = '3' myValuetwo ='' >3</MyButton>
            <MyButton class={classes.Dot} myValue = '.' myValuetwo ='' >.</MyButton>
          </div>
          <div>
            <MyButton class={classes.Signs} myValue = '-' myValuetwo ='' >-</MyButton>
            <MyButton class={classes.SignsPlus} myValue = '+' myValuetwo ='' >+</MyButton>
            <MyButton class={classes.SignsEquals} myValue = '=' myValuetwo ='Enter' >=</MyButton>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
