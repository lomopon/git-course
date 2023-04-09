import React, { useEffect, useState } from "react";
import classes from './MyButton.module.css'
import App from "../../../App";

function MyButton ({children, ...posts}) {
    
    const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    
    function handleKeyDown(event,name) {
      if (event.key === {name}) {
        console.log('нажалась')
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
        <button className={classes.ButtonNumbers} onClick={() => setButtonClicked(true)}>
          {children}
        </button>
    </div>
    )
}

export default MyButton