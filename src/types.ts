export interface CreateTaskData {
  title: string
  completed?: boolean
}

export interface UpdateTaskData {
  title?: string
}

export interface Task {
  id: string
  title: string
  completed: boolean
}
