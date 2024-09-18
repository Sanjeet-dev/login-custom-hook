import {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
export const Login = () => {
    // const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const {email, setEmail} = useLocalStorage();


    // useEffect(()=>{
    //     let mail = localStorage.getItem("email");
    //     if(mail){
    //         setEmail(mail);
    //     }
    // },[]);

    // useEffect(()=>{
    //     localStorage.setItem("email",email);
    // },[email]);
    return(
        <>
        <div>Login to the Portal</div>
        <input type="text" 
        placeholder = "Enter Email"
        value={email}
        onChange = {(e)=> setEmail(e.target.value)}
        />
        <br/>
        <input type="text" 
        placeholder = "Enter Password"
        value={password}
        onChange = {(e) => setPassword(e.target.value)}
        />

        <br/>
        <button>Login</button>
        <br/>
    
        
        </>
    )
}

