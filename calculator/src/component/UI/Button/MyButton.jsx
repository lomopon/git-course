import React, { useEffect, useState } from "react";
import classes from './MyButton.module.css'


function MyButton ({children, ...props}) {
    
    const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    
    function handleKeyDown(event) {
      if (event.key === props.myValue.toString()) {
        console.log('нажалась'+ props.myValue.toString())
        setButtonClicked(true);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
        <button className={props.class ? props.class.toString() : ""} onClick={() => setButtonClicked(true)}>
          {children}
        </button>
    </div>
    )
}

export default MyButton