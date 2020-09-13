import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Operator } from "./operators/operator";
import OPERATORS from "./operators/operators";

interface OperatorCellProps {
  operator: Operator;
}

const operatorImageSize = 80;
const eliteStatusImageSize = 30;

const getOperatorImg = (operator: Operator) => {
  if (operator.rarity > 3) {
    return `/images/operators/${operator.name}E2.png`;
  }
  return `/images/operators/${operator.name}.png`;
};

const getEliteIcon = (eliteStatus: number) => {
  return `/images/elite/${eliteStatus}.png`;
};

const RARITY_COLORS = [
  undefined,
  undefined,
  "rgb(220, 229, 55)",
  "rgb(0, 178, 246)",
  "rgb(219, 177, 219)",
  "rgb(255, 174, 0)",
  "rgb(255, 102, 0)",
];

const useStyles = makeStyles({
  operatorName: {
    fontSize: "12px",
    textAlign: "center",
    marginBottom: "2px",
  },
  operatorImage: {
    width: `${operatorImageSize}px`,
    height: `${operatorImageSize}px`,
    boxSizing: "content-box",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
  },
  gridItem: {
    flexGrow: 0,
    marginLeft: -1,
    marginTop: -1,
    border: "1px solid black",
    backgroundColor: "#424242",
    "&:hover": {
      backgroundColor: "#808080",
      transitionDuration: "200ms",
    },
  },
  operatorButtonBase: {
    position: "relative",
    display: "inline-block",
  },
  eliteStatus: {
    position: "absolute",
    bottom: "18px",
    right: 0,
  },
  eliteStatusImage: {
    width: `${eliteStatusImageSize}px`,
    height: `${eliteStatusImageSize}px`,
  },
});

function OperatorCell(props: OperatorCellProps): React.ReactElement {
  const classes = useStyles();
  const { operator } = props;

  return (
    <>
      <Grid className={classes.gridItem} item xs key={operator.name}>
        <Box boxShadow={3}>
          <ButtonBase
            className={classes.operatorButtonBase}
            onClick={() => {
              alert(operator.name);
            }}
          >
            <img
              className={classes.operatorImage}
              style={{ borderBottomColor: RARITY_COLORS[operator.rarity] }}
              src={getOperatorImg(operator)}
              alt={operator.name}
            />
            {operator.rarity >= 3 && (
              <Box className={classes.eliteStatus}>
                <img
                  className={classes.eliteStatusImage}
                  src={getEliteIcon(operator.rarity >= 4 ? 2 : 1)}
                  alt={`Elite ${operator.rarity >= 4 ? 2 : 1}`}
                />
              </Box>
            )}
            <Box className={classes.operatorName}>{operator.name}</Box>
          </ButtonBase>
        </Box>
      </Grid>
    </>
  );
}

function OperatorGrid(): React.ReactElement {
  return (
    <>
      <Typography component="h2" variant="h5">
        Owned Operators
      </Typography>
      <Grid container>
        {OPERATORS.map((operator) => (
          <OperatorCell key={operator.name} operator={operator} />
        ))}
      </Grid>
    </>
  );
}
export default OperatorGrid;
