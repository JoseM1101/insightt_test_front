import { useState } from "react"
import {
  Typography,
  Container,
  Box,
  Button,
  Paper,
  TextField,
  List,
  IconButton,
  Tooltip,
} from "@mui/material"
import TodoItem from "../components/TodoItem"
import AddIcon from "@mui/icons-material/Add"
import LogoutIcon from "@mui/icons-material/Logout"
import Modal from "../components/Modal"
import { useTasks } from "../hooks/useTasks"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export default function TodoPage() {
  const { tasks, createTask, updateTask, deleteTask, toggleCompleted } =
    useTasks()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const navigate = useNavigate()
  const { authLogout } = useAuth()

  const handleAddClick = () => setIsModalOpen(true)

  const handleCancelAdd = () => {
    setNewTaskTitle("")
    setIsModalOpen(false)
  }

  const handleConfirmAdd = () => {
    if (newTaskTitle.trim() === "") return
    const newTask = { title: newTaskTitle, completed: false }
    createTask(newTask)
    setNewTaskTitle("")
    setIsModalOpen(false)
  }

  const handleLogout = () => {
    authLogout()
    navigate("/")
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

        <Box display="flex" gap={2} alignItems="center">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddClick}
          >
            Add Task
          </Button>

          <Tooltip title="Logout" sx={{ px: 0 }}>
            <IconButton onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Paper elevation={2}>
        <List sx={{ py: 0 }}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onUpdate={updateTask}
                onDelete={deleteTask}
                onToggle={toggleCompleted}
              />
            ))
          ) : (
            <Typography variant="body1" sx={{ p: 2 }}>
              No tasks to display.
            </Typography>
          )}
        </List>
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
