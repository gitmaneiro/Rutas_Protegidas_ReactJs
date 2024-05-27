import { createContext, useState } from "react";


export const AppContext = createContext({
    user:null,
    token:null,
    setUser:()=>{},
    setToken:()=>{},

});

export const AppProvider= ({children})=>{

    const [user, setUser]= useState({});
    const [token, _setToken]= useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token)=>{

        _setToken(token)

        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }

    }


    return(
        <AppContext.Provider value={{user, token, setUser, setToken}}>
            {children}
        </AppContext.Provider>
    )
}