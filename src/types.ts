export interface TaskPostData {
  title: string
  completed: boolean
}

export interface Task extends TaskPostData {
  id: string
}
