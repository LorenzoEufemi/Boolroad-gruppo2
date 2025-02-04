import { createContext, useContext, useState } from "react";
import data from '../data/viaggi'

const GlobalContext = createContext()

// array di oggetti contentente tutti i viaggi
function GlobalProvider({ children }) {
    const [dataArr, setDataArr] = useState(data);

    const globalProviderValue = {
        dataArr,
        setDataArr,
    }

    return (
        <GlobalContext.Provider value={globalProviderValue}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }
