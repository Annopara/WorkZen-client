import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [rows, setRows] = React.useState([
    {
      order_id: 1,
      client_name: "Lois Pearson",
      event_name: "Birthday Party",
      date_created: "2024-02-20",
      due_date: "2024-03-20",
      location: "Central Park",
      budget: "$1500",
      invitees: 50,
      status: "Ongoing",
    },
    {
      order_id: 2,
      client_name: "John Doe",
      event_name: "Wedding",
      date_created: "2024-02-21",
      due_date: "2024-03-21",
      location: "Beach",
      budget: "$2000",
      invitees: 100,
      status: "Completed",
    },
    {
      order_id: 3,
      client_name: "Jane Smith",
      event_name: "Conference",
      date_created: "2024-02-22",
      due_date: "2024-03-22",
      location: "Convention Center",
      budget: "$3000",
      invitees: 200,
      status: "Not Started",
    },
  ]);

  const [showAll, setShowAll] = React.useState(false);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleStatusChange = (index, newStatus) => {
    const newRows = [...rows];
    newRows[index].status = newStatus;
    setRows(newRows);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ padding: "2rem", margin: "0 2rem", width: "87%" }}
    >
      <Typography variant='h5' gutterBottom>
        Recent Projects
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead sx={{ backgroundColor: "#800080" }}>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell>Client Name</StyledTableCell>
            <StyledTableCell>Event Name</StyledTableCell>
            <StyledTableCell>Date Created</StyledTableCell>
            <StyledTableCell>Due Date</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Budget</StyledTableCell>
            <StyledTableCell>Invitees</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, showAll ? rows.length : 3).map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row.order_id}</StyledTableCell>
              <StyledTableCell>{row.client_name}</StyledTableCell>
              <StyledTableCell>{row.event_name}</StyledTableCell>
              <StyledTableCell>{row.date_created}</StyledTableCell>
              <StyledTableCell>{row.due_date}</StyledTableCell>
              <StyledTableCell>{row.location}</StyledTableCell>
              <StyledTableCell>{row.budget}</StyledTableCell>
              <StyledTableCell>{row.invitees}</StyledTableCell>
              <StyledTableCell>
                <FormControl>
                  <Select
                    value={row.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <MenuItem value='Not Started' style={{ color: "red" }}>
                      Not Started
                    </MenuItem>
                    <MenuItem value='Ongoing' style={{ color: "amber" }}>
                      Ongoing
                    </MenuItem>
                    <MenuItem value='Completed' style={{ color: "green" }}>
                      Completed
                    </MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Link to='/projects'>
        {!showAll && <Button onClick={handleSeeMore}>See More</Button>}
      </Link>
    </TableContainer>
  );
}
