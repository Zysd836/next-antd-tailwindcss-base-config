import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { KEYS } from '@/utils/constant/constant'

type PropsT = {
  children?: React.ReactNode;
};
type ContextT = {
  authState: string | undefined
  setAuthState: (token: string | undefined) => void,
  isUserAuthenticated: () => boolean
}
const AuthContext = React.createContext({} as ContextT)
const { Provider } = AuthContext

// check authorized
const AuthProvider: React.FC<PropsT> = ({ children }) => {
  const [authState, setAuthState] = React.useState<string | undefined>(undefined)
  // query me
  useEffect(() => {
    const token = Cookies.get(KEYS.ACCESS_TOKEN)
    if (token) {
      setAuthState(token)
    }
  }, [])
  // query me
  const setUserAuthInfo = async (accessToken: string | undefined) => {
    setAuthState(accessToken)
  }

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    if (!authState) {
      return false
    }
    return true
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState: (token: string | undefined) => setUserAuthInfo(token),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
