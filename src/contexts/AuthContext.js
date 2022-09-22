import { createContext, useContext } from "react";

import useLocalStorage from '../hooks/useLocalStorageHook';

export const AuthContext = createContext();

const initialAuthState = {
    accessToken: '',
    username: '',
    _id: ''
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('admin', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser(initialAuthState);
    }

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated: user.username}} >
            {children}
        </AuthContext.Provider>
    );
}

export const  useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}