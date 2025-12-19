import type { Task } from "../types"
import TodoItem from "./TodoItem"
import { List } from "@mui/material"

export default function TodoList({ tasks }: { tasks: Task[] }) {
  return (
    <List sx={{ py: 0 }}>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </List>
  )
}
