import { useState } from 'react'
import {Login} from './components/LoginPage';
import {Reset} from './components/ResetPassword';

import './App.css'

function App() {
  const [form, setForm] = useState("login");


  return (
    <>
    <h1>Welcome!</h1>
    { form === "login" ? <Login/> : <Reset/>}
    <br/>
    <button onClick={() => {setForm(form === "login"? "reset":"login")}}>
    {form === "login" ? "Forgot Password":"Back to Login"}
    </button>
    
    </>
  )
}

export default App
