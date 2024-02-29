import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const { REACT_APP_API_URL } = process.env;

function Row({ event }) {
  const [open, setOpen] = useState(false);
  const [staffs, setStaffs] = useState([]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "green";
      case "ongoing":
        return "amber";
      case "scheduled":
        return "red";
      default:
        return "white";
    }
  };

  // Function to convert timestamp to regular time format
  const convertTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  useEffect(() => {
    async function fetchStaffs() {
      try {
        const result = await axios.get(
          `${REACT_APP_API_URL}/events/${event.event_id}/staffs`
        ); // Updated endpoint to fetch staffs for the event
        setStaffs(result.data);
      } catch (error) {
        console.error("Error fetching staffs:", error);
      }
    }

    fetchStaffs();
  }, [event]);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset", cursor: "pointer" },
          backgroundColor: open ? "#f0f0f0" : "inherit",
        }}
        onClick={() => setOpen(!open)}
        hover
      >
        <TableCell>
          <IconButton aria-label='expand row' size='small'>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {event.event_id}
        </TableCell>
        <TableCell>{event.event_name}</TableCell>
        <TableCell>{event.client_name}</TableCell>
        <TableCell style={{ backgroundColor: getStatusColor(event.status) }}>
          {event.status}
        </TableCell>
        <TableCell>{convertTimestamp(event.due_date)}</TableCell>
        <TableCell>{event.location}</TableCell>
        <TableCell>{event.budget}</TableCell>
        <TableCell>{event.invitees}</TableCell>
        <TableCell align='right'>
          <button onClick={() => setOpen(!open)}>More Info</button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Additional Details
              </Typography>
              <Typography variant='body1'>
                <div>
                  <strong>Notes:</strong> {event.notes}
                </div>
                <div>
                  <strong>Theme:</strong> {event.theme}
                </div>
                <div>
                  <strong>Special Requirements:</strong>{" "}
                  {event.special_requirements}
                </div>
                <div>
                  <strong>Staffs Assigned:</strong>{" "}
                  {staffs.map((staff, index) => (
                    <span key={index}>{staff.name}</span>
                  ))}
                </div>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  event: PropTypes.object.isRequired,
};

export default function CollapsibleTable() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const { filter } = useParams();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const result = await axios.get(REACT_APP_API_URL + "/events");
        setEvents(result.data);
        setFilteredEvents(result.data);
      } catch (error) {
        console.error("Form submission error", error);
      }
    }

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events;

    if (searchQuery) {
      filtered = filtered.filter((event) =>
        String(event.event_id).toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((event) => event.status === filterStatus);
    }

    setFilteredEvents(filtered);
  }, [events, searchQuery, filterStatus]);

  useEffect(() => {
    if (filter) {
      setFilterStatus(filter);
    }
  }, [filter]);

  return (
    <div>
      <input
        type='text'
        placeholder='Search by ID...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='ongoing'>Ongoing</option>
        <option value='scheduled'>Scheduled</option>
      </select>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Order ID</TableCell>
              <TableCell>Event Name</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Invitees</TableCell>
              <TableCell align='right'>More Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEvents.map((event, index) => (
              <Row key={index} event={event} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
