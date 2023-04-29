import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const authContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // crate user 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in 
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign out 
    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }
    // find current user 
    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            // console.log('log in user')
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[])
    const userInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;