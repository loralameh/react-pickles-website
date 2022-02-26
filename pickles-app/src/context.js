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
  const useSlider = (data) => {
    const [item, setitem] = useState(data)
    const [index, setIndex] = useState(0)
    const listLength = item.length
    useEffect(() => {
      const lastIndex = item.length - 1
      if (index < 0) {
        setIndex(lastIndex)
      }
      if (index > lastIndex) {
        setIndex(0)
      }
    }, [index, item])
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1)
      }, 5000)
      return () => {
        clearInterval(slider)
      }
    }, [index])
    return { index, setIndex, listLength }
  }
  return (
    <AppContext.Provider
      value={{
        ToggleNavbar,
        setIsNavbarShown,
        isNavbarShown,
        useFetch,
        useSlider,
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
