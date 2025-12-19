import { useState } from "react"
import {
  ListItem,
  Box,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import type { Task } from "../types"

export default function TodoItem({ task }: { task: Task }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)

  const handleCancel = () => {
    setEditedTitle(task.title)
    setIsEditing(false)
  }

  const handleConfirm = () => {
    // later: call update task API
    setIsEditing(false)
  }

  return (
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
              <IconButton disabled={task.completed} edge="end" color="error">
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
      }
    >
      <Checkbox checked={task.completed} edge="start" disabled={isEditing} />

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
  )
}
