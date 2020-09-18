import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ScheduleIcon from "@material-ui/icons/Schedule";
import React from "react";
import { useLocalStorage } from "web-api-hooks";
import Base from "./components/Base";
import OperatorGrid from "./components/OperatorGrid";
import FacilityType from "./scheduler/facility-type";
import { EliteLevel, maxEliteLevel, Operator } from "./scheduler/operator";
import OPERATORS, { FREE_OPERATOR_NAMES } from "./scheduler/operators";

const DEFAULT_FACILITY_LEVEL = 3;

const freeOperators = (): Record<string, EliteLevel> =>
  Object.fromEntries(FREE_OPERATOR_NAMES.map((name) => [name, "Elite 0"]));

const appTheme = createMuiTheme({
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

const useStyles = makeStyles((theme) =>
  createStyles({
    scheduleFab: {
      position: "sticky",
      float: "right",
      bottom: theme.spacing(3),
    },
  })
);

export default function App(): React.ReactElement {
  const classes = useStyles();

  const [tradingPosts, setTradingPosts] = useLocalStorage(
    "tradingPosts",
    [] as (1 | 2 | 3)[]
  );
  const [factories, setFactories] = useLocalStorage(
    "factories",
    [] as (1 | 2 | 3)[]
  );
  const [powerPlants, setPowerPlants] = useLocalStorage(
    "powerPlants",
    [] as (1 | 2 | 3)[]
  );
  const [ownedOperators, setOwnedOperators] = useLocalStorage(
    "ownedOperators",
    freeOperators
  );

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

  function handleResetBase() {
    setTradingPosts([]);
    setFactories([]);
    setPowerPlants([]);
  }

  function operatorSort(a: Operator, b: Operator) {
    const byOwned =
      (Object.prototype.hasOwnProperty.call(ownedOperators, a.name) ? -1 : 1) -
      (Object.prototype.hasOwnProperty.call(ownedOperators, b.name) ? -1 : 1);
    if (byOwned !== 0) {
      return byOwned;
    }
    const byRarityAsc = a.rarity - b.rarity;
    if (byRarityAsc !== 0) {
      return byRarityAsc;
    }
    return a.name.localeCompare(b.name);
  }

  function handleEliteSelect(
    operatorName: string,
    eliteLevel?: EliteLevel
  ): void {
    setOwnedOperators((prev: Record<string, EliteLevel>) => {
      const newObj = { ...prev };
      if (!eliteLevel) {
        delete newObj[operatorName];
      } else {
        newObj[operatorName] = eliteLevel;
      }
      return newObj;
    });
  }

  function handleAddAllOperators() {
    setOwnedOperators(
      Object.fromEntries(
        OPERATORS.map((operator) => [operator.name, maxEliteLevel(operator)])
      )
    );
  }

  function handleResetOperators() {
    setOwnedOperators(freeOperators());
  }

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <Typography component="h1" variant="h4">
            {
              // TODO h4 font size breaks at about 516 px (i.e. xs)
            }
            Arknights Base Rotation Planner
          </Typography>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {
            // TODO may need to change md={6} to lg={6}
          }
          <Grid item sm={12} md={6}>
            <OperatorGrid
              operators={OPERATORS.sort(operatorSort)}
              ownedOperators={ownedOperators}
              onEliteSelect={handleEliteSelect}
              onAddAll={handleAddAllOperators}
              onReset={handleResetOperators}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Base
              {...{ tradingPosts, factories, powerPlants }}
              onAddFacility={handleAddFacility}
              onRemoveFacility={handleRemoveFacility}
              onDecreaseFacilityLevel={handleDecreaseFacilityLevel}
              onIncreaseFacilityLevel={handleIncreaseFacilityLevel}
              onReset={handleResetBase}
            />
          </Grid>
        </Grid>

        <Fab className={classes.scheduleFab} variant="extended" color="primary">
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
