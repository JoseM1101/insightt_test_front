import api from "./axios"
import type { Task, CreateTaskData, UpdateTaskData } from "../types"

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await api.get("/tasks")
  return data
}

export const createTask = async (task: CreateTaskData): Promise<Task> => {
  const { data } = await api.post("/tasks", task)
  return data
}

export const updateTask = async (
  id: string,
  task: UpdateTaskData
): Promise<Task> => {
  const { data } = await api.patch(`/tasks/${id}`, task)
  return data
}

export const deleteTask = async (id: string): Promise<Task> => {
  return await api.delete(`/tasks/${id}`)
}

export const toggleTaskCompleted = async (id: string): Promise<Task> => {
  const { data } = await api.post(`/tasks/${id}/toggle`)
  return data
}
