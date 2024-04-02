/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const bookContext = createContext()
const ContextComponent = ({ children }) => {

    const [userData, setUserData] = useState([]);
    const [morePages, setMorePages] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
        .then(data => {
            setUserData(data)
            const morePage = [...data].sort((a,b) =>b.totalPages - a.totalPages)
            setMorePages(morePage)
        })
    }, [])

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
    const passValue = { user, userData,morePages,createRegister, loginForm, logOut, setLoading,loading }

    return (
        <div>
            <bookContext.Provider value={ passValue }>
                {children}
            </bookContext.Provider>
        </div>
    );
};

export default ContextComponent;