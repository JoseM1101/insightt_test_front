import { useState } from "react"
import {
  Typography,
  Container,
  Box,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { samples } from "../tasks"
import TodoList from "../components/TodoList"
import type { Task } from "../types"

export default function TodoPage() {
  const [tasks, setTasks] = useState(samples)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const handleAddClick = () => setIsModalOpen(true)
  const handleCancel = () => {
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

      <Dialog open={isModalOpen} onClose={handleCancel} fullWidth maxWidth="xs">
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Title"
            type="text"
            fullWidth
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirmAdd}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
