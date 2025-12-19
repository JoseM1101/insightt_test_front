import React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"
import { createPortal } from "react-dom"

type TextColor = "primary" | "error" | "secondary"

interface ModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  confirmLabel?: string
  confirmColor?: TextColor
  cancelColor?: TextColor
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  confirmLabel = "Confirm",
  confirmColor = "primary",
  cancelColor = "error",
  children,
}) => {
  return createPortal(
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ mt: 1 }}>{children}</DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color={cancelColor}>
          Cancel
        </Button>
        <Button variant="contained" color={confirmColor} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>,
    document.body
  )
}

export default Modal
