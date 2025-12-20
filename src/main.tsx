import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes.tsx"
import { CssBaseline } from "@mui/material"
import { AuthProvider } from "./context/AuthContext"
import { LoadingProvider } from "./context/LoadingContext.tsx"
import LoaderOverlay from "./components/LoaderOverlay.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <LoadingProvider>
        <CssBaseline />
        <RouterProvider router={router} />
        <LoaderOverlay />
      </LoadingProvider>
    </AuthProvider>
  </StrictMode>
)
