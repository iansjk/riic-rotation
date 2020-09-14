import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import OperatorGrid from "./components/OperatorGrid";
import Base from "./components/Base";

export default function App(): React.ReactElement {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      tradingPost: {
        main: "rgb(48, 208, 249)",
        dark: "rgb(0, 159, 198)",
      },
      factory: {
        main: "rgb(255, 205, 0)",
        dark: "rgb(199, 157, 0)",
      },
      powerPlant: {
        main: "rgb(204, 255, 100)",
        dark: "rgb(152, 204, 47)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <Typography component="h1" variant="h4">
            Arknights Base Rotation Planner
          </Typography>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <OperatorGrid />
          </Grid>
          <Grid item sm={12} md={6}>
            <Base />
          </Grid>
        </Grid>

        <Fab variant="extended" color="primary">
          <Box display="flex">
            <Box display="flex" mr={1}>
              <ScheduleIcon />
            </Box>
            Schedule
          </Box>
        </Fab>
      </Container>
    </ThemeProvider>
  );
}
