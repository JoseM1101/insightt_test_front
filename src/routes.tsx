import { createBrowserRouter } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
import TodoPage from "./pages/Todo"
import LoginPage from "./pages/Login"
import SignInPage from "./pages/SignIn"

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
    path: "/todo",
    element: <TodoPage />,
  },
]

export const router = createBrowserRouter(routes)
