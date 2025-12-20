// src/context/LoadingContext.tsx
import { createContext, useState, useEffect } from "react"
import { setLoadingHandlers } from "./loadingStore"

interface LoadingContextType {
  loading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [loading, setLoading] = useState(false)

  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    setLoadingHandlers(startLoading, stopLoading)
  }, [])

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext
