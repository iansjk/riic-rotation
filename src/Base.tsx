import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Factory from "./Factory";
import PowerPlant from "./PowerPlant";
import TradingPost from "./TradingPost";

const useStyles = makeStyles((theme) =>
  createStyles({
    addTradingPostButton: {
      width: "100%",
      backgroundColor: theme.palette.tradingPost.main,
    },
    addFactoryButton: {
      width: "100%",
      backgroundColor: theme.palette.factory.main,
    },
    addPowerPlantButton: {
      width: "100%",
      backgroundColor: theme.palette.powerPlant.main,
    },
  })
);

export default function Base(): React.ReactElement {
  const classes = useStyles();

  return (
    <>
      <Box mt={3} mb={1}>
        <Typography component="h3" variant="h5">
          Base Layout
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box mb={2}>
            <Button
              className={classes.addTradingPostButton}
              variant="contained"
            >
              Add Trading Post
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box mb={2}>
            <Button className={classes.addFactoryButton} variant="contained">
              Add Factory
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box mb={2}>
            <Button className={classes.addPowerPlantButton} variant="contained">
              Add Power Plant
            </Button>
          </Box>
        </Grid>
      </Grid>
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
