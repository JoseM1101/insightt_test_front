import { useEffect, useState, useCallback } from "react"
import * as taskApi from "../api/tasks"
import type { Task, CreateTaskData, UpdateTaskData } from "../types"

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchTasks = useCallback(async () => {
    try {
      setError(null)
      const data = await taskApi.getTasks()
      setTasks(data)
    } catch {
      setError("Failed to load tasks")
    }
  }, [])

  useEffect(() => {
    Promise.resolve().then(() => fetchTasks())
  }, [fetchTasks])

  const createTask = async (
    data: CreateTaskData
  ): Promise<Task | undefined> => {
    try {
      const task = await taskApi.createTask(data)
      await fetchTasks()
      return task
    } catch {
      setError("Failed to create task")
    }
  }

  const updateTask = async (
    id: string,
    data: UpdateTaskData
  ): Promise<Task | undefined> => {
    try {
      const task = await taskApi.updateTask(id, data)
      await fetchTasks()
      return task
    } catch {
      setError("Failed to update task")
    }
  }

  const toggleCompleted = async (id: string): Promise<Task | undefined> => {
    try {
      const task = await taskApi.toggleTaskCompleted(id)
      await fetchTasks()
      return task
    } catch {
      setError("Failed to update task")
    }
  }

  const deleteTask = async (id: string): Promise<Task | undefined> => {
    try {
      const task = await taskApi.deleteTask(id)
      await fetchTasks()
      return task
    } catch {
      setError("Failed to delete task")
    }
  }

  return {
    tasks,
    error,
    refetch: fetchTasks,
    createTask,
    updateTask,
    toggleCompleted,
    deleteTask,
  }
}
