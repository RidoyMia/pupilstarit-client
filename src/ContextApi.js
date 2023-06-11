import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from './firebase.config';


const Gprovider = new GoogleAuthProvider();
export const AuthContext = createContext();

const ContextApi = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const Gsignin = () => {
        setLoading(true)
        return signInWithPopup(auth, Gprovider)
    };
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const info = { user, createUser, Login, Gsignin, logOut, user, setUser, loading, setLoading }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;