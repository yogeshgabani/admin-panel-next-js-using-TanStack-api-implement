"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext({});

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in on mount
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (token && userData) {
            setUser(JSON.parse(userData));
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            // Simulate API call - Replace with your actual API endpoint
            // const response = await apiClient.post('/auth/login', { email, password });

            // Mock response for demo
            const mockUser = {
                id: 1,
                name: "John Doe",
                email: email,
            };
            const mockToken = "mock-jwt-token-" + Date.now();

            localStorage.setItem("token", mockToken);
            localStorage.setItem("user", JSON.stringify(mockUser));

            setUser(mockUser);
            setIsAuthenticated(true);

            return mockUser;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Login failed");
        }
    };

    const signup = async (name, email, password) => {
        try {
            // Simulate API call - Replace with your actual API endpoint
            // const response = await apiClient.post('/auth/signup', { name, email, password });

            // Mock response for demo
            const mockUser = {
                id: Date.now(),
                name: name,
                email: email,
            };
            const mockToken = "mock-jwt-token-" + Date.now();

            localStorage.setItem("token", mockToken);
            localStorage.setItem("user", JSON.stringify(mockUser));

            setUser(mockUser);
            setIsAuthenticated(true);

            return mockUser;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Signup failed");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsAuthenticated(false);
        router.push("/login");
    };

    const value = {
        user,
        isAuthenticated,
        isLoading,
        login,
        signup,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

