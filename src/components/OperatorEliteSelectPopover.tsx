import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import OperatorButton from "./OperatorButton";
import { EliteLevel, maxEliteLevel, Operator } from "../operators/operator";

const useStyles = makeStyles({
  backdrop: {
    zIndex: 1,
    backdropFilter: "blur(1.5px)",
  },
});

interface OperatorEliteSelectPopoverProps {
  operator: Operator;
  onEliteSelect: (operatorName: string, eliteLevel?: EliteLevel) => void;
  // bindPopover() properties follow...
  id: string | undefined;
  anchorEl: HTMLElement | undefined;
  open: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMouseLeave: (event: React.SyntheticEvent<any>) => void;
}

export default function OperatorEliteSelectPopover(
  props: OperatorEliteSelectPopoverProps
): React.ReactElement {
  const {
    operator,
    onEliteSelect,
    id,
    anchorEl,
    open,
    onClose,
    onMouseLeave,
  } = props;
  const classes = useStyles();
  const eliteLevels: EliteLevel[] = ["Elite 0"];
  if (maxEliteLevel(operator) === "Elite 0 Lv. 30") {
    eliteLevels.push("Elite 0 Lv. 30");
  } else if (maxEliteLevel(operator) === "Elite 1") {
    eliteLevels.push("Elite 1");
  } else if (maxEliteLevel(operator) === "Elite 2") {
    eliteLevels.push("Elite 1");
    eliteLevels.push("Elite 2");
  }

  return (
    <>
      <Backdrop open={open} className={classes.backdrop} />
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        onMouseLeave={onMouseLeave}
      >
        <Grid container>
          <Grid item>
            <OperatorButton
              operator={null}
              onClick={() => {
                onClose();
                onEliteSelect(operator.name);
              }}
            />
          </Grid>
          {eliteLevels.map((eliteLevel) => (
            <Grid item key={`${operator.name}${eliteLevel}`}>
              <OperatorButton
                operator={operator}
                eliteLevel={eliteLevel}
                labelOverride={eliteLevel}
                onClick={() => {
                  onClose();
                  onEliteSelect(operator.name, eliteLevel);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  );
}
