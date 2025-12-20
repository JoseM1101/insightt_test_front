import { Backdrop, CircularProgress } from "@mui/material"
import { useLoading } from "../hooks/useLoading"

const LoaderOverlay = () => {
  const { loading } = useLoading()

  return (
    <Backdrop
      open={loading}
      sx={{
        color: "#fff",
        zIndex: 9999,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoaderOverlay
