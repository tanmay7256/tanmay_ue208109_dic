import React, { createContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a provider component that holds the state
const MyProvider = ({ children }) => {
    const [authenticated, setIsAuthenticated] = useState(0);

    return (
        <MyContext.Provider value={{ authenticated, setIsAuthenticated }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
