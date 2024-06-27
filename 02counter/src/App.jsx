import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  const [message, setMessage] = useState("");

  // let counter=15
  //  const useEffectCallbackFn=()=>{
  //   if(counter<0 || counter>20) {
  //     setMessage("eND gAME")
  //   }
  //  }
  // useEffect(useEffectCallbackFn,[counter])

  const endgame = () => {
    if (counter <= 0 || counter >= 20) {
      setMessage("End Game");
    } else {
      setMessage("");
    }
  };

  useEffect(endgame), [counter];

  const addValue = () => {
    if (counter < 20) {
      console.log("clicked", counter);
      // counter=counter+2
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value:{counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value:{counter}</button>
      <p>footer:{counter}</p>
      <h1> {message}</h1>
    </>
  );
}

export default App;
