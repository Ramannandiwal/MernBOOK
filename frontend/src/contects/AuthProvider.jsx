import React, {  createContext, useEffect, useState } from 'react';
import app from '../firbase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext=createContext();
const auth=getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider=({children})=>{
    const [user,setuUser]=useState(null)
    const [loading,setloading]=useState(true)
    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginwithGoogle= ()=>{
      setloading(true)
      return signInWithPopup(auth,googleprovider)
    }
    const login=(email,password)=>{
      setloading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
      return signOut(auth)
    }

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,currentUser=>{
   setuUser(currentUser)
   setloading(false)
  });
  return ()=>{
    return unsubscribe();
  }
},[])
const authInfo={
  createUser,
  user,
  loading,
  loginwithGoogle,
  login,logout
}
   
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
      
    </div>
  );
}

export default AuthProvider;

