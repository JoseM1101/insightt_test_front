import { useState } from "react"
import {
  Typography,
  Container,
  Box,
  Button,
  Paper,
  TextField,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { samples } from "../tasks"
import TodoList from "../components/TodoList"
import type { Task } from "../types"
import Modal from "../components/Modal"

export default function TodoPage() {
  const [tasks, setTasks] = useState(samples)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const handleAddClick = () => setIsModalOpen(true)

  const handleCancelAdd = () => {
    setNewTaskTitle("")
    setIsModalOpen(false)
  }

  const handleConfirmAdd = () => {
    if (newTaskTitle.trim() === "") return
    const newTask = { title: newTaskTitle, completed: false }
    setTasks([...tasks, newTask as Task])
    setNewTaskTitle("")
    setIsModalOpen(false)
  }

  return (
    <Container maxWidth="md" sx={{ mx: "auto", py: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">My Tasks</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddClick}
        >
          Add Task
        </Button>
      </Box>

      <Paper elevation={2}>
        <TodoList tasks={tasks} />
      </Paper>

      <Modal
        title="Create New Task"
        open={isModalOpen}
        onClose={handleCancelAdd}
        onConfirm={handleConfirmAdd}
        confirmLabel="Add Task"
      >
        <TextField
          autoFocus
          margin="dense"
          label="Task Title"
          type="text"
          fullWidth
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </Modal>
    </Container>
  )
}
