import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import React from "react";
import FacilityType from "./operators/facility-type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    facilityRibbon: {
      flexShrink: 0,
      width: theme.spacing(2),
    },
    facilityInfo: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
  })
);

interface FacilityLevelIndicatorProps {
  color: string | undefined;
}
function FacilityLevelIndicator(
  props: FacilityLevelIndicatorProps
): React.ReactElement {
  const { color } = props;

  return (
    <Box mr="1px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="26"
        viewBox="0 0 11 26.4"
      >
        <path d="M5.5 0.7 0.5 5.7v15l5 5 5-5V5.7Z" style={{ fill: color }} />
      </svg>
    </Box>
  );
}

interface BaseFacilityProps {
  type: FacilityType;
  level: 1 | 2 | 3;
}

export default function BaseFacility(
  props: BaseFacilityProps
): React.ReactElement {
  const { type, level } = props;
  const classes = useStyles();
  const theme = useTheme();
  let color = "unset";
  if (type === FacilityType.TRADING_POST) {
    color = theme.palette.tradingPost.main;
  } else if (type === FacilityType.FACTORY) {
    color = theme.palette.factory.main;
  } else if (type === FacilityType.POWER_PLANT) {
    color = theme.palette.powerPlant.main;
  }

  return (
    <Box whiteSpace="nowrap" display="flex" mb={1} position="relative">
      <Box position="absolute" top="-22px" right="-22px">
        <IconButton>
          <CancelIcon />
        </IconButton>
      </Box>
      <Paper
        elevation={3}
        className={classes.facilityRibbon}
        style={{ backgroundColor: color }}
      />
      <Paper elevation={3} className={classes.facilityInfo}>
        <Box display="flex">
          <Box mr={0.5}>
            <Typography variant="subtitle1">{type}</Typography>
          </Box>
          {Array(level)
            .fill(0)
            .map((_, i) => (
              <FacilityLevelIndicator
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                color={color}
              />
            ))}
        </Box>
        <Box display="flex">
          <IconButton aria-label="decrease level" size="small">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <Box mx="1">
            <Typography variant="overline">Level</Typography>
          </Box>
          <IconButton aria-label="increase level" size="small">
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
