import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import FacilityType from "../operators/facility-type";
import Facility from "./Facility";

const useStyles = makeStyles((theme) =>
  createStyles({
    addTradingPostButton: {
      width: "100%",
      backgroundColor: theme.palette.tradingPost.main,
      "&:hover": {
        backgroundColor: theme.palette.tradingPost.dark,
      },
    },
    addFacilityButton: {
      width: "100%",
      backgroundColor: theme.palette.factory.main,
      "&:hover": {
        backgroundColor: theme.palette.factory.dark,
      },
    },
    addPowerPlantButton: {
      width: "100%",
      backgroundColor: theme.palette.powerPlant.main,
      "&:hover": {
        backgroundColor: theme.palette.powerPlant.dark,
      },
    },
  })
);

interface BaseProps {
  tradingPosts: (1 | 2 | 3)[];
  factories: (1 | 2 | 3)[];
  powerPlants: (1 | 2 | 3)[];
  onAddFacility: (facilityType: FacilityType) => void;
  onRemoveFacility: (facilityType: FacilityType, index: number) => void;
  onDecreaseFacilityLevel: (facilityType: FacilityType, index: number) => void;
  onIncreaseFacilityLevel: (facilityType: FacilityType, index: number) => void;
}

export default function Base(props: BaseProps): React.ReactElement {
  const classes = useStyles();
  const {
    tradingPosts,
    factories,
    powerPlants,
    onAddFacility,
    onRemoveFacility,
    onDecreaseFacilityLevel,
    onIncreaseFacilityLevel,
  } = props;

  return (
    <>
      <Box mt={3} mb={2}>
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
              onClick={() => onAddFacility(FacilityType.TRADING_POST)}
              disabled={
                tradingPosts.length >= 5 ||
                tradingPosts.length + factories.length + powerPlants.length >= 9
              }
            >
              Add Trading Post
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box mb={2}>
            <Button
              className={classes.addFacilityButton}
              variant="contained"
              onClick={() => onAddFacility(FacilityType.FACTORY)}
              disabled={
                factories.length >= 5 ||
                tradingPosts.length + factories.length + powerPlants.length >= 9
              }
            >
              Add Factory
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box mb={2}>
            <Button
              className={classes.addPowerPlantButton}
              variant="contained"
              onClick={() => onAddFacility(FacilityType.POWER_PLANT)}
              disabled={
                powerPlants.length >= 3 ||
                tradingPosts.length + factories.length + powerPlants.length >= 9
              }
            >
              Add Power Plant
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {tradingPosts.map((level, i) => (
            <Facility
              type={FacilityType.TRADING_POST}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              level={level}
              onRemove={() => onRemoveFacility(FacilityType.TRADING_POST, i)}
              onIncreaseLevel={() =>
                onIncreaseFacilityLevel(FacilityType.TRADING_POST, i)
              }
              onDecreaseLevel={() =>
                onDecreaseFacilityLevel(FacilityType.TRADING_POST, i)
              }
            />
          ))}
        </Grid>
        <Grid item xs={4}>
          {factories.map((level, i) => (
            <Facility
              type={FacilityType.FACTORY}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              level={level}
              onRemove={() => onRemoveFacility(FacilityType.FACTORY, i)}
              onIncreaseLevel={() =>
                onIncreaseFacilityLevel(FacilityType.FACTORY, i)
              }
              onDecreaseLevel={() =>
                onDecreaseFacilityLevel(FacilityType.FACTORY, i)
              }
            />
          ))}
        </Grid>
        <Grid item xs={4}>
          {powerPlants.map((level, i) => (
            <Facility
              type={FacilityType.POWER_PLANT}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              level={level}
              onRemove={() => onRemoveFacility(FacilityType.POWER_PLANT, i)}
              onIncreaseLevel={() =>
                onIncreaseFacilityLevel(FacilityType.POWER_PLANT, i)
              }
              onDecreaseLevel={() =>
                onDecreaseFacilityLevel(FacilityType.POWER_PLANT, i)
              }
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
