import React,{ useState } from 'react';
import './App.css';

function App() {
  const[light,setStyle]=useState("cont1")
  const[lightModeButton,DarkModeButton]=useState("lightBtn")
  const[lighttxt,darktxt]=useState("light mode")
  const[txt,styletxt]=useState("lightmodetext")
  const[game,gamestyle]=useState("gametxt")

  const dark=()=>{
    setStyle("cont2")
    DarkModeButton("darkBtn")
    darktxt("dark mode")
    styletxt("darkmodetxt")
    gamestyle("gamestyletxt")
  }

  return (
    
    <div>
      <div className={light}>

        <h1 className={txt}>{lighttxt}</h1>
        <button className={lightModeButton} onClick={dark}>click !</button>
        <div className={game}>
        <br></br>enjoy the gaming experience more with Dark mode
        </div>
      </div>
    </div>
  );
}
export default App;