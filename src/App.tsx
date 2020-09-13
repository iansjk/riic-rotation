import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Base from "./Base";
import OperatorGrid from "./OperatorGrid";

export default function App(): React.ReactElement {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
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
      </Container>
    </ThemeProvider>
  );
}
