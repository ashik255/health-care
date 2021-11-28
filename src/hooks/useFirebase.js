import {createUserWithEmailAndPassword,signInWithEmailAndPassword, GithubAuthProvider,signOut, onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../pages/login/Firebase/Firebase.init";
initializeAuthentication();

const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();


const useFirebase = () =>{
    
 const [user,setUser] = useState({});
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');

const CreateEmailAndPassword = (formData) => {
    console.log('formdata', formData);
       return createUserWithEmailAndPassword(auth, formData?.email, formData?.password);
      
   }
   const SignInWithUserEmailAndPassword = ({email,password}) => {
       return signInWithEmailAndPassword(auth, email, password);
   }
    const signInUsingGoogle = () =>{
        signInWithPopup (auth,GoogleProvider)
    .then (result => {
        setUser(result.user);
    })
    
    }
    const signInUsingGitHub = () =>{
        signInWithPopup (auth,GitHubProvider)
    .then (result => {
        setUser(result.user);
    })
    
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if (user) {
             setUser(user)
            }
            else{
                setUser({})
            }
        })
    },[])
    const LogOut = () =>{
        signOut(auth)
        .then(()=>{ });
    }
    return{
        user,
        email,
        password,
        signInUsingGoogle,
        LogOut,
        signInUsingGitHub,
        // handleEmailChange,
        // handlePassWordChange,
        // processLogin,
        CreateEmailAndPassword,
        SignInWithUserEmailAndPassword
    }


}
export default useFirebase;