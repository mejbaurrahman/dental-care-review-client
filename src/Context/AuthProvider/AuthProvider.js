import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../Firebase/Firebase.init';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();
const auth = getAuth(app);
export default function AuthProvider({children}) {
   
    const [authError, setAuthError] = useState('');
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    // const navigate = useNavigate();
    const updateUser=(name, photoURL)=>{
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
          .then(user=>{
            const result = user.user;
            console.log(result);
          })
          .catch((error)=>{
            console.log(error.message);
          })
    }

   

    const login =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const registration = (name, photoUrl, email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
        
    }


    const logout =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setUser(user);
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }
    }, [user?.displayName])
    

    const authInfo= {registration, login, logout,loading, show, setShow, user, updateUser,setUser};
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
