/* eslint-disable react/prop-types */

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const bookContext = createContext()
const ContextComponent = ({ children }) => {

   
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    // register
    const createRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const loginForm = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut = () =>{
        return signOut(auth)
    }


    // google provider
    const googleProvider = new  GoogleAuthProvider()
    const googleLogin = () =>{
        signInWithPopup(auth, googleProvider)
    }


    useEffect(() =>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observing current user in side useEffect of AuthProvider', currentUser);
            setLoading(false)
           
        })
        return () =>{
            unSubscribe()
        }
    },[])






    // console.log(morePages)
    const passValue = { user,setUser,createRegister, loginForm, logOut, setLoading,loading, googleLogin }

    return (
        <div>
            <bookContext.Provider value={ passValue }>
                {children}
            </bookContext.Provider>
        </div>
    );
};

export default ContextComponent;