import React, { createContext, useContext } from "react";

export const AuthContext = createContext();
export function AuthProvider({ children}) {
    
    const obj = {
        name: "Anand",
        city: "Hyderabad",
    }
    const userName = "anand"
    return (
        <AuthContext.Provider value={{obj ,userName}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

// import React, { createContext, useContext } from "react";
// import { Children } from "react";
// export const AuthContext = createContext()
// export function AuthProvider({ children }) {
//     const obj = {
//         name: "Anand",
//         location: "Hyderabad"
//     };
//     return (
//         <AuthContext.Provider value={obj}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
// export const useAuth = () => useContext(AuthContext);