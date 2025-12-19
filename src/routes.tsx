import { createBrowserRouter } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
// import RootLayout from './layouts/RootLayout';
import TodoPage from "./pages/Todo"
import LoginPage from "./pages/Login"

const routes: RouteObject[] = [
  {
    path: "/",
    // element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "todo",
        element: <TodoPage />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
