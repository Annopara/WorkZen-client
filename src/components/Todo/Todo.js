import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";

function Todo() {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");

  const handleModalOpen = (content) => {
    setOpenModal(true);
    setModalContent(content);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <Paper sx={{ margin: "1rem 0", padding: "2.2rem 0.8rem" }}>
        <Typography variant='h4' gutterBottom>
          Message List
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem
            alignItems='flex-start'
            button
            onClick={() =>
              handleModalOpen(
                "Ali Connors — I'll be in your neighborhood doing errands this weekend. Do you want to catch up?"
              )
            }
          >
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem
            alignItems='flex-start'
            button
            onClick={() =>
              handleModalOpen(
                "Travis Howard — Wish I could come, but I'm out of town this weekend. Maybe next time!"
              )
            }
          >
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />

          <ListItem
            alignItems='flex-start'
            button
            onClick={() =>
              handleModalOpen(
                "John Doe — Looking forward to the team meeting tomorrow. Any agenda items we should discuss?"
              )
            }
          >
            <ListItemAvatar>
              <Avatar alt='John Doe' src='/static/images/avatar/4.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Team Meeting Tomorrow'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    John Doe
                  </Typography>
                  {
                    " — Looking forward to the team meeting tomorrow. Any agenda items we should discuss?"
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem
            alignItems='flex-start'
            button
            onClick={() =>
              handleModalOpen(
                "Jane Smith — Reminder: project deadline is approaching. Let's make sure everything is on track."
              )
            }
          >
            <ListItemAvatar>
              <Avatar alt='Jane Smith' src='/static/images/avatar/5.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Project Deadline Reminder'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Jane Smith
                  </Typography>
                  {
                    " — Reminder: project deadline is approaching. Let's make sure everything is on track."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </List>

        <Dialog open={openModal} onClose={handleModalClose}>
          <DialogTitle>Full Text</DialogTitle>
          <DialogContent>
            <Typography>{modalContent}</Typography>
            <TextField
              autoFocus
              margin='dense'
              id='reply'
              label='Reply'
              type='text'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose}>Close</Button>
            <Button onClick={handleModalClose}>Send</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </React.Fragment>
  );
}

export default Todo;
