import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import FacilityType from "../operators/facility-type";
import Facility from "./Facility";

const DEFAULT_FACILITY_LEVEL = 3;

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

export default function Base(): React.ReactElement {
  const classes = useStyles();
  const [tradingPosts, setTradingPosts] = useState([] as (1 | 2 | 3)[]);
  const [factories, setFactories] = useState([] as (1 | 2 | 3)[]);
  const [powerPlants, setPowerPlants] = useState([] as (1 | 2 | 3)[]);

  function setFacilityArray(
    facilityType: FacilityType,
    mutation: (newArr: (1 | 2 | 3)[]) => void
  ) {
    let stateMutator: React.Dispatch<React.SetStateAction<(1 | 2 | 3)[]>>;
    if (facilityType === FacilityType.TRADING_POST) {
      stateMutator = setTradingPosts;
    } else if (facilityType === FacilityType.FACTORY) {
      stateMutator = setFactories;
    } else if (facilityType === FacilityType.POWER_PLANT) {
      stateMutator = setPowerPlants;
    } else {
      throw Error(`Unknown facility type: ${facilityType}`);
    }
    stateMutator((prev) => {
      const newArr = prev.slice();
      mutation(newArr);
      return newArr;
    });
  }

  function handleAddFacility(facilityType: FacilityType) {
    setFacilityArray(facilityType, (newArr) =>
      newArr.push(DEFAULT_FACILITY_LEVEL)
    );
  }

  function handleRemoveFacility(facilityType: FacilityType, index: number) {
    setFacilityArray(facilityType, (newArr) => newArr.splice(index, 1));
  }
  function handleIncreaseFacilityLevel(
    facilityType: FacilityType,
    index: number
  ) {
    setFacilityArray(facilityType, (newArr) => {
      // eslint-disable-next-line no-param-reassign
      newArr[index] += 1;
    });
  }
  function handleDecreaseFacilityLevel(
    facilityType: FacilityType,
    index: number
  ) {
    setFacilityArray(facilityType, (newArr) => {
      // eslint-disable-next-line no-param-reassign
      newArr[index] -= 1;
    });
  }

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
              onClick={() => handleAddFacility(FacilityType.TRADING_POST)}
              disabled={
                factories.length + tradingPosts.length >= 7 ||
                powerPlants.length + factories.length + tradingPosts.length >= 9
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
              onClick={() => handleAddFacility(FacilityType.FACTORY)}
              disabled={
                factories.length + tradingPosts.length >= 7 ||
                powerPlants.length + factories.length + tradingPosts.length >= 9
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
              onClick={() => handleAddFacility(FacilityType.POWER_PLANT)}
              disabled={
                powerPlants.length >= 3 ||
                powerPlants.length + factories.length + tradingPosts.length >= 9
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
              onRemove={() =>
                handleRemoveFacility(FacilityType.TRADING_POST, i)
              }
              onIncreaseLevel={() =>
                handleIncreaseFacilityLevel(FacilityType.TRADING_POST, i)
              }
              onDecreaseLevel={() =>
                handleDecreaseFacilityLevel(FacilityType.TRADING_POST, i)
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
              onRemove={() => handleRemoveFacility(FacilityType.FACTORY, i)}
              onIncreaseLevel={() =>
                handleIncreaseFacilityLevel(FacilityType.FACTORY, i)
              }
              onDecreaseLevel={() =>
                handleDecreaseFacilityLevel(FacilityType.FACTORY, i)
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
              onRemove={() => handleRemoveFacility(FacilityType.POWER_PLANT, i)}
              onIncreaseLevel={() =>
                handleIncreaseFacilityLevel(FacilityType.POWER_PLANT, i)
              }
              onDecreaseLevel={() =>
                handleDecreaseFacilityLevel(FacilityType.POWER_PLANT, i)
              }
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
