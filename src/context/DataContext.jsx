import { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const loginAuthComp = () => {
        alert('Login Auth')
    }

    return (
        <DataContext.Provider value={{
            loginAuthComp
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;