import { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

export const RouterContext = createContext();

const RouterContextProvider = ({ children }) => {
    const router = useRouter();

    return (
        <RouterContext.Provider value={{ router }}>
            {children}
        </RouterContext.Provider>
    );
};

export default RouterContextProvider;
