import {useState,useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
export const Reset = () => {
    const {email, setEmail} = useLocalStorage();
    // const [email, setEmail] = useState("");
    // useEffect(()=>{
    //     let mail = localStorage.getItem("email");
    //     if(mail){
    //         setEmail(mail);
    //     }
    // },[]);
    return(
        <>
        <div>Reset Your Password</div>
        <input type="text" 
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        <br/>
        <button>Continue</button>
        <br />
        </>
    )
}