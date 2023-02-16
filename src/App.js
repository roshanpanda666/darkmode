import React,{ useState } from 'react';
import './App.css';

function App() {
  const[light,setStyle]=useState("cont1")
  const dark=()=>{
    setStyle("cont2")
  }

  const[lightModeButton,DarkModeButton]=useState("lightBtn")
  const modebtn=()=>{
    DarkModeButton("darkBtn")
  }
  
  return (
    
    <div>
      <div className={light}>
        
        <button className={lightModeButton} onClick={dark} onClickCapture={modebtn}>click !</button>
        
      </div>
    </div>
  );
}
export default App;