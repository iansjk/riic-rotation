import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import OperatorButton from "./OperatorButton";
import { maxEliteStatus, Operator } from "./operators/operator";

const useStyles = makeStyles({
  backdrop: {
    zIndex: 1,
    backdropFilter: "blur(1.5px)",
  },
});

interface OperatorEliteSelectPopoverProps {
  operator: Operator;
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
  const { open, operator } = props;
  const classes = useStyles();
  const eliteRanks =
    maxEliteStatus(operator) === 0
      ? ["0", "0 Lv. 30"]
      : Array(maxEliteStatus(operator) + 1)
          .fill(0)
          .map((_, i) => i);

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
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <Grid container>
          <Grid item>
            <OperatorButton operator={null} onClick={() => {}} />
          </Grid>
          {
            // have to explicitly cast to any[] to call map() on a union of array types
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (eliteRanks as any[]).map((rank: string | number) => (
              <Grid item key={`${operator.name}E${rank}`}>
                <OperatorButton
                  operator={operator}
                  eliteStatus={typeof rank === "string" ? 0 : rank}
                  labelOverride={`Elite ${rank}`}
                  onClick={() => {}}
                />
              </Grid>
            ))
          }
        </Grid>
      </Popover>
    </>
  );
}
