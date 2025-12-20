import api from "./axios"

export const signup = async (email: string, password: string) => {
  const res = await api.post("/auth/signup", { email, password })
  return res.data
}

export const confirm = async (email: string, code: string) => {
  const res = await api.post("/auth/confirm", { email, code })
  return res.data
}

export const login = async (email: string, password: string) => {
  const res = await api.post("/auth/login", { email, password })

  return res.data
}

export const logout = async () => {
  const res = await api.post("/auth/logout")
  return res.data
}
