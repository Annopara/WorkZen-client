import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9f20e9",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    blue: {
      main: "#2196f3",
    },
    green: {
      main: "#4caf50",
    },
    orange: {
      main: "#ff9800",
    },
    red: {
      main: "#f44336",
    },
  },
});
