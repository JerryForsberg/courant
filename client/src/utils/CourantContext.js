import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import API from "./API";

const CourantContext = React.createContext();

export const useCourantContext = () => {
  return useContext(CourantContext);
};

function CourantRouter(props) {
    return <BrowserRouter {...props} />;
}

export function CourantProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
  
    function login() {
      setAuthenticated(true);
    }
  
    function logout(history) {
      setAuthenticated(false);
      // post route to logout session on backend
      API.logout();
  
      // Route them back to the login page
      return history.push("/login");
    }

    return (
        <CourantRouter>
            <CourantContext.Provider
                value={{
                    login,
                    logout,
                    authenticated,
                    setAuthenticated
                }}
            >
                {children}
            </CourantContext.Provider>
        </CourantRouter>
    )

}