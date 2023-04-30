import React, { useEffect, useState } from "react";
import classes from './MyButton.module.css'


function MyButton ({children, ...props}) {
    function handleClick() {
      props.title? props.title(children):''
      props.answer? props.answer():''
      props.clear? props.clear():''
      props.percent? props.percent():''
      setButtonClicked(true)
    }
    const [buttonClicked, setButtonClicked] = useState(false);

    
 
    // useEffect(() => {
  //   function handleKeyDown(event) {
  //     if (event.key === props.myValue.toString() || event.key === props.myValuetwo.toString()) { 
  //       console.log('нажалась ' + event.key);
  //       handleClick();
  //     }
  //   }

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  return (
    <div>
        <button onClick={() => handleClick()} className={props.class ? props.class.toString() : ""} >
          {children}
        </button>
    </div>
    )
}

export default MyButton