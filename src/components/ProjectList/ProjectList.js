import * as React from "react";
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

const events = [
  {
    order_id: 1,
    event_name: "Birthday Party",
    client_name: "Lois Pearson",
    status: "Ongoing",
    due_date: "2024-03-15",
    location: "Central Park",
    budget: "$1500",
    invitees: 50,
    notes: "Please ensure that the birthday cake is gluten-free.",
    theme: "Under the Stars",
    special_requirements:
      "Wheelchair accessibility required for the event venue.",
  },
  {
    order_id: 2,
    event_name: "Wedding",
    client_name: "John Doe",
    status: "Completed",
    due_date: "2024-04-20",
    location: "Beach",
    budget: "$5000",
    invitees: 100,
    notes: "Outdoor ceremony followed by indoor reception.",
    theme: "Vintage",
    special_requirements: "Vegetarian meal options required.",
  },
];

function Row({ event }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {event.order_id}
        </TableCell>
        <TableCell>{event.event_name}</TableCell>
        <TableCell>{event.client_name}</TableCell>
        <TableCell>{event.status}</TableCell>
        <TableCell>{event.due_date}</TableCell>
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
  return (
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
          {events.map((event, index) => (
            <Row key={index} event={event} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
