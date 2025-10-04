import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const navigate = useNavigate();

    const loginAuthComp = () => {
        alert('Login Auth');
        navigate('/login');
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