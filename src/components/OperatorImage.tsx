import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Operator } from "../operators/operator";

const operatorImageSize = 80;
const eliteStatusImageSize = 30;

const getOperatorImg = (operator: Operator | null, eliteStatus: number) => {
  if (!operator) {
    return `/images/operators/empty.png`;
  }
  if (operator.name === "Amiya" && eliteStatus > 0) {
    return `/images/operators/AmiyaE${eliteStatus}.png`;
  }
  if (eliteStatus === 2) {
    return `/images/operators/${operator.name}E2.png`;
  }
  return `/images/operators/${operator.name}.png`;
};

const getEliteIcon = (eliteStatus: number) => {
  return `/images/elite/${eliteStatus}.png`;
};

const useStyles = makeStyles({
  operatorImage: {
    width: `${operatorImageSize}px`,
    height: `${operatorImageSize}px`,
  },
  eliteStatusAnchor: {
    position: "relative",
    display: "inline-block",
  },
  eliteStatus: {
    position: "absolute",
    bottom: "2px",
    right: "1px",
  },
  eliteStatusImage: {
    width: `${eliteStatusImageSize}px`,
    height: `${eliteStatusImageSize}px`,
    filter: "drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)",
  },
});

interface OperatorImageProps {
  operator: Operator | null;
  eliteStatus?: number;
}

export default function OperatorImage({
  operator,
  eliteStatus = 0,
}: OperatorImageProps): React.ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.eliteStatusAnchor}>
      <img
        className={classes.operatorImage}
        src={getOperatorImg(operator, eliteStatus)}
        alt={operator ? operator.name : "Don't have this operator"}
      />
      {eliteStatus >= 1 && (
        <Box className={classes.eliteStatus}>
          <img
            className={classes.eliteStatusImage}
            src={getEliteIcon(eliteStatus)}
            alt={`Elite ${eliteStatus}`}
          />
        </Box>
      )}
    </div>
  );
}
