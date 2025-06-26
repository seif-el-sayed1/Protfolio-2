import React, {createContext, useState} from 'react'

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    
    const [sideBar, setSideBar] = useState(false)

    const value = {
        sideBar,
        setSideBar
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )


}
