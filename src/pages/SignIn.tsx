import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = () => {
    console.log("Signing in with", {
      email,
      password,
    })
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
            Sign In
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
