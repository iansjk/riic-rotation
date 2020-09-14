import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { EliteLevel, Operator } from "../operators/operator";

const operatorImageSize = 80;
const eliteLevelImageSize = 30;

const getOperatorImg = (
  operator: Operator | null,
  eliteLevel?: EliteLevel
): string => {
  if (!operator) {
    return `/images/operators/empty.png`;
  }
  if (operator.name === "Amiya" || eliteLevel === "Elite 2") {
    return `/images/operators/${operator.name} ${eliteLevel}.png`;
  }
  return `/images/operators/${operator.name}.png`;
};

const getEliteIcon = (eliteLevel: EliteLevel) => {
  return `/images/elite/${eliteLevel}.png`;
};

const useStyles = makeStyles({
  operatorImage: {
    width: `${operatorImageSize}px`,
    height: `${operatorImageSize}px`,
  },
  eliteLevelAnchor: {
    position: "relative",
    display: "inline-block",
  },
  eliteLevel: {
    position: "absolute",
    bottom: "2px",
    right: "1px",
  },
  eliteLevelImage: {
    width: `${eliteLevelImageSize}px`,
    height: `${eliteLevelImageSize}px`,
    filter: "drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)",
  },
});

interface OperatorImageProps {
  operator: Operator | null;
  eliteLevel?: EliteLevel;
}

export default function OperatorImage({
  operator,
  eliteLevel,
}: OperatorImageProps): React.ReactElement {
  const classes = useStyles();

  return (
    <div
      className={classes.eliteLevelAnchor}
      style={!eliteLevel ? { opacity: 0.2 } : {}}
    >
      <img
        className={classes.operatorImage}
        src={getOperatorImg(operator, eliteLevel)}
        alt={operator ? operator.name : "Don't have this operator"}
      />
      {(eliteLevel === "Elite 1" || eliteLevel === "Elite 2") && (
        <Box className={classes.eliteLevel}>
          <img
            className={classes.eliteLevelImage}
            src={getEliteIcon(eliteLevel)}
            alt={eliteLevel}
          />
        </Box>
      )}
    </div>
  );
}
