import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from "../../firebase/firebase.config.js";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() =>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log( 'cusrrent user', currentUser);
            setLoading(false);
            // if user exist then isssue a token
            if(currentUser){
                const loggedUser = {email: currentUser.email};
                axios.post('http://localhost:3000/jwt',loggedUser, {withCredentials:true})
                .then(res =>{
                    console.log( 'token response', res.data)
                })
            }


        });
        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
       
    );
};

export default AuthProviders;