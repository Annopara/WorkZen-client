import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const ParentComponent = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [newStaff, setNewStaff] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  // Assume you have a function to fetch events from the server
  const fetchEvents = async () => {
    try {
      // Make API call to fetch events
      const response = await axios.get(REACT_APP_API_URL + "/events");
      // Filter events with status "ongoing" and limit to 5 tasks
      const filteredEvents = response.data.filter(
        (event) => event.status === "Ongoing"
      );
      setEvents(filteredEvents.slice(0, 5)); // Update state with fetched events
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Call fetchEvents function on component mount
  useEffect(() => {
    fetchEvents();
  }, []); // Empty dependency array ensures it only runs once on mount

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    // Add logic to add new task and staff name
    // For simplicity, just console log the new task, staff name, and selected event
    console.log("New Task:", newTask);
    console.log("New Staff:", newStaff);
    console.log("Selected Event:", selectedEvent);
    handleClose();
  };

  if (!events || events.length === 0) {
    return (
      <Typography variant='body1' gutterBottom component='div'>
        No events available.
      </Typography>
    );
  }

  return (
    <Paper sx={{ padding: "2rem", margin: "0 2rem", width: "87%" }}>
      <Typography variant='h6' gutterBottom component='div'>
        Todo List for Events
      </Typography>
      <Button variant='contained' onClick={handleOpen}>
        Add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='task'
            label='Task'
            type='text'
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <TextField
            margin='dense'
            id='staff'
            label='Assigned To'
            type='text'
            fullWidth
            value={newStaff}
            onChange={(e) => setNewStaff(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id='event-label' sx={{ paddingTop: "1rem" }}>
              Select Ongoing Event
            </InputLabel>
            <Select
              labelId='event-label'
              id='event'
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
            >
              {events.map((event) => (
                <MenuItem key={event.event_id} value={event.event_id}>
                  {event.event_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTask}>Add</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Assigned To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.task}</TableCell>
                <TableCell>{event.assignedTo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
};

export default ParentComponent;
