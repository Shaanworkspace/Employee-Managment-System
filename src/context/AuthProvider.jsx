import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthConstent = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const data = getLocalStorage()
    useEffect(()=>{
        setLocalStorage()
        const {employees,admin} = getLocalStorage();
        setUser({employees,admin});
    },[])

    return (
        <div>
            <AuthConstent.Provider value={user}>
                {children}
            </AuthConstent.Provider>
        </div>
    )
}

export default AuthProvider
