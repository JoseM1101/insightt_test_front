import { useState } from "react"
import { useNavigate, Link as RouterLink } from "react-router-dom"
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material"
import { signup } from "../api/auth"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSignIn = async () => {
    setError("")

    try {
      await signup(email, password)
      navigate("/confirm")
    } catch (err: unknown) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Sign up failed")
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
          <Typography variant="h5">Create Account</Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignIn}
          >
            Sign Up
          </Button>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Already have an account?{" "}
            <Link component={RouterLink} to="/">
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}
