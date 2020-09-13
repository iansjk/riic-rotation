import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Factory from "./Factory";
import PowerPlant from "./PowerPlant";
import TradingPost from "./TradingPost";

export default function Base(): React.ReactElement {
  return (
    <>
      <Box mt={3} mb={1}>
        <Typography component="h3" variant="h5">
          Base Layout
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TradingPost level={3} />
          <TradingPost level={3} />
        </Grid>
        <Grid item xs={4}>
          <Factory level={3} />
          <Factory level={3} />
          <Factory level={3} />
          <Factory level={2} />
          <Factory level={2} />
        </Grid>
        <Grid item xs={4}>
          <PowerPlant level={3} />
          <PowerPlant level={3} />
        </Grid>
      </Grid>
    </>
  );
}
