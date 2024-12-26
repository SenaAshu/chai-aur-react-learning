import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10);

  const valIncreased = () => {
    if(counter<20){
      setCounter(counter + 1);
    }
  };

  const valDEcreased = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
  };

  return (
    <>
    <h1>You Can Increase and Decrease the value between the range of 0-20</h1>
      <h1>Current Counter: {counter}</h1>
      <button onClick={valIncreased}>Increase</button><br /><br />
      <button onClick={valDEcreased}>Decrease</button>
    </>
  );
}

export default App;
