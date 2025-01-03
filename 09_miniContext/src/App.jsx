import { useContext } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  // const {user} = useContext(userContextProvider);

  return (
    <UserContextProvider>
      <h1>Learning Chai aur React</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
