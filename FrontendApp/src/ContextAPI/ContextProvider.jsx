import React, {useContext, createContext, useState} from 'react'

const authContext = createContext()

const ContextProvider = ({childern}) => {
    const [user, setUser] = useState(null)
  return (
    <authContext.Provider value= {{user}}>{childern}</authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext)
export default ContextProvider