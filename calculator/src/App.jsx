import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/UI/Button/MyButton'
import classes from './component/UI/Button/MyButton.module.css'

function App() {
  const [count, setCount] = useState(0)
  
  const [text, setText] = useState('');

  //массив заголовка 
  const result = () => {
    const tyextArra = text.split('');
    console.log(tyextArra);
    setText('0');
  }

  //очистка заголовка
  const allClear = () => {
    setText('0');
  }
  
  //массив процента
  const percent = () => {
  const tyextArra2 = text;
  const percent1 = tyextArra2 / 100;
  console.log(percent1);
  setText(percent1)
  }

  const handleClick = (symbol) => {
    setText(text + symbol);
  }

  const handleBlur = (event) => {
    // Обновляем состояние только при завершении ввода
    setText(event.target.value);
  };
  
  return (
    <div className="App">
      <div>
        <h1 className='Line'>{text}</h1>
      </div>
      <div>
        <div className="Btn">
          <MyButton percent={percent} class={classes.SignsPercent} >%</MyButton>
          <MyButton class={classes.SignsBracket}>(</MyButton>
          <MyButton class={classes.SignsBracket}>)</MyButton>
        </div>
      </div>
      <div>
        <div className="Btn">
        <MyButton clear={allClear} class={classes.AllClear}>AC</MyButton>
        <MyButton clear={allClear} class={classes.AllClear}>AC</MyButton>
        <MyButton title= {handleClick} class={classes.SignsDivide} myValue = '/' myValuetwo ='' >/</MyButton>
        <MyButton title= {handleClick} class={classes.SignsMultiply} myValue = '*' myValuetwo ='' >*</MyButton>
        </div>
      <div className="Btn" >
        <div>
          <div className="Btn">
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '7' myValuetwo ='' >7</MyButton>
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '8' myValuetwo ='' >8</MyButton>
          </div>
          <div className="Btn" >
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '4' myValuetwo ='' >4</MyButton>
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '5' myValuetwo ='' >5</MyButton>
          </div>
          <div className="Btn" >
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '1' myValuetwo ='' >1</MyButton>
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '2' myValuetwo ='' >2</MyButton>
          </div>
          <div>
            <MyButton title= {handleClick} class={classes.zero} myValue = '0' myValuetwo ='' >0</MyButton>
          </div>
        </div>
        <div className="Btn">
          <div>
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '9' myValuetwo ='' >9</MyButton>
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '6' myValuetwo ='' >6</MyButton>
            <MyButton title= {handleClick} class={classes.ButtonNumbers} myValue = '3' myValuetwo ='' >3</MyButton>
            <MyButton title= {handleClick} class={classes.Dot} myValue = ',' myValuetwo ='.' >.</MyButton>
          </div>
          <div>
            <MyButton title= {handleClick} class={classes.Signs} myValue = '-' myValuetwo ='' >-</MyButton>
            <MyButton title= {handleClick} class={classes.SignsPlus} myValue = '+' myValuetwo ='' >+</MyButton>
            <MyButton answer= {result} class={classes.SignsEquals} myValue = '=' myValuetwo ='Enter' >=</MyButton>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
