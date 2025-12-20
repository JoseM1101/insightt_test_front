import { createBrowserRouter } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
import TodoPage from "./pages/Todo"
import LoginPage from "./pages/Login"
import SignInPage from "./pages/SignIn"
import ConfirmPage from "./pages/Confirm"
import ProtectedRoute from "./components/ProtectedRoute"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignInPage />,
  },
  {
    path: "/confirm",
    element: <ConfirmPage />,
  },
  {
    path: "/todo",
    element: (
      <ProtectedRoute>
        <TodoPage />
      </ProtectedRoute>
    ),
  },
]

export const router = createBrowserRouter(routes)
