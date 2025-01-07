import { createContext, useContext, useState, useEffect } from "react";


// Create and export context in one line
export const AuthContext = createContext();

// Auth Provider Component
const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const API = import.meta.env.VITE_API_URL;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT authentication - to get currently logged in user
    const userAuthentication = async () => {
        try {
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                setIsLoading(false);
            } else{
                setIsLoading(false);
            }
        } catch(error) {
            console.error("Error fetching user data");
        }
    };

    const getServices = async () => {
        try {
            const response = await fetch(`${API}/api/data/service`, {
                method: "GET",
            });
            
            if (response.ok) {
                const data = await response.json();
                setServices(data);
            }
        } catch (error) {
            console.log("Error fetching services:", error);
        }
    };

    useEffect(() => {
        getServices();
        userAuthentication();
    }, [token]);

    return (
        <AuthContext.Provider value={{
            isLoggedIn, 
            storeTokenInLS, 
            LogoutUser, 
            user,
            services,
            getServices,
            authorizationToken,
            isLoading,
            API,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook
const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};

export { AuthProvider, useAuth };
