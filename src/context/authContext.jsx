import { createContext, useState } from "react";
import {
    saveToken,
    saveUser,
    removeToken,
    removeUser,
    getToken,
    getUser
} from "../utils/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(getToken());

    const [user, setUser] = useState(getUser());

    const login = (token, user) => {

        saveToken(token);
        saveUser(user);

        setToken(token);
        setUser(user);

    };

    const logout = () => {

        removeToken();
        removeUser();

        setToken(null);
        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                logout,
                isAuthenticated: !!token
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};