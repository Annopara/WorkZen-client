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
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import axios from "axios";

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
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const assignStaff = async (projectId, staffName) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/events/${projectId}/staff_name`,
      { staffName }
    );
    alert(`Task has been assigned to ${staffName} successfully.`);
  } catch (error) {
    console.error("Error assigning staff:", error);
    alert("Error assigning staff. Please try again later.");
  }
};

export default function CustomizedTables({ projectId }) {
  const [rows, setRows] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [newTask, setNewTask] = React.useState("");
  const [selectedStaff, setSelectedStaff] = React.useState("");

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/events`
        );
        const filteredProjects = response.data
          .filter(
            (project) => project.status === "Ongoing" && !project.staffName
          )
          .slice(0, 3);
        setRows(filteredProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleStatusChange = async (projectId, newStatus) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/events/${projectId}`, {
        status: newStatus,
      });
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.projectId === projectId ? { ...row, status: newStatus } : row
        )
      );
    } catch (error) {
      console.error("Error updating project status:", error);
      alert("Error updating project status. Please try again later.");
    }
  };

  const handleAssignStaff = async () => {
    if (!selectedStaff) {
      alert("Please select a staff member.");
      return;
    }
    if (!newTask) {
      alert("Please provide a task description.");
      return;
    }

    await assignStaff(selectedProject.projectId, selectedStaff);
    setSelectedProject(null);
    setNewTask("");
    setSelectedStaff("");
    fetchProjects();
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`
      );
      const filteredProjects = response.data
        .filter((project) => project.status === "Ongoing" && !project.staffName)
        .slice(0, 3);
      setRows(filteredProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <React.Fragment>
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
              <StyledTableCell>Theme</StyledTableCell>
              <StyledTableCell>Due Date</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Budget</StyledTableCell>
              <StyledTableCell>Invitees</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0, showAll ? rows.length : 3).map((row, index) => (
              <StyledTableRow
                key={index}
                onClick={() => setSelectedProject(row)}
              >
                <StyledTableCell>{row.event_id}</StyledTableCell>
                <StyledTableCell>{row.client_name}</StyledTableCell>
                <StyledTableCell>{row.event_name}</StyledTableCell>
                <StyledTableCell>{row.theme}</StyledTableCell>
                <StyledTableCell>
                  {new Date(row.due_date).toLocaleDateString()}
                </StyledTableCell>
                <StyledTableCell>{row.location}</StyledTableCell>
                <StyledTableCell>{row.budget}</StyledTableCell>
                <StyledTableCell>{row.invitees}</StyledTableCell>
                <StyledTableCell>
                  <FormControl>
                    <Select
                      value={row.status}
                      onChange={(e) =>
                        handleStatusChange(projectId, e.target.value)
                      }
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
          {!showAll && (
            <Button sx={{ color: "#800080" }} onClick={handleSeeMore}>
              See More
            </Button>
          )}
        </Link>
      </TableContainer>
      {selectedProject && (
        <Modal
          open={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper sx={{ width: 400, p: 4 }}>
            <Typography variant='h6' gutterBottom>
              Assign Task to {selectedProject.event_name}
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
              >
                <MenuItem value='John'>John</MenuItem>
                <MenuItem value='Jane'>Jane</MenuItem>
                <MenuItem value='Doe'>Doe</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label='Task Description'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              variant='contained'
              sx={{ backgroundColor: "#800080", color: "white" }}
              onClick={handleAssignStaff}
            >
              Assign
            </Button>
          </Paper>
        </Modal>
      )}
    </React.Fragment>
  );
}
