
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) setUser(JSON.parse(storedUser));

        const timeout = setTimeout(() => logout(), 5 * 60 * 1000);
        return () => clearTimeout(timeout);
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
