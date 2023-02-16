import React,{ useState } from 'react';
import './App.css';

function App() {
  const[light,setStyle]=useState("cont1")
  const[lightModeButton,DarkModeButton]=useState("lightBtn")
  const[lighttxt,darktxt]=useState("light mode")
  const[txt,styletxt]=useState("lightmodetext")

  const dark=()=>{
    setStyle("cont2")
    DarkModeButton("darkBtn")
    darktxt("dark mode")
    styletxt("darkmodetxt")
  }

  return (
    
    <div>
      <div className={light}>

        <h1 className={txt}>{lighttxt}</h1>
        <button className={lightModeButton} onClick={dark}>click !</button>
        
      </div>
    </div>
  );
}
export default App;