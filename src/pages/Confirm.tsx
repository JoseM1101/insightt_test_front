import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material"
import { confirm } from "../api/auth"

export default function ConfirmPage() {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleConfirm = async () => {
    setError("")
    setLoading(true)

    try {
      await confirm(email, code)
      setSuccess(true)

      setTimeout(() => navigate("/"), 1500)
    } catch (err: unknown) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Confirmation failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        mx: "auto",
        py: 8,
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ width: "100%", p: 4 }}>
        <Box display="flex" flexDirection="column" gap={3} alignItems="center">
          <Typography variant="h5">Confirm Account</Typography>

          {error && <Alert severity="error">{error}</Alert>}
          {success && (
            <Alert severity="success">Account confirmed! Redirecting...</Alert>
          )}

          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Confirmation Code"
            type="text"
            fullWidth
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleConfirm}
            disabled={loading || success}
          >
            {loading ? <CircularProgress size={24} /> : "Confirm"}
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
