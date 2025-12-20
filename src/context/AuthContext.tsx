import { createContext, useState } from "react"
import { login, logout } from "../api/auth"

interface AuthContextType {
  accessToken: string | null
  isAuthenticated: boolean
  authLogin: (email: string, password: string) => Promise<void>
  authLogout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem("accessToken")
  })
  const isAuthenticated = !!accessToken

  const authLogin = async (email: string, password: string) => {
    try {
      const response = await login(email, password)
      const { AccessToken, IdToken, RefreshToken } = response

      if (AccessToken) localStorage.setItem("accessToken", AccessToken)
      if (IdToken) localStorage.setItem("idToken", IdToken)
      if (RefreshToken) localStorage.setItem("refreshToken", RefreshToken)

      setAccessToken(AccessToken)
      localStorage.setItem("accessToken", AccessToken)
    } catch {
      throw new Error("Login failed")
    }
  }

  const authLogout = async () => {
    const res = await logout()
    setAccessToken(null)
    localStorage.removeItem("accessToken")
    localStorage.removeItem("idToken")
    localStorage.removeItem("refreshToken")

    return res.data
  }

  return (
    <AuthContext.Provider
      value={{ accessToken, isAuthenticated, authLogin, authLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
