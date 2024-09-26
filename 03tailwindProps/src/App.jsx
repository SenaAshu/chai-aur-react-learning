import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    rollNo:7,
    section: 'C'
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl m-3">Tailwind Test</h1>
      <Card props="Ashutosh" imgLink="https://images.unsplash.com/photo-1727162334294-170987f6b31b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card  props="Kamal kant" explanation="2024 batch passout from National Institute of Science & Technology,Berhampur,working as a software intern." imgLink="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww"/>
    </>
  );
}

export default App;
