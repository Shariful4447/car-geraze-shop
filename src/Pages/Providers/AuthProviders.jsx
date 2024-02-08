import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from "../../firebase/firebase.config.js";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(() =>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);

        });
        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
       
    );
};

export default AuthProviders;