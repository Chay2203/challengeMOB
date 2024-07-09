import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
export interface AuthContextType {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

// Create the context with a partial type
export const AuthContext = createContext<Partial<AuthContextType>>({});

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Define the provider props type
interface AuthContextProviderProps {
  children: ReactNode;
}

// Create the provider component
export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const isLoggedin = localStorage.getItem("loggedIn") || false;

  const [loggedIn, setLoggedIn] = useState(isLoggedin === "true");

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
