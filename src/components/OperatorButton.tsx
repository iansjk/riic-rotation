import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import OperatorImage from "./OperatorImage";
import { EliteLevel, Operator } from "../operators/operator";

const OPERATOR_RARITY_COLORS = [
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
    marginTop: "-2px",
    borderTopWidth: "2px",
    borderTopStyle: "solid",
    padding: "2px 0",
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
});

interface OperatorButtonProps {
  operator: Operator | null;
  eliteLevel?: EliteLevel;
  labelOverride?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function OperatorButton(
  props: OperatorButtonProps
): React.ReactElement {
  const classes = useStyles();
  const { operator, eliteLevel, labelOverride, onClick } = props;
  const labelText = labelOverride || operator?.name || "Don't have";

  return (
    <Box boxShadow={3}>
      <ButtonBase onClick={onClick}>
        <Grid className={classes.gridItem} item xs>
          <OperatorImage operator={operator} eliteLevel={eliteLevel} />
          <Box
            className={classes.operatorName}
            style={
              operator
                ? { borderTopColor: OPERATOR_RARITY_COLORS[operator.rarity] }
                : {}
            }
          >
            <Typography variant="body2">{labelText}</Typography>
          </Box>
        </Grid>
      </ButtonBase>
    </Box>
  );
}
