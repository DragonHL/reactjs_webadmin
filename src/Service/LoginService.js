import React, { useContext, useState, useEffect } from 'react';



import { auth } from '../FirebaseCofig/Firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    
    
    function login(email, password){
        if(email === "admin@gmail.com"){
            return auth.signInWithEmailAndPassword(email, password);
        }
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(admin => {
            
            setCurrentUser(admin);
            setLoading(false);
        })

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        logout
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}