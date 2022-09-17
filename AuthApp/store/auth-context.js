import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    try {
      AsyncStorage.setItem("token", token);
    } catch (e) {
      console.error(e);
    }
  }

  function logout() {
    setAuthToken(null);
    try {
      AsyncStorage.removeItem("token");
    } catch (e) {
      // remove error
    }
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
