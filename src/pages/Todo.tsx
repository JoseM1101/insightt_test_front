import {
  Typography,
  Container,
  Box,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

export default function TodoPage() {
  return (
    <Container maxWidth="md" sx={{ mx: "auto", py: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">My Tasks</Typography>

        <Button variant="contained" startIcon={<AddIcon />}>
          Add Task
        </Button>
      </Box>

      <Paper elevation={2}>
        <List sx={{ py: 0 }}>
          <ListItem
            divider
            secondaryAction={
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton edge="end">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <Checkbox edge="start" />
            <ListItemText primary="Example task title" />
          </ListItem>
          <ListItem
            divider
            secondaryAction={
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton disabled edge="end">
                  <EditIcon />
                </IconButton>
                <IconButton disabled edge="end" color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <Checkbox edge="start" />
            <ListItemText
              sx={{ textDecoration: "line-through", color: "text.disabled" }}
              primary="Example task title"
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  )
}
