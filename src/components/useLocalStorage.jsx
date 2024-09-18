import {useState, useEffect} from 'react';
export default function useLocalStorage(){
    const [email, setEmail] = useState("");

    useEffect(()=>{
        let mail = localStorage.getItem("email");

        if(mail){
            setEmail(mail);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("email", email);
    },[email]);

    return {email, setEmail};


    

}