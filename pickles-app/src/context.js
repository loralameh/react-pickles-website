import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isNavbarShown, setIsNavbarShown] = useState(false)

  const ToggleNavbar = () => {
    setIsNavbarShown(!isNavbarShown)
  }
  const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setdata] = useState([])

    const getdata = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setdata(data)
      setLoading(false)
    }

    useEffect(() => {
      getdata()
    }, [url])
    return { loading, data }
  }
  return (
    <AppContext.Provider
      value={{
        ToggleNavbar,
        setIsNavbarShown,
        isNavbarShown,
        useFetch,
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
