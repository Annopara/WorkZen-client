import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {
  Home,
  Storefront,
  SignalCellularAlt,
  Logout,
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const paths = ["/home", "/projects", "/reports", "/logout"];
    const index = paths.findIndex((path) => path === location.pathname);
    setSelectedIndex(index !== -1 ? index : 0);
  }, [location]);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 200,
        backgroundColor: "#FBFBFB",
        overflow: "auto",
        padding: "1rem",
        height: "100%",
      }}
    >
      <List
        component='nav'
        aria-label='main mailbox folders'
        sx={{
          paddingTop: "10px",
        }}
      >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
          component={NavLink}
          to='/home'
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemButton>
        {/* Projects */}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
          component={NavLink}
          to='/projects'
        >
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
          component={NavLink}
          to='/reports'
        >
          <ListItemIcon>
            <SignalCellularAlt />
          </ListItemIcon>
          <ListItemText primary='Reports' />
        </ListItemButton>
      </List>
      <Divider />
      <List component='nav' aria-label='secondary mailbox folder'>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={() => handleListItemClick(3)}
          component={NavLink}
          to='/logout'
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary='Logout' />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Sidebar;
