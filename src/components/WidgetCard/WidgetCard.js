import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Typography } from "@mui/material";
import {
  CreateNewFolderRounded,
  Group,
  AttachMoney,
} from "@mui/icons-material";
import "./WidgetCard.scss";

const { REACT_APP_API_URL } = process.env;

const WidgetCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(REACT_APP_API_URL + "/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Calculate total budget
  const totalBudget = events.reduce(
    (total, event) => total + parseFloat(event.budget),
    0
  );

  // Calculate number of ongoing projects
  const ongoingProjects = events.filter(
    (event) => event.status === "Ongoing"
  ).length;

  // Calculate number of scheduled projects
  const scheduledProjects = events.filter(
    (event) => event.status === "Scheduled"
  ).length;

  return (
    <Grid container spacing={0} className='box-info'>
      {/* One */}
      <Grid item xs={12} sm={6} md={4}>
        <Box className='box' bgcolor='lightBlue'>
          <div className='icon-container'>
            <CreateNewFolderRounded className='icon' fontSize='medium' />
          </div>
          <div className='text'>
            <Typography variant='h3'>{scheduledProjects}</Typography>
            <Typography>New Order</Typography>
          </div>
        </Box>
      </Grid>
      {/* Two */}
      <Grid item xs={12} sm={6} md={4}>
        <Box className='box' bgcolor='#FFCDD2'>
          <div className='icon-container'>
            <Group className='icon' fontSize='medium' />
          </div>
          <div className='text'>
            <Typography variant='h3'>{ongoingProjects}</Typography>
            <Typography>Ongoing </Typography>
          </div>
        </Box>
      </Grid>

      {/* Three */}
      <Grid item xs={12} sm={6} md={4}>
        <Box className='box' bgcolor='lightGreen'>
          <div className='icon-container'>
            <AttachMoney className='icon' fontSize='medium' />
          </div>
          <div className='text'>
            <Typography variant='h3'>{totalBudget}</Typography>
            <Typography>Total Budgets</Typography>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WidgetCard;
