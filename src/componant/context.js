import React, { createContext, useContext, useEffect, useState } from "react";
export const URL_API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState({ show: false, msg: "" })
    const [query, setQuery] = useState("titanic")

    const myData = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            if (data.Response === "True") {
                setIsLoading(false)
                setMovies(data.Search)
                setIsError({
                    show: false,
                    msg: ""
                })
            } else {
                setIsError({
                    show: true,
                    msg: data.Error
                })
            }
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            myData(`${URL_API}&s=${query}`)
        }, 500);
        // useEffect cleanup function
        return (() => {
            clearTimeout(timerOut)
        })
    }, [query])


    return <AppContext.Provider value={{ movies, isLoading, isError, query, setQuery }}>
        {children}
    </AppContext.Provider>
}

// globle custom hooks
const GlobleCustomHook = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, GlobleCustomHook }