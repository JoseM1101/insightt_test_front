import { useState } from "react"
import type { Task, UpdateTaskData } from "../types"
import {
  ListItem,
  Box,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import Modal from "./Modal"

interface TodoItemProps {
  task: Task
  onUpdate: (id: string, data: UpdateTaskData) => Promise<Task | undefined>
  onDelete: (id: string) => Promise<Task | undefined>
  onToggle: (id: string) => Promise<Task | undefined>
}

export default function TodoItem({
  task,
  onUpdate,
  onDelete,
  onToggle,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCancel = () => {
    setEditedTitle(task.title)
    setIsEditing(false)
  }

  const handleConfirm = async () => {
    if (!editedTitle.trim()) return
    await onUpdate(task.id, { title: editedTitle })
    setIsEditing(false)
  }

  const confirmDelete = async () => {
    await onDelete(task.id)
    setIsModalOpen(false)
  }

  return (
    <>
      <ListItem
        divider
        secondaryAction={
          <Box sx={{ display: "flex", gap: 1 }}>
            {isEditing ? (
              <>
                <IconButton edge="end" onClick={handleConfirm}>
                  <CheckIcon />
                </IconButton>
                <IconButton edge="end" onClick={handleCancel}>
                  <CloseIcon />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  disabled={task.completed}
                  edge="end"
                  onClick={() => setIsEditing(true)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  disabled={task.completed}
                  edge="end"
                  color="error"
                  onClick={() => setIsModalOpen(true)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </Box>
        }
      >
        <Checkbox
          checked={task.completed}
          edge="start"
          disabled={isEditing}
          onChange={() => onToggle(task.id)}
        />

        {isEditing ? (
          <TextField
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            size="small"
            autoFocus
            sx={{ width: 500 }}
          />
        ) : (
          <ListItemText
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "text.disabled" : "text.primary",
            }}
            primary={task.title}
          />
        )}
      </ListItem>

      <Modal
        title="Delete Task?"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        confirmLabel="Delete"
        confirmColor="error"
        cancelColor="primary"
      >
        <Typography>Are you sure you want to delete this task?</Typography>
      </Modal>
    </>
  )
}
