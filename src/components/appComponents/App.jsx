import React, { useState } from "react";
import "./App.css"
const App=()=>{
let [time,setTime]=useState("0");
let displayText ="";
let displaytextTime=new Date().getHours()
let style={};
if(displaytextTime >=5 && displaytextTime <12) {
displayText="Good Morning 🌅"
style.color="green"
}

if(displaytextTime >=12 && displaytextTime <17) {
  displayText="Good Afternoon 🌞"
  style.color="yellow"
  }
  if((displaytextTime >=17 && displaytextTime <=24) || (displaytextTime>=1 && displaytextTime <5 ) ) {
    displayText="Good Night 🌔"
    style.color="black"
    }

setInterval(() => {
  let newTime=new Date().toLocaleTimeString();
  setTime(newTime)
}, 1000);

  return (
    <>
    <h1 >Hello ! <span style={style}>{displayText}</span></h1>
      <h1>Time</h1>
      <h2 style={{border:"1px solid black", width:"200px",borderRadius:"5px" , background:"green"}}>
      {time}
      </h2>
          
    </>
  )
}

export default App;