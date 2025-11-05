import React, {  useEffect, useState } from 'react';
import {AuthContext} from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loadiing,setLoading]=useState(true);

    // Create User
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    // SignIn User
     const signInUser =(email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)

     }

    //  Google Sign in
     const googleSignIn =()=>{
          setLoading(true)
          return signInWithPopup(auth, googleProvider)


     }

    //  Sign OUt
     const signOutUser =()=>{
      setLoading(true)
       return signOut(auth)
        }


     useEffect(()=>{
           const unsubs= onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser);
              setLoading(false)
           })
           return ()=>{unsubs()}
     },[])

    const authInfo={
       createUser,user,loadiing,signInUser,googleSignIn,signOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;