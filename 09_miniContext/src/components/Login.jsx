import React from 'react';
import { useState,useContext } from 'react';
import UserContexts from '../Context/UserContexts';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const {setUser} = useContext(UserContexts);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username,password);
        setUser({username,password});
    }

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder='Username' />
      {" "}
      <input type="password"
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
