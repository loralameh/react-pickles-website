import React, { useState, useContext } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false)

  const ToggleNavbar = () => {
    setIsNavbarShown(!isNavbarShown)
  }

  return (
    <AppContext.Provider
      value={{
        ToggleNavbar,
        setIsNavbarShown,
        isNavbarShown,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
