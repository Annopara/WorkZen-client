import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  CreateNewFolderRounded,
  Group,
  AttachMoney,
} from "@mui/icons-material";
import "./WidgetCard.scss";

const WidgetCard = () => {
  return (
    <Grid container spacing={2} className='box-info'>
      {/* One */}
      <Grid item xs={12} sm={6} md={4}>
        <Box className='box' bgcolor='lightBlue'>
          <div className='icon-container'>
            <CreateNewFolderRounded className='icon' fontSize='medium' />
          </div>
          <div className='text'>
            <Typography variant='h3'>1020</Typography>
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
            <Typography variant='h3'>1020</Typography>
            <Typography>New Order</Typography>
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
            <Typography variant='h3'>1020</Typography>
            <Typography>New Order</Typography>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WidgetCard;
